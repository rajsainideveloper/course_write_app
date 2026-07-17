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

function markdownToHtmlParagraphs(markdown) {
  const lines = markdown.split('\n');
  const htmlLines = lines.map(line => {
    const trimmed = line.trim();
    if (trimmed === '') {
      return '<p><br></p>';
    }
    // Return the line wrapped in a paragraph tag.
    return `<p>${line}</p>`;
  });
  return htmlLines.join('');
}
import { execSync } from 'child_process';

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
  url: 'https://chat.deepseek.com/',
  topic: 'Reasoning and Aptitude',
  outputFile: 'mcq_questions.json',
  userDataDir: './user_data',
  
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

async function generateMCQs() {
  console.log('🚀 Starting Puppeteer browser session with stealth plugin...');
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: CONFIG.userDataDir, // Keeps you logged in once authentication is successful
    args: [
      '--start-maximized',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  // Grant clipboard permissions so we can read copied raw markdown
  try {
    const context = browser.defaultBrowserContext();
    await context.overridePermissions('https://chat.deepseek.com', ['clipboard-read', 'clipboard-write']);
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
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Check if we are on a login or landing page requiring login action
    const currentUrl = page.url();
    console.log(`📍 Current URL: ${currentUrl}`);

    // Check if the chat input area already exists (implies already logged in)
    const chatInputExists = await page.$('textarea');

    if (!chatInputExists) {
      console.log('🔒 Chat input not found. Attempting automated login...');

      // Wait for login options or input forms to appear
      // Look for common email/username inputs
      const emailInputSelector = 'input[type="text"], input[type="email"], input[placeholder*="email" i], input[placeholder*="phone" i]';
      
      try {
        await page.waitForSelector(emailInputSelector, { timeout: 15000 });
        
        console.log('👤 Entering username...');
        await page.focus(emailInputSelector);
        await page.keyboard.down('Meta'); // Clear existing input text if any (Mac)
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Meta');
        await page.keyboard.down('Control'); // Clear existing input text if any (Windows/Linux)
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');
        
        await page.type(emailInputSelector, CONFIG.credentials.username, { delay: 50 });

        // Check if there is a password field visible, or if we need to click a button to proceed to password
        const passwordInputSelector = 'input[type="password"], input[placeholder*="password" i]';
        let passwordVisible = await page.$(passwordInputSelector);

        if (!passwordVisible) {
          console.log('➡️ Clicking Next/Proceed button to reveal password field...');
          // Look for proceed/next/login buttons
          const buttons = await page.$$('button');
          for (const btn of buttons) {
            const text = await page.evaluate(el => el.textContent, btn);
            if (text.toLowerCase().includes('next') || text.toLowerCase().includes('log in') || text.toLowerCase().includes('sign in')) {
              await btn.click();
              await new Promise(resolve => setTimeout(resolve, 2000));
              break;
            }
          }
        }

        // Wait for and enter password
        await page.waitForSelector(passwordInputSelector, { timeout: 10000 });
        console.log('🔑 Entering password...');
        await page.focus(passwordInputSelector);
        await page.type(passwordInputSelector, CONFIG.credentials.password, { delay: 50 });

        // Look for the final submit/login button
        console.log('🚀 Submitting login form...');
        const submitSelector = 'button[type="submit"], [class*="login-btn"], button:not([disabled])';
        const submitButton = await page.$(submitSelector);
        if (submitButton) {
          await submitButton.click();
        } else {
          // If no specific submit element found, press Enter in the password field
          await page.keyboard.press('Enter');
        }

        console.log('⏳ Waiting for authentication and post-login redirection...');
        await new Promise(resolve => setTimeout(resolve, 5000));

      } catch (loginError) {
        console.log('⚠️ Could not fully automate the login form clicks. It might be in a different modal or language layout.');
        console.log('Please click the "Log In" button and enter your credentials manually if the script is stuck.');
      }
    } else {
      console.log('✅ Active session detected! Already logged in.');
    }

    console.log('\n------------------------------------------------------------');
    console.log('💡 TIP: If a CAPTCHA challenge is active, please solve it manually now.');
    console.log('   The script is waiting for the main chat text-area to appear...');
    console.log('------------------------------------------------------------');

    const textareaSelector = 'textarea';
    await page.waitForSelector(textareaSelector, { timeout: 120000 });
    
    console.log('✅ Chat interface ready!');

    const totalChunks = TOTAL_CHUNKS;
    const questionsPerChunk = 10;
    let allQuestions = [];

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


      await page.focus(textareaSelector);
      
      console.log(`📝 Typing prompt for chunk ${chunk}...`);
      const lines = promptText.split('\n');
      for (let i = 0; i < lines.length; i++) {
        await page.type(textareaSelector, lines[i], { delay: 5 });
        if (i < lines.length - 1) {
          await page.keyboard.down('Shift');
          await page.keyboard.press('Enter');
          await page.keyboard.up('Shift');
        }
      }

      // Add a brief delay to ensure the UI updates and registers the input
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('➡️ Sending message...');
      await page.keyboard.press('Enter');

      // 10 questions takes slightly longer to generate. Let's wait 130 seconds per chunk.
      const generationDelay = 190000; // Full production delay (130s)
      // const generationDelay = 100000; // Full production delay (130s)
      console.log(`⏳ Waiting ${generationDelay / 1000} seconds for response...`);
      await new Promise(resolve => setTimeout(resolve, generationDelay));

      console.log('🔍 Extracting raw Markdown content...');
      let extractedText = '';
      
      // 1. Attempt to extract via Copy Button to preserve all original Markdown tags (#, ##, **, -, etc.)
      const copySuccess = await page.evaluate(() => {
        // Find the last message's container
        const messageContainers = Array.from(document.querySelectorAll('.ds-markdown, .markdown-body, [class*="message-content"]'));
        if (messageContainers.length === 0) return false;
        
        const lastMessage = messageContainers[messageContainers.length - 1];
        
        // Find the closest parent container of the last message that holds controls
        let parent = lastMessage;
        while (parent && !parent.querySelector('[role="button"], button')) {
          parent = parent.parentElement;
        }
        
        if (!parent) parent = document.body; // Fallback to global scanning if parent traversal is limited
        
        // Find all interactive elements (buttons, divs with role="button") inside this message block
        const buttons = Array.from(parent.querySelectorAll('div[role="button"], button, [role="button"], a, .ds-icon-button'));
        for (const btn of buttons) {
          const svgPath = btn.querySelector('svg path');
          if (svgPath) {
            const d = svgPath.getAttribute('d') || '';
            // Match the unique path start for the copy icon provided by the user
            if (d.startsWith('M6.14929 4.02032')) {
              btn.click();
              return true;
            }
          }
        }
        
        // Global fallback search for the latest visible copy button matching this exact path
        const allButtons = Array.from(document.querySelectorAll('div[role="button"], button, [role="button"]'));
        for (const btn of allButtons.reverse()) {
          const svgPath = btn.querySelector('svg path');
          if (svgPath) {
            const d = svgPath.getAttribute('d') || '';
            if (d.startsWith('M6.14929 4.02032')) {
              if (btn.offsetWidth > 0 && btn.offsetHeight > 0) {
                btn.click();
                return true;
              }
            }
          }
        }
        
        // Absolute fallback search by title, aria, or HTML content if path matching failed
        for (const btn of allButtons.reverse()) {
          const html = btn.innerHTML.toLowerCase();
          const title = (btn.getAttribute('title') || '').toLowerCase();
          const aria = (btn.getAttribute('aria-label') || '').toLowerCase();
          if (title.includes('copy') || aria.includes('copy') || html.includes('copy') || html.includes('ds-icon-copy')) {
            if (btn.offsetWidth > 0 && btn.offsetHeight > 0) {
              btn.click();
              return true;
            }
          }
        }
        
        return false;
      });

      if (copySuccess) {
        console.log('📋 Copy button triggered! Reading copied content from clipboard...');
        await new Promise(resolve => setTimeout(resolve, 1200)); // wait for clipboard write
        
        // 1. Try reading from the system clipboard first (reliable, focus-independent)
        try {
          const sysText = readSystemClipboard();
          if (sysText && sysText.trim().length > 0) {
            extractedText = sysText;
            console.log(`✅ Retrieved ${extractedText.length} characters of raw Markdown from system clipboard.`);
          }
        } catch (sysError) {
          console.warn('⚠️ System clipboard read failed:', sysError.message);
        }

        // 2. Try browser context clipboard read as fallback
        if (!extractedText) {
          try {
            extractedText = await page.evaluate(async () => {
              return await navigator.clipboard.readText();
            });
          } catch (clipError) {
            console.warn('⚠️ Browser clipboard read failed. Falling back to recursive direct scraping...', clipError.message);
          }
        }
      }

      // 2. Direct DOM Text Scrape Fallback (if clipboard is empty/fails)
      if (!extractedText) {
        console.log('⚠️ Direct DOM scraping fallback active (converting HTML back to raw Markdown)...');
        extractedText = await page.evaluate(() => {
          const body = document.querySelector('.ds-markdown, .markdown-body, [class*="message-content"]');
          if (!body) {
            const blocks = Array.from(document.querySelectorAll('pre code, [class*="message"]'));
            return blocks.length > 0 ? (blocks[blocks.length - 1].textContent || '') : '';
          }
          
          function convertNodeToMarkdown(node) {
            if (node.nodeType === Node.TEXT_NODE) {
              return node.nodeValue || '';
            }
            if (node.nodeType !== Node.ELEMENT_NODE) {
              return '';
            }
            
            const tagName = node.tagName.toLowerCase();
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
              case 'li':
                return `\n- ${childrenMarkdown.trim()}`;
              case 'ul':
              case 'ol':
                return `\n${childrenMarkdown}\n`;
              case 'blockquote':
                return `\n\n> ${childrenMarkdown.trim().split('\n').join('\n> ')}\n\n`;
              case 'pre':
                return `\n\n\`\`\`\n${node.textContent.trim()}\n\`\`\`\n\n`;
              case 'code':
                if (node.parentElement && node.parentElement.tagName.toLowerCase() !== 'pre') {
                  return `\`${childrenMarkdown.trim()}\``;
                }
                return childrenMarkdown;
              case 'br':
                return '\n';
              case 'tr':
                return `\n| ${childrenMarkdown}`;
              case 'td':
              case 'th':
                return `${childrenMarkdown.trim()} |`;
              default:
                return childrenMarkdown;
            }
          }
          
          return convertNodeToMarkdown(body)
            .replace(/\n{3,}/g, '\n\n')
            .trim();
        });
      }

      if (!extractedText) {
        throw new Error(`Failed to extract text content for chunk ${chunk}.`);
      }

      console.log('🧹 Cleaning and saving Markdown content...');
      let markdownContent = extractedText.trim();
      
      // Remove leading and trailing markdown code block fences if present
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

        // Build the inner nested question_json object with raw Markdown format
        const question_json = {
          material_title: currentChunk.title,
          content: markdownContent,
          description: "",
          metadata: {
            created_at: created_at,
            type: "study_material"
          }
        };

        // Build the outer final database JSON object
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
        console.log(`✅ Chunk ${chunk} processed successfully! Database JSON saved to ${outputFileName}`);

        // Save the raw clean Markdown file side-by-side
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
