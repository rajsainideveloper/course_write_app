/**
 * This file allows you to define different prompt templates depending on the chunk number.
 * You can customize the prompt for each chunk individually to focus on different difficulty levels, subtopics, or scopes.
 */

// A mapping of chunk numbers to their specific prompt generator functions.
// Customize these or add more chunk numbers as needed!
const chunkPrompts = {
  // --- Chunk 1: Foundational/Basic Concepts ---
  1: (topic, questionsPerChunk) => `Generate ${questionsPerChunk} unique multiple-choice questions (MCQs) about the foundational/basic concepts of ${topic}. 
Ensure these questions are completely new and different from any questions already generated in this conversation.
The response must be strictly formatted as a valid JSON array of objects. Do not include any conversational text or explanations before or after the JSON.
Each object in the array must have exactly this structure:
{
  "question": "The text of the question?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct_answer": "Option A"
}`,

  // --- Chunk 2: Intermediate/Practical Usage ---
  2: (topic, questionsPerChunk) => `Generate ${questionsPerChunk} unique multiple-choice questions (MCQs) about intermediate concepts and practical usage of ${topic}. 
Ensure these questions are completely new and different from any questions already generated in this conversation.
The response must be strictly formatted as a valid JSON array of objects. Do not include any conversational text or explanations before or after the JSON.
Each object in the array must have exactly this structure:
{
  "question": "The text of the question?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct_answer": "Option A"
}`,

  // --- Chunk 3: Advanced Concepts / Edge Cases ---
  3: (topic, questionsPerChunk) => `Generate ${questionsPerChunk} unique multiple-choice questions (MCQs) about advanced concepts, edge cases, and optimization regarding ${topic}. 
Ensure these questions are completely new and different from any questions already generated in this conversation.
The response must be strictly formatted as a valid JSON array of objects. Do not include any conversational text or explanations before or after the JSON.
Each object in the array must have exactly this structure:
{
  "question": "The text of the question?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct_answer": "Option A"
}`
};

/**
 * Default prompt template used if no chunk-specific prompt is explicitly defined above.
 */
const defaultPrompt = (topic, questionsPerChunk) => `Generate ${questionsPerChunk} unique multiple-choice questions (MCQs) about ${topic}. 
Ensure these questions are completely new and different from any questions already generated in this conversation.
The response must be strictly formatted as a valid JSON array of objects. Do not include any conversational text or explanations before or after the JSON.
Each object in the array must have exactly this structure:
{
  "question": "The text of the question?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct_answer": "Option A"
}`;

/**
 * Returns the prompt string based on the chunk number and the configuration.
 * 
 * @param {number} chunk - The current chunk number (1-based index)
 * @param {object} config - Configuration object containing topic and other settings
 * @param {number} questionsPerChunk - The number of questions to generate for this chunk
 * @returns {string} The fully compiled prompt text
 */
export function getPromptForChunk(chunk, config, questionsPerChunk) {
  const topic = config.topic;
  
  // If we have a specific prompt defined for this chunk, use it
  if (typeof chunkPrompts[chunk] === 'function') {
    return chunkPrompts[chunk](topic, questionsPerChunk);
  }
  
  // Otherwise, fallback to the default prompt
  return defaultPrompt(topic, questionsPerChunk);
}
