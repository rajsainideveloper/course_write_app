import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs/promises';
import path from 'path';
import { getPromptForChunk, TOTAL_CHUNKS, getFilenameForChunk, chunkTopics } from './prompts.js';

function getFormattedTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Enable stealth to minimize automated browser signals
puppeteer.use(StealthPlugin());

// Configuration for Grok
const CONFIG = {
  url: 'https://grok.com/',
  topic: 'General Awareness',
  outputFile: 'mcq_questions.json',
  userDataDir: './user_data_grok', // Separate folder to avoid conflicts with Gemini/ChatGPT sessions
  
  // Dynamic Database Enum configurations
  user_id: 'IN6Q2',
  question_type: 'l',         // l = STUDY_MATERIAL
  question_subtype: 'study_material',
  exam_type: 'PO',            
  subject: 'GK',              
  tags: 'UP Police Constable | General Knowledge'
};

/**
 * Intelligent helper to monitor and wait for Grok to complete response generation.
 */
async function waitForGrokResponse(page, initialCount, timeoutMs = 150000) {
  console.log('⏳ Waiting for Grok response generation to start...');
  const startTime = Date.now();
  
  // Step 1: Wait for response generation to start
  let started = false;
  while (Date.now() - startTime < 30000) {
    const currentCount = await page.evaluate(() => {
      return document.querySelectorAll('.message-row, [data-testid="message-row"]').length;
    });
    const stopButtonExists = await page.evaluate(() => {
      return !!document.querySelector('button[aria-label*="Stop" i], button[title*="Stop" i], .loading-indicator');
    });
    
    if (currentCount > initialCount || stopButtonExists) {
      started = true;
      console.log('⚡ Grok response generation started!');
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Step 2: Wait for generation to complete
  console.log('⏳ Waiting for response text to complete generating...');
  let previousLength = 0;
  let stableCount = 0;
  
  while (Date.now() - startTime < timeoutMs) {
    const stopButtonExists = await page.evaluate(() => {
      return !!document.querySelector('button[aria-label*="Stop" i], button[title*="Stop" i], .loading-indicator');
    });
    
    const currentLength = await page.evaluate(() => {
      const messages = Array.from(document.querySelectorAll('.message-row, [data-testid="message-row"]'));
      if (messages.length === 0) return 0;
      const lastMessage = messages[messages.length - 1];
      return lastMessage.textContent ? lastMessage.textContent.length : 0;
    });
    
    if (!stopButtonExists && currentLength > 100) {
      if (currentLength === previousLength) {
        stableCount++;
        if (stableCount >= 10) { 
          console.log('✅ Response complete! Content stable.');
          break;
        }
      } else {
        stableCount = 0;
        previousLength = currentLength;
      }
    } else {
      stableCount = 0;
      previousLength = currentLength;
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  await new Promise(resolve => setTimeout(resolve, 2000));
}

/**
 * Robust text typing for Grok's contenteditable area.
 */
async function inputPromptIntoGrok(page, promptText, selector) {
  console.log('📝 Focusing on Grok editor...');
  await page.waitForSelector(selector, { visible: true });
  await page.click(selector);
  await page.focus(selector);
  await new Promise(resolve => setTimeout(resolve, 800));

  console.log('📝 Typing prompt into Grok editor...');
  const lines = promptText.split('\n');
  for (let i = 0; i < lines.length; i++) {
    await page.type(selector, lines[i], { delay: 2 });
    if (i < lines.length - 1) {
      await page.keyboard.down('Shift');
      await page.keyboard.press('Enter');
      await page.keyboard.up('Shift');
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  console.log('✅ Typing complete.');
}

async function generateMCQs() {
  console.log('🚀 Starting Puppeteer browser session for Grok...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: CONFIG.userDataDir,
    args: [
      '--start-maximized',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    );

    console.log(`🌐 Navigating to Grok Web App: ${CONFIG.url}`);
    await page.goto(CONFIG.url, { waitUntil: 'networkidle2' });

    // Login Check
    const isLoggedIn = await page.evaluate(() => {
      return !!document.querySelector('div[contenteditable="true"], textarea');
    });

    if (!isLoggedIn) {
      console.log('🔒 PLEASE LOGIN TO GROK IN THE BROWSER WINDOW NOW.');
      await page.waitForSelector('div[contenteditable="true"], textarea', { timeout: 600000 });
      console.log('✅ Login verified!');
    } else {
      console.log('✅ Already logged in.');
    }

    const textareaSelector = 'div[contenteditable="true"]';
    const totalChunks = TOTAL_CHUNKS;
    const questionsPerChunk = 10;

    for (let chunk = 1; chunk <= totalChunks; chunk++) {
      const outputFileName = getFilenameForChunk(chunk);
      const outputPath = path.resolve(outputFileName);

      try {
        await fs.access(outputPath);
        console.log(`\n⏭️ Chunk ${chunk}/${totalChunks} already exists. Skipping...`);
        continue;
      } catch (e) {}

      console.log(`\n🌀 Processing Chunk ${chunk}/${totalChunks}...`);
      const promptText = getPromptForChunk(chunk, CONFIG, questionsPerChunk);

      const initialCount = await page.evaluate(() => {
        return document.querySelectorAll('.message-row, [data-testid="message-row"]').length;
      });

      await inputPromptIntoGrok(page, promptText, textareaSelector);
      await new Promise(resolve => setTimeout(resolve, 800));

      console.log('🚀 Submitting prompt...');
      await page.keyboard.press('Enter');
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if button click is needed
      const textStillExists = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        return el ? (el.innerText || '').trim().length > 0 : false;
      }, textareaSelector);
      
      if (textStillExists) {
        await page.evaluate(() => {
          const btn = document.querySelector('button[type="submit"], button[aria-label*="Send" i]');
          if (btn) btn.click();
        });
      }

      await waitForGrokResponse(page, initialCount);

      console.log('🔍 Extracting response...');
      let extractedText = await page.evaluate(() => {
        const messages = Array.from(document.querySelectorAll('.message-row, [data-testid="message-row"]'));
        if (messages.length === 0) return '';
        
        const lastMessage = messages[messages.length - 1];
        const content = lastMessage.querySelector('.markdown, .prose, [class*="content" i]') || lastMessage;
        
        function convertNodeToMarkdown(node) {
          if (node.nodeType === Node.TEXT_NODE) return node.nodeValue || '';
          if (node.nodeType !== Node.ELEMENT_NODE) return '';
          const tagName = node.tagName.toLowerCase();
          
          if (tagName === 'svg') return `\n\n${node.outerHTML}\n\n`;
          if (tagName === 'button' || node.classList.contains('sr-only')) return '';
          
          let childrenMarkdown = '';
          for (const child of node.childNodes) childrenMarkdown += convertNodeToMarkdown(child);
          
          switch (tagName) {
            case 'h1': return `\n\n# ${childrenMarkdown.trim()}\n\n`;
            case 'h2': return `\n\n## ${childrenMarkdown.trim()}\n\n`;
            case 'h3': return `\n\n### ${childrenMarkdown.trim()}\n\n`;
            case 'p': return `\n\n${childrenMarkdown.trim()}\n\n`;
            case 'strong': case 'b': return `**${childrenMarkdown.trim()}**`;
            case 'li': return `\n- ${childrenMarkdown.trim()}`;
            case 'pre': {
              const code = node.querySelector('code');
              return `\n\n\`\`\`\n${(code ? code.textContent : node.textContent).trim()}\n\`\`\`\n\n`;
            }
            case 'table': return `\n\n${childrenMarkdown.trim()}\n\n`;
            case 'tr': return `\n| ${childrenMarkdown}`;
            case 'td': case 'th': return `${childrenMarkdown.trim()} |`;
            default: return childrenMarkdown;
          }
        }
        
        return convertNodeToMarkdown(content).replace(/\n{3,}/g, '\n\n').trim();
      });

      if (!extractedText) throw new Error(`Extraction failed for chunk ${chunk}`);

      console.log('💾 Saving data...');
      let markdownContent = extractedText.trim();
      const markdownMatch = extractedText.match(/^```(?:markdown)?\s*([\s\S]*?)\s*```$/i);
      if (markdownMatch && markdownMatch[1]) markdownContent = markdownMatch[1].trim();

      const question_json = {
        material_title: chunkTopics[chunk].title,
        content: markdownContent,
        description: "",
        metadata: { created_at: getFormattedTimestamp(), type: "study_material" }
      };

      const finalJsonObject = {
        user_id: CONFIG.user_id,
        question_type: CONFIG.question_type,
        question_subtype: CONFIG.question_subtype,
        exam_type: CONFIG.exam_type,
        subject: CONFIG.subject,
        tags: CONFIG.tags,
        question: chunkTopics[chunk].title,
        question_json: JSON.stringify(question_json)
      };

      await fs.writeFile(outputPath, JSON.stringify(finalJsonObject, null, 2), 'utf-8');
      const mdFileName = outputFileName.replace(/\.json$/, '.md');
      await fs.writeFile(path.resolve(mdFileName), markdownContent, 'utf-8');

      // SVG extraction
      const svgs = [...markdownContent.matchAll(/<svg[\s\S]*?<\/svg>/gi)];
      if (svgs.length > 0) {
        const baseTopic = chunkTopics[chunk].title.replace(/[^a-zA-Z0-9_\u0900-\u097F-]/g, '_').replace(/_+/g, '_');
        for (let i = 0; i < svgs.length; i++) {
          const svgFilename = `${chunk}_${baseTopic}_diagram_${i + 1}.svg`;
          await fs.writeFile(path.resolve(svgFilename), svgs[i][0], 'utf-8');
        }
      }
      console.log(`✅ Chunk ${chunk} done.`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

generateMCQs();
