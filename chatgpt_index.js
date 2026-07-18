import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
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

function readSystemClipboard() {
  try {
    if (process.platform === 'darwin') {
      return execSync('pbpaste', { encoding: 'utf-8' });
    } else if (process.platform === 'win32') {
      return execSync('powershell -NoProfile -Command "Get-Clipboard"', { encoding: 'utf-8' });
    } else {
      try {
        return execSync('xclip -selection clipboard -o', { encoding: 'utf-8' });
      } catch (e) {
        return execSync('xsel --clipboard --output', { encoding: 'utf-8' });
      }
    }
  } catch (error) {
    console.warn('⚠️ System clipboard read failed:', error.message);
    return null;
  }
}

// Enable stealth to minimize automated browser signals
puppeteer.use(StealthPlugin());

// Configuration
const CONFIG = {
  url: 'https://chatgpt.com/',
  topic: 'Reasoning and Aptitude',
  outputFile: 'mcq_questions.json',
  userDataDir: './user_data_chatgpt', // Separate folder to avoid conflicts with DeepSeek session
  
  // Dynamic Database Enum configurations
  user_id: 'IN6Q2',
  question_type: 'l',         // l = STUDY_MATERIAL
  question_subtype: 'study_material',
  exam_type: 'SS',            // SS = Staff Selection Commission
  subject: 'LR',              // LR = Logical Reasoning
  tags: 'SSC | Logical Reasoning',
  
  // Login Credentials
  credentials: {
    username: 'rajsainideveloper@gmail.com',
    password: 'Rajmaurya9935@'
  }
};

/**
 * Intelligent helper to monitor and wait for ChatGPT to complete response generation in real-time.
 * First, it waits for a new assistant message to appear (message count increases), then monitors
 * stop-button state and content length stabilization.
 */
