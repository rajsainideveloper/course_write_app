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
  userDataDir: './user_data_gemini', // Separate folder to avoid conflicts with ChatGPT/DeepSeek sessions
  
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
 * First, it waits for a new assistant container to appear (message count increases), then monitors
 * active loading elements, gradient progress bars, and content length stabilization.
 */
async function waitForGeminiResponse(page, initialCount, timeoutMs = 150000) {
  console.log('⏳ Waiting for Gemini response generation to start...');
  const startTime = Date.now();
  
  // Step 1: Wait for response generation to start (either count increases OR stop button/loader becomes active)
  let started = false;
  while (Date.now() - startTime < 30000) { // 30s timeout to start
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
  
  if (!started) {
    console.log('⚠️ Warning: Gemini generation did not start within 30 seconds. Checking current state...');
  }
  
  // Step 2: Wait for generation to complete (loading/stop elements disappear and text stabilizes)
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
    
    // If stop button/loading bar is gone and we have content
    if (!stopOrLoadingExists && currentLength > 100) {
      // Check if the response footer / actions are now visible
      const footerExists = await page.evaluate(() => {
        const containers = Array.from(document.querySelectorAll('.model-response-text, .message-content, message-outer, article'));
        if (containers.length === 0) return false;
        const lastContainer = containers[containers.length - 1];
        
        // Find if this container has the action footer
        return !!(
          lastContainer.querySelector('.model-response-footer') || 
          lastContainer.querySelector('.message-actions') ||
          lastContainer.parentElement?.querySelector('.model-response-footer') ||
          lastContainer.parentElement?.querySelector('.message-actions') ||
          lastContainer.closest('message-outer, article')?.querySelector('.model-response-footer, .message-actions, [aria-label*="Copy" i], [aria-label*="Regenerate" i]')
        );
      });

      if (footerExists) {
        console.log('✅ Response complete! Generation stopped and footer actions are visible.');
        break;
      }
    }
    
    // Standard stabilization fallback
    if (currentLength > 0 && currentLength === previousLength) {
      stableCount++;
      if (stableCount >= 20) { // Stable for ~10 seconds
        console.log('✅ Response content has stabilized for 10 seconds. Proceeding...');
        break;
      }
    } else {
      stableCount = 0;
      previousLength = currentLength;
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Extra buffer to make sure UI is fully rendered
  await new Promise(resolve => setTimeout(resolve, 3000));
}

/**
 * Highly robust text typing designed to work reliably with Gemini's contenteditable rich text area.
 * It types the prompt line-by-line natively to update editor state naturally.
 */
async function inputPromptIntoGemini(page, promptText, selector) {
  console.log('📝 Focusing on Gemini editor...');
  await page.waitForSelector(selector, { visible: true });
  
  // Clean click and focus
  await page.click(selector);
  await page.focus(selector);
  await new Promise(resolve => setTimeout(resolve, 800));

  console.log('📝 Typing prompt into Gemini editor line-by-line...');
  const lines = promptText.split('\n');
  for (let i = 0; i < lines.length; i++) {
    // page.type focuses explicitly and types with a 2ms delay for stable state updates
    await page.type(selector, lines[i], { delay: 2 });
    
    if (i < lines.length - 1) {
      // Press Shift+Enter to create a new line within the editor without submitting
      await page.keyboard.down('Shift');
      await page.keyboard.press('Enter');
      await page.keyboard.up('Shift');
      await new Promise(resolve => setTimeout(resolve, 150)); // Brief delay to let editor process newline
    }
  }
  console.log('✅ Typing complete.');
}

async function generateMCQs() {
  console.log('🚀 Starting Puppeteer browser session for Gemini with stealth plugin...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: CONFIG.userDataDir, // Keeps you logged in once authentication is successful
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

    console.log(`🌐 Navigating to Gemini Web App: ${CONFIG.url}`);
    await page.goto(CONFIG.url, { waitUntil: 'networkidle2' });

    // Check if user is logged in
    const isLoggedIn = await page.evaluate(() => {
      // If there is an editor textbox or a prompt container on the page, the user is logged in
      return !!document.querySelector('div[contenteditable="true"], [role="textbox"], textarea, rich-textarea');
    });

    if (!isLoggedIn) {
      console.log('\n============================================================');
      console.log('🔒 PLEASE LOGIN TO GEMINI IN THE BROWSER WINDOW NOW.');
      console.log('   The script will wait for you to successfully log in...');
      console.log('============================================================');
      
      // Wait for the prompt input area to appear (which confirms successful login)
      await page.waitForSelector('div[contenteditable="true"], [role="textbox"], textarea', { timeout: 600000 });
      console.log('✅ Login verified! Session active.');
    } else {
      console.log('✅ Active session detected! Already logged in.');
    }

    console.log('\n------------------------------------------------------------');
    console.log('💡 TIP: If a Cloudflare or Turnstile challenge is active, please complete it manually.');
    console.log('   The script is waiting for the Gemini prompt editor to become active...');
    console.log('------------------------------------------------------------');

    const targetSelectors = 'div[contenteditable="true"], [role="textbox"], textarea';
    let textareaSelector = 'div[contenteditable="true"]';
    
    console.log('⏳ Waiting for any valid Gemini editor container to appear...');
    try {
      await page.waitForSelector(targetSelectors, { timeout: 120000 });
      
      // Resolve the actual matching selector dynamically
      textareaSelector = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return 'div[contenteditable="true"]';
        if (el.tagName.toLowerCase() === 'textarea') return 'textarea';
        if (el.getAttribute('role') === 'textbox') return '[role="textbox"]';
        return 'div[contenteditable="true"]';
      }, targetSelectors);
      
      console.log(`✅ Gemini interface ready! (Using editor selector: "${textareaSelector}")`);
    } catch (e) {
      console.log('⚠️ Could not find any valid Gemini editor selectors within timeout. Proceeding with default...');
    }

    const totalChunks = TOTAL_CHUNKS;
    const questionsPerChunk = 10;

    for (let chunk = 1; chunk <= totalChunks; chunk++) {
      const outputFileName = getFilenameForChunk(chunk);
      const outputPath = path.resolve(outputFileName);

      // Check if this chunk has already been successfully generated and saved
      try {
        await fs.access(outputPath);
        console.log(`\n⏭️ Chunk ${chunk}/${totalChunks} already completed (${outputFileName}). Skipping to next...`);
        continue;
      } catch (accessError) {
        // File does not exist, proceed with generation
      }

      console.log(`\n============================================================`);
      console.log(`🌀 Processing Chunk ${chunk}/${totalChunks}...`);
      console.log(`============================================================`);

      const promptText = getPromptForChunk(chunk, CONFIG, questionsPerChunk);

      // Record current number of assistant messages before sending the prompt
      const initialCount = await page.evaluate(() => {
        return document.querySelectorAll('.model-response-text, .message-content, message-outer, [data-message-author-role="assistant"]').length;
      });

      // Use the ultra-robust helper to input prompt text into the editor
      await inputPromptIntoGemini(page, promptText, textareaSelector);

      // Wait a moment for editor state to fully synchronize
      await new Promise(resolve => setTimeout(resolve, 800));

      // Trigger response submission natively via Enter first
      console.log('🚀 Triggering response submission via native Enter keypress...');
      await page.focus(textareaSelector);
      await page.click(textareaSelector);
      await page.keyboard.press('Enter');
      
      // Wait to see if it submitted successfully (meaning the input area is cleared by Gemini)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const textStillExists = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        return el ? (el.innerText || el.textContent || '').trim().length > 0 : false;
      }, textareaSelector);
      
      if (textStillExists) {
        console.log('⚠️ Prompt still detected in editor. Submitting via Send button click...');
        const clicked = await page.evaluate(() => {
          const selectors = [
            'button[aria-label*="Send" i]',
            'button[aria-label*="Submit" i]',
            'button.send-button',
            'button[data-testid*="send" i]'
          ];
          for (const sel of selectors) {
            const btn = document.querySelector(sel);
            if (btn) {
              btn.removeAttribute('disabled');
              btn.disabled = false;
              btn.click();
              return true;
            }
          }
          return false;
        });
        if (clicked) {
          console.log('✅ Send button clicked successfully as a fallback!');
        } else {
          console.log('⚠️ Send button not found. Retrying keyboard Enter press with clean click focus...');
          await page.click(textareaSelector);
          await page.focus(textareaSelector);
          await page.keyboard.press('Enter');
        }
      } else {
        console.log('✅ Prompt submitted successfully (editor is empty)!');
      }

      // Wait for Gemini to finish generating
      await waitForGeminiResponse(page, initialCount);

      console.log('🔍 Extracting response directly from Gemini DOM...');
      let extractedText = await page.evaluate(() => {
        // 1. Locate all potential content blocks inside Gemini's response area
        const contentElements = Array.from(document.querySelectorAll('.model-response-text, .message-content, rich-text, [class*="response-content" i]'));
        if (contentElements.length === 0) {
          // If no specific content classes, fall back to any message-outer or article
          const fallbacks = Array.from(document.querySelectorAll('message-outer, g-message-outer, article'));
          if (fallbacks.length === 0) return '';
          const lastFallback = fallbacks[fallbacks.length - 1];
          return convertNodeToMarkdown(lastFallback)
            .replace(/\n{3,}/g, '\n\n')
            .trim();
        }
        
        // Grab the very last content element on the page (which belongs to the active response)
        const lastContent = contentElements[contentElements.length - 1];
        
        // 2. Traverse up the DOM to find the outermost assistant response turn container.
        // We look for elements with tags/classes containing "message" or "response", or "article".
        // We stop immediately if we reach the global scroll container (e.g. .conversation-container)
        let lastResponseDiv = lastContent;
        let temp = lastContent.parentElement;
        while (temp && temp !== document.body) {
          const tagName = temp.tagName.toLowerCase();
          const className = (temp.className || '').toString().toLowerCase();
          
          if (className.includes('chat-history') || className.includes('conversation-container') || className.includes('all-conversations')) {
            break;
          }
          
          if (
            tagName.includes('message') || 
            tagName.includes('response') || 
            tagName === 'article' ||
            className.includes('message-outer') ||
            className.includes('model-response') ||
            className.includes('response-container')
          ) {
            lastResponseDiv = temp;
          }
          temp = temp.parentElement;
        }
        
        if (!lastResponseDiv) return '';
        
        function convertNodeToMarkdown(node) {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.nodeValue || '';
          }
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return '';
          }
          
          const tagName = node.tagName.toLowerCase();
          
          // Match SVG tags and output their outerHTML directly as raw inline vector graphic
          if (tagName === 'svg') {
            return `\n\n${node.outerHTML}\n\n`;
          }
          
          // Skip UI-only elements, buttons, and the response action bar
          if (
            tagName === 'button' || 
            node.classList.contains('sr-only') || 
            node.getAttribute('aria-hidden') === 'true' ||
            node.classList.contains('model-response-footer') ||
            node.classList.contains('message-actions') ||
            node.querySelector('.model-response-footer') ||
            node.closest('.model-response-footer') ||
            node.closest('.message-actions')
          ) {
            return '';
          }
          
          let childrenMarkdown = '';
          for (const child of node.childNodes) {
            childrenMarkdown += convertNodeToMarkdown(child);
          }
          
          switch (tagName) {
            case 'h1':
              return `\n\n# ${childrenMarkdown.trim()}\n\n`;
            case 'h2':
              return `\n\n## ${childrenMarkdown.trim()}\n\n`;
            case 'h3':
              return `\n\n### ${childrenMarkdown.trim()}\n\n`;
            case 'h4':
              return `\n\n#### ${childrenMarkdown.trim()}\n\n`;
            case 'p':
              return `\n\n${childrenMarkdown.trim()}\n\n`;
            case 'strong':
            case 'b':
              return `**${childrenMarkdown.trim()}**`;
            case 'em':
            case 'i':
              return `*${childrenMarkdown.trim()}*`;
            case 'li': {
              const parent = node.parentElement;
              if (parent && parent.tagName.toLowerCase() === 'ol') {
                const siblings = Array.from(parent.children).filter(el => el.tagName.toLowerCase() === 'li');
                const index = siblings.indexOf(node) + 1;
                return `\n${index}. ${childrenMarkdown.trim()}`;
              }
              return `\n- ${childrenMarkdown.trim()}`;
            }
            case 'ul':
            case 'ol':
              return `\n${childrenMarkdown}\n`;
            case 'blockquote':
              return `\n\n> ${childrenMarkdown.trim().split('\n').join('\n> ')}\n\n`;
            case 'pre': {
              const codeElement = node.querySelector('code');
              const codeText = codeElement ? codeElement.textContent : node.textContent;
              let lang = '';
              if (codeElement) {
                const className = codeElement.getAttribute('class') || '';
                const match = className.match(/language-(\w+)/);
                if (match) lang = match[1];
              }
              return `\n\n\`\`\`${lang}\n${codeText.trim()}\n\`\`\`\n\n`;
            }
            case 'code':
              if (node.parentElement && node.parentElement.tagName.toLowerCase() !== 'pre') {
                return `\`${childrenMarkdown.trim()}\``;
              }
              return childrenMarkdown;
            case 'br':
              return '\n';
            case 'table':
              return `\n\n${childrenMarkdown.trim()}\n\n`;
            case 'thead':
            case 'tbody':
              return childrenMarkdown;
            case 'tr': {
              let row = `\n| ${childrenMarkdown}`;
              const hasHeaders = Array.from(node.querySelectorAll('th')).length > 0;
              if (hasHeaders) {
                const cellCount = Array.from(node.children).filter(el => el.tagName.toLowerCase() === 'th' || el.tagName.toLowerCase() === 'td').length;
                const separator = '\n| ' + Array(cellCount).fill('---').join(' | ') + ' |';
                row += separator;
              }
              return row;
            }
            case 'td':
            case 'th':
              return `${childrenMarkdown.trim()} |`;
            case 'a': {
              const href = node.getAttribute('href') || '';
              return `[${childrenMarkdown.trim()}](${href})`;
            }
            case 'img': {
              const alt = node.getAttribute('alt') || '';
              const src = node.getAttribute('src') || '';
              return `![${alt}](${src})`;
            }
            default:
              return childrenMarkdown;
          }
        }
        
        return convertNodeToMarkdown(lastResponseDiv)
          .replace(/\n{3,}/g, '\n\n')
          .trim();
      });

      // Simple absolute text fallback if DOM parsing yielded nothing
      if (!extractedText) {
        console.log('⚠️ DOM HTML parsing returned empty. Falling back to raw text extraction...');
        extractedText = await page.evaluate(() => {
          const contentElements = Array.from(document.querySelectorAll('.model-response-text, .message-content, rich-text, [class*="response-content" i]'));
          if (contentElements.length === 0) {
            const fallbacks = Array.from(document.querySelectorAll('message-outer, g-message-outer, article'));
            if (fallbacks.length === 0) return '';
            return fallbacks[fallbacks.length - 1].textContent || '';
          }
          
          const lastContent = contentElements[contentElements.length - 1];
          let lastResponseDiv = lastContent;
          let temp = lastContent.parentElement;
          while (temp && temp !== document.body) {
            const tagName = temp.tagName.toLowerCase();
            const className = (temp.className || '').toString().toLowerCase();
            
            if (className.includes('chat-history') || className.includes('conversation-container') || className.includes('all-conversations')) {
              break;
            }
            
            if (
              tagName.includes('message') || 
              tagName.includes('response') || 
              tagName === 'article' ||
              className.includes('message-outer') ||
              className.includes('model-response') ||
              className.includes('response-container')
            ) {
              lastResponseDiv = temp;
            }
            temp = temp.parentElement;
          }
          
          if (lastResponseDiv) {
            const clone = lastResponseDiv.cloneNode(true);
            const footer = clone.querySelector('.model-response-footer, .message-actions');
            if (footer) {
              footer.remove();
            }
            return clone.textContent || '';
          }
          return '';
        });
      }

      if (!extractedText) {
        throw new Error(`Failed to extract text content for chunk ${chunk}.`);
      }

      console.log('🧹 Cleaning and saving Markdown content...');
      let markdownContent = extractedText.trim();
      
      // Strip markdown code block markers only if the AI wrapped its ENTIRE response inside them
      const markdownMatch = extractedText.match(/^```(?:markdown)?\s*([\s\S]*?)\s*```$/i);
      if (markdownMatch && markdownMatch[1]) {
        markdownContent = markdownMatch[1].trim();
      }

      // Sometimes Gemini's web UI explicitly prepends "## Gemini said" to the extracted text
      markdownContent = markdownContent.replace(/^## Gemini said\s*/i, '').trim();

      try {
        const outputFileName = getFilenameForChunk(chunk);
        const outputPath = path.resolve(outputFileName);

        const currentChunk = chunkTopics[chunk] || {
          title: `Reasoning Concepts - Part ${chunk}`,
          topics: ["General Aptitude and Logic Reasoning Applications"]
        };

        const created_at = getFormattedTimestamp();

        // Build the inner nested question_json object (preserving identical structure to original index.js)
        const question_json = {
          material_title: currentChunk.title,
          content: markdownContent,
          description: "",
          metadata: {
            created_at: created_at,
            type: "study_material"
          }
        };

        // Build the outer database JSON object compatible with ingestion scripts
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

        // Write structured Database JSON
        await fs.writeFile(outputPath, JSON.stringify(finalJsonObject, null, 2), 'utf-8');
        console.log(`✅ Chunk ${chunk} processed successfully! Database JSON saved to ${outputFileName}`);

        // Write raw Markdown side-by-side
        const mdFileName = outputFileName.replace(/\.json$/, '.md');
        const mdOutputPath = path.resolve(mdFileName);
        await fs.writeFile(mdOutputPath, markdownContent, 'utf-8');
        console.log(`📝 Raw Markdown also saved side-by-side to ${mdFileName}`);

        // Extract and save SVGs separately
        const svgs = [...markdownContent.matchAll(/<svg[\s\S]*?<\/svg>/gi)];
        if (svgs.length > 0) {
          console.log(`🖼️ Found ${svgs.length} SVG diagram(s). Saving to separate files...`);
          
          // Clean base topic string for filename
          const baseTopic = currentChunk.title.replace(/[^a-zA-Z0-9_\u0900-\u097F-]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
          
          for (let i = 0; i < svgs.length; i++) {
            const svgContent = svgs[i][0];
            const svgIndex = svgs[i].index;
            
            // Find the closest heading before this SVG
            const textBeforeSvg = markdownContent.substring(0, svgIndex);
            const headingMatches = [...textBeforeSvg.matchAll(/^(#{2,4})\s+(.+)$/gm)];
            let subtopic = `diagram_${i + 1}`;
            
            if (headingMatches.length > 0) {
              const lastHeading = headingMatches[headingMatches.length - 1][2];
              subtopic = lastHeading.replace(/[^a-zA-Z0-9_\u0900-\u097F-]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
              subtopic = `${subtopic}_${i + 1}`;
            }
            
            const svgFilename = `${chunk}_${baseTopic}_${subtopic}.svg`.replace(/_{2,}/g, '_');
            await fs.writeFile(path.resolve(svgFilename), svgContent, 'utf-8');
            console.log(`🖼️ Saved SVG to ${svgFilename}`);
          }
        }

      } catch (saveError) {
        console.error(`\n❌ Save Error in Chunk ${chunk}:`, saveError.message);
        throw saveError;
      }
    }

  } catch (error) {
    console.error('\n❌ Error encountered:', error.message);
  } finally {
    console.log('\n🚪 Closing browser session...');
    await browser.close();
  }
}

generateMCQs();
