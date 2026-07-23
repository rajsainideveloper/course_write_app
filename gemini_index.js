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

// Configuration for Gemini
const CONFIG = {
  url: 'https://gemini.google.com/app',
  topic: 'Reasoning and Aptitude',
  outputFile: 'mcq_questions.json',
  userDataDir: './user_data_gemini', // Separate folder to avoid conflicts with sessions
  
  // Dynamic Database Enum configurations
  user_id: 'IN6Q2',
  question_type: 'l',         // l = STUDY_MATERIAL
  question_subtype: 'study_material',
  exam_type: 'PO',            // SS = Staff Selection Commission
  subject: 'GK',              // LR = Logical Reasoning
  tags: 'UP Police Constable | General Knowledge'
};

/**
 * Intelligent helper to monitor and wait for Gemini to complete response generation in real-time.
 */
async function waitForGeminiResponse(page, initialCount, timeoutMs = 150000) {
  console.log('⏳ Waiting for Gemini response generation to start...');
  const startTime = Date.now();
  
  let started = false;
  while (Date.now() - startTime < 30000) {
    const currentCount = await page.evaluate(() => {
      return document.querySelectorAll('.model-response-text, .message-content, message-outer, [data-message-author-role="assistant"]').length;
    });
    const stopOrLoaderExists = await page.evaluate(() => {
      return !!document.querySelector('button[aria-label*="Stop" i], button[aria-label*="Pause" i], msc-gradient-progress-bar, .generating, .loading, .progress-bar');
    });
    
    if (currentCount > initialCount || stopOrLoaderExists) {
      started = true;
      console.log('⚡ Gemini response generation started!');
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('⏳ Waiting for response text to complete generating...');
  let previousLength = 0;
  let stableCount = 0;
  
  while (Date.now() - startTime < timeoutMs) {
    const stopOrLoadingExists = await page.evaluate(() => {
      const activeElement = document.querySelector('button[aria-label*="Stop" i], button[aria-label*="Pause" i], msc-gradient-progress-bar, .generating, .loading, .progress-bar');
      return !!activeElement;
    });
    
    const currentLength = await page.evaluate(() => {
      const containers = Array.from(document.querySelectorAll('.model-response-text, .message-content, message-outer'));
      if (containers.length === 0) return 0;
      const lastContainer = containers[containers.length - 1];
      return lastContainer.textContent ? lastContainer.textContent.length : 0;
    });
    
    if (!stopOrLoadingExists && currentLength > 100) {
      const footerExists = await page.evaluate(() => {
        const containers = Array.from(document.querySelectorAll('.model-response-text, .message-content, message-outer, article'));
        if (containers.length === 0) return false;
        const lastContainer = containers[containers.length - 1];
        
        return !!(
          lastContainer.querySelector('.model-response-footer') || 
          lastContainer.querySelector('.message-actions') ||
          lastContainer.parentElement?.querySelector('.model-response-footer') ||
          lastContainer.parentElement?.querySelector('.message-actions') ||
          lastContainer.closest('message-outer, article')?.querySelector('.model-response-footer, .message-actions, [aria-label*="Copy" i], [aria-label*="Regenerate" i]')
        );
      });

      if (footerExists && currentLength === previousLength) {
        stableCount++;
        if (stableCount >= 10) break;
      } else if (currentLength > 0 && currentLength === previousLength) {
        stableCount++;
        if (stableCount >= 40) break;
      } else {
        stableCount = 0;
        previousLength = currentLength;
      }
    } else {
      if (currentLength > 0 && currentLength === previousLength) {
        stableCount++;
        if (stableCount >= 60) break;
      } else {
        stableCount = 0;
        previousLength = currentLength;
      }
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  await new Promise(resolve => setTimeout(resolve, 3000));
}

/**
 * Highly robust text typing designed to work reliably with Gemini's contenteditable rich text area.
 */
async function inputPromptIntoGemini(page, promptText, selector) {
  console.log('📝 Focusing on Gemini editor...');
  await page.waitForSelector(selector, { visible: true });
  await page.click(selector);
  await page.focus(selector);
  await new Promise(resolve => setTimeout(resolve, 800));

  console.log('📝 Typing prompt into Gemini editor line-by-line...');
  const lines = promptText.split('\n');
  for (let i = 0; i < lines.length; i++) {
    await page.type(selector, lines[i], { delay: 2 });
    if (i < lines.length - 1) {
      await page.keyboard.down('Shift');
      await page.keyboard.press('Enter');
      await page.keyboard.up('Shift');
      await new Promise(resolve => setTimeout(resolve, 150));
    }
  }
  console.log('✅ Typing complete.');
}

async function generateMCQs() {
  const totalChunks = TOTAL_CHUNKS;
  const questionsPerChunk = 10;

  for (let chunk = 1; chunk <= totalChunks; chunk++) {
    const outputFileName = getFilenameForChunk(chunk);
    const outputPath = path.resolve(outputFileName);

    // Skip if chunk already completed
    try {
      await fs.access(outputPath);
      console.log(`\n⏭️ Chunk ${chunk}/${totalChunks} already completed. Skipping...`);
      continue;
    } catch (e) {}

    console.log(`\n============================================================`);
    console.log(`🚀 Starting Browser Session for Chunk ${chunk}/${totalChunks}...`);
    console.log(`============================================================`);

    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      userDataDir: CONFIG.userDataDir,
      args: ['--start-maximized', '--disable-blink-features=AutomationControlled'],
    });

    try {
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
      await page.goto(CONFIG.url, { waitUntil: 'networkidle2' });

      // Check login
      const isLoggedIn = await page.evaluate(() => !!document.querySelector('div[contenteditable="true"], [role="textbox"], textarea, rich-textarea'));
      if (!isLoggedIn) {
        console.log('🔒 PLEASE LOGIN TO GEMINI NOW.');
        await page.waitForSelector('div[contenteditable="true"], [role="textbox"], textarea', { timeout: 600000 });
      }

      const targetSelectors = 'div[contenteditable="true"], [role="textbox"], textarea';
      await page.waitForSelector(targetSelectors, { timeout: 120000 });
      const textareaSelector = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return 'div[contenteditable="true"]';
        if (el.tagName.toLowerCase() === 'textarea') return 'textarea';
        return el.getAttribute('role') === 'textbox' ? '[role="textbox"]' : 'div[contenteditable="true"]';
      }, targetSelectors);

      const promptText = getPromptForChunk(chunk, CONFIG, questionsPerChunk);
      const initialCount = await page.evaluate(() => document.querySelectorAll('.model-response-text, .message-content, message-outer, [data-message-author-role="assistant"]').length);

      await inputPromptIntoGemini(page, promptText, textareaSelector);
      await new Promise(resolve => setTimeout(resolve, 800));
      await page.keyboard.press('Enter');
      await new Promise(resolve => setTimeout(resolve, 1500));

      const textStillExists = await page.evaluate((sel) => (document.querySelector(sel)?.textContent || '').trim().length > 0, textareaSelector);
      if (textStillExists) {
        await page.evaluate(() => {
          const btn = document.querySelector('button[aria-label*="Send" i], button[aria-label*="Submit" i], button.send-button');
          if (btn) btn.click();
        });
      }

      await waitForGeminiResponse(page, initialCount);

      console.log('🔍 Extracting response using original robust DOM parsing...');
      let extractedText = await page.evaluate(() => {
        const contentElements = Array.from(document.querySelectorAll('.model-response-text, .message-content, rich-text, [class*="response-content" i]'));
        if (contentElements.length === 0) {
          const fallbacks = Array.from(document.querySelectorAll('message-outer, article'));
          if (fallbacks.length === 0) return '';
          return convertNodeToMarkdown(fallbacks[fallbacks.length - 1]).replace(/\n{3,}/g, '\n\n').trim();
        }
        
        const lastContent = contentElements[contentElements.length - 1];
        let lastResponseDiv = lastContent;
        let temp = lastContent.parentElement;
        while (temp && temp !== document.body) {
          const className = (temp.className || '').toString().toLowerCase();
          if (className.includes('chat-history') || className.includes('conversation-container')) break;
          const tagName = temp.tagName.toLowerCase();
          if (tagName.includes('message') || tagName === 'article' || className.includes('message-outer') || className.includes('model-response')) {
            lastResponseDiv = temp;
          }
          temp = temp.parentElement;
        }

        function convertNodeToMarkdown(node) {
          if (node.nodeType === 3) return node.nodeValue || '';
          if (node.nodeType !== 1) return '';
          const tagName = node.tagName.toLowerCase();
          if (tagName === 'svg') return `\n\n${node.outerHTML}\n\n`;
          if (tagName === 'button' || node.classList.contains('sr-only') || node.getAttribute('aria-hidden') === 'true' || node.classList.contains('model-response-footer') || node.classList.contains('message-actions')) return '';
          
          let childrenMarkdown = '';
          for (const child of node.childNodes) childrenMarkdown += convertNodeToMarkdown(child);
          
          switch (tagName) {
            case 'h1': return `\n\n# ${childrenMarkdown.trim()}\n\n`;
            case 'h2': return `\n\n## ${childrenMarkdown.trim()}\n\n`;
            case 'h3': return `\n\n### ${childrenMarkdown.trim()}\n\n`;
            case 'p': return `\n\n${childrenMarkdown.trim()}\n\n`;
            case 'strong': case 'b': return `**${childrenMarkdown.trim()}**`;
            case 'em': case 'i': return `*${childrenMarkdown.trim()}*`;
            case 'li': return `\n- ${childrenMarkdown.trim()}`;
            case 'ul': case 'ol': return `\n${childrenMarkdown}\n`;
            case 'br': return '\n';
            case 'pre': return `\n\n\`\`\`\n${node.textContent.trim()}\n\`\`\`\n\n`;
            case 'code': return `\`${childrenMarkdown.trim()}\``;
            case 'table': return `\n\n${childrenMarkdown.trim()}\n\n`;
            case 'tr': return `\n| ${childrenMarkdown}`;
            case 'td': case 'th': return `${childrenMarkdown.trim()} |`;
            default: return childrenMarkdown;
          }
        }
        return convertNodeToMarkdown(lastResponseDiv).replace(/\n{3,}/g, '\n\n').trim();
      });

      console.log('🧹 Saving content and SVGs...');
      let markdownContent = extractedText.trim().replace(/^## Gemini said\s*/i, '');
      
      const currentChunk = chunkTopics[chunk] || { title: `Part ${chunk}` };
      const question_json = {
        material_title: currentChunk.title,
        content: markdownContent,
        description: "",
        metadata: { created_at: getFormattedTimestamp(), type: "study_material" }
      };

      const finalJsonObject = {
        user_id: CONFIG.user_id,
        question_type: CONFIG.question_type,
        question_subtype: CONFIG.question_subtype,
        exam_type: currentChunk.exam_type || CONFIG.exam_type || "SS",
        subject: currentChunk.subject || CONFIG.subject || "LR",
        tags: currentChunk.tags || CONFIG.tags || `SSC | ${currentChunk.title}`,
        question: currentChunk.title,
        question_json: JSON.stringify(question_json)
      };

      await fs.writeFile(outputPath, JSON.stringify(finalJsonObject, null, 2), 'utf-8');
      const mdFileName = outputFileName.replace(/\.json$/, '.md');
      await fs.writeFile(path.resolve(mdFileName), markdownContent, 'utf-8');

      // Restore SVG extraction logic
      const svgs = [...markdownContent.matchAll(/<svg[\s\S]*?<\/svg>/gi)];
      if (svgs.length > 0) {
        const baseTopic = currentChunk.title.replace(/[^a-zA-Z0-9_\u0900-\u097F-]/g, '_').replace(/_+/g, '_');
        for (let i = 0; i < svgs.length; i++) {
          const svgFilename = `${chunk}_${baseTopic}_diagram_${i + 1}.svg`.replace(/_{2,}/g, '_');
          await fs.writeFile(path.resolve(svgFilename), svgs[i][0], 'utf-8');
        }
      }

      console.log(`✅ Chunk ${chunk} completed!`);

    } catch (error) {
      console.error(`❌ Error in Chunk ${chunk}:`, error.message);
    } finally {
      await browser.close();
      console.log(`🚪 Session closed for Chunk ${chunk}.`);
    }
  }
}

generateMCQs();