async function waitForChatGPTResponse(page, initialCount, timeoutMs = 60000) {
  console.log('⏳ Waiting for ChatGPT response generation to start...');
  const startTime = Date.now();
  
  // Step 1: Wait for response generation to start (either count increases OR stop button becomes active)
  let messageAppeared = false;
  while (Date.now() - startTime < 30000) { // 30s timeout to start
    const currentCount = await page.evaluate(() => {
      return document.querySelectorAll('[data-message-author-role="assistant"], .agent-turn').length;
    });
    const stopButtonExists = await page.evaluate(() => {
      return !!document.querySelector('[data-testid="stop-button"], button[aria-label*="Stop" i], button[title*="Stop" i]');
    });
    
    if (currentCount > initialCount || stopButtonExists) {
      messageAppeared = true;
      console.log('⚡ ChatGPT response generation started!');
      break;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  if (!messageAppeared) {
    console.log('⚠️ Warning: No new assistant message detected within 30 seconds. Checking current state...');
  }
  
  // Step 2: Wait for generation to complete (stop button disappears, copy button appears, or text stabilizes)
  console.log('⏳ Waiting for response text to complete generating...');
  let previousLength = 0;
  let stableCount = 0;
  
  while (Date.now() - startTime < timeoutMs) {
    const stopButtonExists = await page.evaluate(() => {
      const stopBtn = document.querySelector('[data-testid="stop-button"], button[aria-label*="Stop" i], button[title*="Stop" i]');
      return !!stopBtn;
    });
    
    // Check if the Copy button (which is rendered only after response completion) is present under the last message
    const copyButtonExists = await page.evaluate(() => {
      const assistantMessages = Array.from(document.querySelectorAll('[data-message-author-role="assistant"], .agent-turn'));
      if (assistantMessages.length === 0) return false;
      const lastMessage = assistantMessages[assistantMessages.length - 1];
      
      // Target the exact Copy Button attributes provided by ChatGPT
      const copyBtn = lastMessage.querySelector('button[data-testid="copy-turn-action-button"], button[aria-label="Copy response"], button[aria-label*="Copy" i]');
      return !!copyBtn;
    });
    
    const currentLength = await page.evaluate(() => {
      const assistantMessages = Array.from(document.querySelectorAll('[data-message-author-role="assistant"], .agent-turn'));
      if (assistantMessages.length === 0) return 0;
      const lastMessage = assistantMessages[assistantMessages.length - 1];
      return lastMessage.textContent ? lastMessage.textContent.length : 0;
    });
    
    // If copy button is present and stop button is gone, the response is 100% complete
    if (copyButtonExists && !stopButtonExists) {
      console.log('✅ Response complete! Copy button detected and generation stopped.');
      break;
    }
    
    // Standard stabilization fallback
    if (currentLength > 0 && currentLength === previousLength) {
      stableCount++;
      if (stableCount >= 10) { // Stable for ~5 seconds
        console.log('✅ Response content has stabilized. Proceeding...');
        break;
      }
    } else {
      stableCount = 0;
      previousLength = currentLength;
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Extra buffer to make sure UI is updated completely
  await new Promise(resolve => setTimeout(resolve, 1500));
}

/**
 * Highly robust text typing designed to work reliably with Lexical Rich Text Editor (ChatGPT)
 * typing the prompt line-by-line natively to update editor state naturally.
 */
async function inputPromptIntoChatGPT(page, promptText, selector) {
  console.log('📝 Focusing on ChatGPT editor...');
  await page.waitForSelector(selector, { visible: true });
  
  // Clean click and focus
  await page.click(selector);
  await page.focus(selector);
  await new Promise(resolve => setTimeout(resolve, 800));

  console.log('📝 Typing prompt into ChatGPT editor line-by-line...');
  const lines = promptText.split('\n');
  for (let i = 0; i < lines.length; i++) {
    // page.type focuses the element explicitly for every line, typing with a tiny 2ms delay for Lexical state sync
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
  console.log('🚀 Starting Puppeteer browser session for ChatGPT with stealth plugin...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: CONFIG.userDataDir, // Keeps session persistent
    args: [
      '--start-maximized',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  // Grant clipboard permissions for raw Markdown extraction
  try {
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://chatgpt.com', ['clipboard-read', 'clipboard-write']);
    console.log('✅ Clipboard permissions granted for raw Markdown extraction.');
  } catch (permError) {
    console.warn('⚠️ Warning: Failed to set clipboard permissions:', permError.message);
  }

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );
    
    console.log(`🔗 Navigating to ${CONFIG.url}...`);
    await page.goto(CONFIG.url, { waitUntil: 'domcontentloaded' });

    // Wait a brief moment to check current interface status
    await new Promise(resolve => setTimeout(resolve, 5000));

    const currentUrl = page.url();
    console.log(`📍 Current URL: ${currentUrl}`);

    // Check if the chat input area already exists (implies already logged in)
    let chatInputExists = await page.$('#prompt-textarea, textarea, [contenteditable="true"]');

    if (!chatInputExists) {
      console.log('🔒 Chat input not found. Attempting automated login detection...');

      // Look for any Log In buttons on the landing page
      const loginTriggered = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button, a'));
        const loginBtn = buttons.find(b => {
          const txt = (b.textContent || '').toLowerCase();
          return txt.includes('log in') || txt.includes('login');
        });
        if (loginBtn) {
          loginBtn.click();
          return true;
        }
        return false;
      });

      if (loginTriggered) {
        console.log('➡️ Clicked Log In button. Waiting for login form redirect...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

      // Check for email input field
      const emailSelector = 'input[name="username"], input[type="email"], input[placeholder*="email" i]';
      try {
        await page.waitForSelector(emailSelector, { timeout: 10000 });
        
        console.log('👤 Entering username/email...');
        await page.focus(emailSelector);
        await page.type(emailSelector, CONFIG.credentials.username, { delay: 50 });

        // Click Next/Continue if password input is not yet visible
        const passwordSelector = 'input[name="password"], input[type="password"]';
        let passwordVisible = await page.$(passwordSelector);
        if (!passwordVisible) {
          console.log('➡️ Clicking Continue...');
          await page.evaluate(() => {
            const btns = Array.from(document.querySelectorAll('button'));
            const continueBtn = btns.find(b => {
              const text = (b.textContent || '').toLowerCase();
              return text.includes('continue') || text.includes('next');
            });
            if (continueBtn) continueBtn.click();
          });
          await new Promise(resolve => setTimeout(resolve, 3000));
        }

        // Enter Password
        await page.waitForSelector(passwordSelector, { timeout: 10000 });
        console.log('🔑 Entering password...');
        await page.focus(passwordSelector);
        await page.type(passwordSelector, CONFIG.credentials.password, { delay: 50 });

        // Click Continue/Submit to submit the form
        console.log('🚀 Submitting login form...');
        await page.evaluate(() => {
          const btns = Array.from(document.querySelectorAll('button'));
          const submitBtn = btns.find(b => {
            const text = (b.textContent || '').toLowerCase();
            return text.includes('continue') || text.includes('log in') || text.includes('submit');
          });
          if (submitBtn) {
            submitBtn.click();
          } else {
            const form = document.querySelector('form');
            if (form) form.submit();
          }
        });

        console.log('⏳ Waiting for redirection post-authentication...');
        await new Promise(resolve => setTimeout(resolve, 8000));
      } catch (loginError) {
        console.log('⚠️ Automatic login form automation encountered elements outside standard Auth0 layouts.');
        console.log('👉 Please complete the login form manually in the visible browser window if required.');
      }
    } else {
      console.log('✅ Active session detected! Already logged in.');
    }

    console.log('\n------------------------------------------------------------');
    console.log('💡 TIP: If a Cloudflare or Turnstile challenge is active, please complete it manually.');
    console.log('   The script is waiting for the ChatGPT prompt textarea to become active...');
    console.log('------------------------------------------------------------');

    const targetSelectors = '#prompt-textarea, div[contenteditable="true"], textarea';
    let textareaSelector = '#prompt-textarea';
    
    console.log('⏳ Waiting for any valid ChatGPT editor container to appear...');
    try {
      await page.waitForSelector(targetSelectors, { timeout: 120000 });
      
      // Resolve the actual matching selector dynamically
      textareaSelector = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return '#prompt-textarea';
        if (el.id === 'prompt-textarea') return '#prompt-textarea';
        if (el.tagName.toLowerCase() === 'textarea') return 'textarea';
        if (el.getAttribute('contenteditable') === 'true') return 'div[contenteditable="true"]';
        return '#prompt-textarea';
      }, targetSelectors);
      
      console.log(`✅ ChatGPT interface ready! (Using editor selector: "${textareaSelector}")`);
    } catch (e) {
      console.log('⚠️ Could not find any valid ChatGPT editor selectors within timeout. Proceeding with default "#prompt-textarea"...');
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
        return document.querySelectorAll('[data-message-author-role="assistant"], .agent-turn').length;
      });

      // Use the ultra-robust helper to input prompt text into the editor
      await inputPromptIntoChatGPT(page, promptText, textareaSelector);

      // Wait a moment for editor state to fully synchronize
      await new Promise(resolve => setTimeout(resolve, 800));

      // Trigger response submission natively via keyboard Enter press first
      console.log('🚀 Triggering response submission via native Enter keypress...');
      await page.focus(textareaSelector);
      await page.click(textareaSelector);
      await page.keyboard.press('Enter');
      
      // Wait to see if it submitted successfully (meaning the input area is cleared by ChatGPT)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const textStillExists = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        return el ? (el.innerText || el.textContent || '').trim().length > 0 : false;
      }, textareaSelector);
      
      if (textStillExists) {
        console.log('⚠️ Prompt still detected in editor. Submitting via Send button click...');
        const clicked = await page.evaluate(() => {
          const selectors = [
            '[data-testid="send-button"]',
            '[data-testid="composer-send-button"]',
            'button[data-testid*="send" i]',
            'button[aria-label="Send prompt"]',
            'button[aria-label*="Send" i]'
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

      // Wait for ChatGPT to finish generating
      await waitForChatGPTResponse(page, initialCount);

      console.log('🔍 Extracting response directly from ChatGPT DOM (bypassing clipboard)...');
      let extractedText = await page.evaluate(() => {
        // 1. Locate all article tags (which represent individual turns in modern ChatGPT)
        const articles = Array.from(document.querySelectorAll('article'));
        
        let lastResponseDiv = null;
        if (articles.length === 0) {
          // Fallback to standard markdown elements if articles are missing
          const fallbackDivs = Array.from(document.querySelectorAll('.markdown, .prose, [class*="markdown" i], [class*="prose" i]'));
          if (fallbackDivs.length === 0) return '';
          lastResponseDiv = fallbackDivs[fallbackDivs.length - 1];
        } else {
          // 2. Identify the last article that corresponds to an assistant response
          let lastAssistantArticle = null;
          for (let i = articles.length - 1; i >= 0; i--) {
            const art = articles[i];
            const isAssistant = art.querySelector('[data-testid*="copy" i], [aria-label*="Copy" i], [aria-label*="Response actions" i], [data-message-author-role="assistant"]');
            if (isAssistant) {
              lastAssistantArticle = art;
              break;
            }
          }
          
          // Fallback to the absolute last article if no explicit markers are found
          if (!lastAssistantArticle) {
            lastAssistantArticle = articles[articles.length - 1];
          }
          
          // 3. Find the inner markdown content block inside the article
          lastResponseDiv = lastAssistantArticle.querySelector('.markdown, .prose, [class*="markdown" i], [class*="prose" i]');
          if (!lastResponseDiv) {
            lastResponseDiv = lastAssistantArticle; // Fallback to article itself
          }
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
          
          // Skip UI-only elements, buttons, SVGs, and the response action bar
          if (
            tagName === 'button' || 
            tagName === 'svg' ||
            node.classList.contains('sr-only') || 
            node.getAttribute('aria-hidden') === 'true' ||
            node.getAttribute('aria-label') === 'Response actions' ||
            node.querySelector('[aria-label="Response actions"]') ||
            node.closest('[aria-label="Response actions"]')
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
          const articles = Array.from(document.querySelectorAll('article'));
          if (articles.length > 0) {
            // Find last article with assistant features
            let lastAssistant = null;
            for (let i = articles.length - 1; i >= 0; i--) {
              const art = articles[i];
              if (art.querySelector('[data-testid*="copy" i], [aria-label*="Copy" i], [aria-label*="Response actions" i]')) {
                lastAssistant = art;
                break;
              }
            }
            if (!lastAssistant) lastAssistant = articles[articles.length - 1];
            
            // Extract text but remove the "Response actions" bar if present to avoid noise
            const clone = lastAssistant.cloneNode(true);
            const actionsBar = clone.querySelector('[aria-label="Response actions"]');
            if (actionsBar) {
              actionsBar.remove();
            }
            return clone.textContent || '';
          }
          
          // Absolute emergency fallback
          const divs = Array.from(document.querySelectorAll('.markdown, .prose, [class*="markdown" i]'));
          if (divs.length > 0) {
            return divs[divs.length - 1].textContent || '';
          }
          return '';
        });
      }

      if (!extractedText) {
        throw new Error(`Failed to extract text content for chunk ${chunk}.`);
      }

      console.log('🧹 Cleaning and saving Markdown content...');
      let markdownContent = extractedText.trim();
      
      // Strip markdown code block markers if the AI wrapped its entire response inside them
      const markdownMatch = extractedText.match(/```markdown\s*([\s\S]*?)\s*```/) || extractedText.match(/```\s*([\s\S]*?)\s*```/);
      if (markdownMatch && markdownMatch[1]) {
        markdownContent = markdownMatch[1].trim();
      }

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

        // Write fully structured Database JSON
        await fs.writeFile(outputPath, JSON.stringify(finalJsonObject, null, 2), 'utf-8');
        console.log(`✅ Chunk ${chunk} processed successfully! Database JSON saved to ${outputFileName}`);

        // Write side-by-side raw Markdown
        const mdFileName = outputFileName.replace(/\.json$/, '.md');
        const mdOutputPath = path.resolve(mdFileName);
        await fs.writeFile(mdOutputPath, markdownContent, 'utf-8');
        console.log(`📝 Raw Markdown also saved side-by-side to ${mdFileName}`);

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
