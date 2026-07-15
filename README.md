# Puppeteer MCQ Generator from DeepSeek Chat

This project automates generating multiple-choice questions (MCQs) on specific topics using the DeepSeek chat interface and saving the structured output into a local JSON file.

## Prerequisites

- Node.js installed on your machine
- npm package manager

## Setup

Install the required dependencies:

```bash
npm install
```

## Running the Script

To execute the Puppeteer automation:

```bash
npm start
```

## How It Works

1. **Launches Headfully**: The browser launches in non-headless mode (`headless: false`) to let you manually log in or solve Cloudflare CAPTCHAs if prompted.
2. **Login Window**: By default, it gives you a 30-second window to authenticate/log in on DeepSeek if you aren't already.
3. **Automated Input**: It automatically focuses the message textarea and types an explicit prompt requesting standard JSON output format for MCQs.
4. **Submits Prompt**: Simulates pressing `Enter` to submit.
5. **Parses & Extracts**: Monitors the response, extracts the generated JSON snippet from the page, sanitizes markdown wrappers, and validates it.
6. **Saves File**: Automatically creates and writes the final structured output to `mcq_questions.json`.
