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

      // 10 questions takes slightly longer to generate. Let's wait 45 seconds per chunk.
      const generationDelay = 180000;
      console.log(`⏳ Waiting ${generationDelay / 1000} seconds for response...`);
      await new Promise(resolve => setTimeout(resolve, generationDelay));

      console.log('🔍 Extracting content...');
      const extractedText = await page.evaluate(() => {
        const codeBlocks = Array.from(document.querySelectorAll('pre code, .markdown-body, [class*="message"]'));
        if (codeBlocks.length > 0) {
          return codeBlocks[codeBlocks.length - 1].textContent || '';
        }
        return '';
      });

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

        // Convert the clean markdown into HTML-wrapped paragraphs
        const htmlContent = markdownToHtmlParagraphs(markdownContent);
        const created_at = getFormattedTimestamp();

        // Build the inner nested question_json object
        const question_json = {
          material_title: currentChunk.title,
          content: htmlContent,
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
