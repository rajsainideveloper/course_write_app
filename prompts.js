/**
 * Custom prompt generator designed for course generation.
 * This file divides the extensive Reasoning curriculum (Verbal, Non-Verbal, Visual, and Logical Puzzles)
 * into 42 distinct, granular chapters and generates dynamic prompts in the custom Markdown dialect.
 */

// Mapping of 42 individual chapters to their specific topics
export const chunkTopics = {
  1: {
    title: "Analogy (Verbal)",
    topics: [
      "Analogy Basics and Overview",
      "Letter Based Analogy",
      "Number Based Analogy",
      "Word Based Analogy",
      "GK/General Knowledge Based Analogy",
      "Mixed (Letter + Number) Analogy"
    ]
  },
  2: {
    title: "Classification (Odd One Out)",
    topics: [
      "Classification Basics and Rules",
      "Letter Based Classification",
      "Number Based Classification",
      "Word Based Classification",
      "GK Based Classification"
    ]
  },
  3: {
    title: "Coding-Decoding",
    topics: [
      "Coding-Decoding Principles",
      "Letter Shifting (Forward/Backward)",
      "Operation Based (Addition/Subtraction/Multiplication)",
      "Matrix Coding",
      "Chinese Coding (Symbols/Figures)",
      "Number Coding (Alphabet Position)",
      "Conditional Coding (If-Then)"
    ]
  },
  4: {
    title: "Blood Relations",
    topics: [
      "Blood Relation Concepts and Family Tree Drawing",
      "Direct Relation (Mother/Father/Son/Daughter)",
      "Coded Relations (Symbols like A+B, A-B, A×B)",
      "Family Tree/Puzzle Based",
      "Generation Gap based puzzles"
    ]
  },
  5: {
    title: "Direction Sense",
    topics: [
      "Direction Compass and Basic Turns (Left/Right)",
      "Shadow Based Problems (Sunrise/Sunset)",
      "Distance between Points (Pythagoras Theorem applications)",
      "Coded Directions (North = ↑, etc.)"
    ]
  },
  6: {
    title: "Syllogism",
    topics: [
      "Syllogism Basics (Venn diagram approach)",
      "2-Statement based",
      "3-Statement based",
      "Possibility Cases (Can be / Can never be)",
      "Either/Or Cases",
      "Only / Only a few Cases"
    ]
  },
  7: {
    title: "Order & Ranking",
    topics: [
      "Order and Position Rules",
      "Position in a Row (Left/Right)",
      "Interchange of Positions",
      "Total Number of Persons in a Row",
      "Between Two Persons",
      "Comparison of Heights/Marks/Ages"
    ]
  },
  8: {
    title: "Alphabet & Number Series",
    topics: [
      "Series Basics and Pattern Recognition",
      "Missing Term in Series",
      "Wrong Term in Series",
      "Mixed Series (Alphabet + Number)"
    ]
  },
  9: {
    title: "Continuous Pattern Series",
    topics: [
      "Continuous Pattern Principles",
      "Letter Repeating Series",
      "Pattern cycles and group identification"
    ]
  },
  10: {
    title: "Word Formation",
    topics: [
      "Meaningful Word from Letters",
      "Number of Letters between two Alphabets",
      "Dictionary Order and Ranking of Words"
    ]
  },
  11: {
    title: "Logical Sequence of Words",
    topics: [
      "Ordering principles",
      "Chronological Order",
      "Dictionary Order",
      "Life Cycle Order",
      "Work Flow Order"
    ]
  },
  12: {
    title: "Assertion & Reasoning",
    topics: [
      "Assertion (A) & Reason (R) Concepts",
      "Establishing logical links",
      "True/False Statement analysis"
    ]
  },
  13: {
    title: "Statement & Assumptions",
    topics: [
      "Understanding Premise and Assumptions",
      "Implicit/Explicit Assumptions",
      "Direct/Indirect Assumptions"
    ]
  },
  14: {
    title: "Statement & Conclusions",
    topics: [
      "Conclusion Extraction Guidelines",
      "Logical Conclusions",
      "Definite/Probable Conclusions"
    ]
  },
  15: {
    title: "Statement & Arguments",
    topics: [
      "Evaluation of Arguments",
      "Strong/Weak Arguments",
      "For/Against Arguments"
    ]
  },
  16: {
    title: "Cause & Effect",
    topics: [
      "Causal Relationships",
      "Immediate/Remote Cause",
      "Direct/Indirect Effect"
    ]
  },
  17: {
    title: "Course of Action",
    topics: [
      "Administrative and Practical Decision Making",
      "Practical/Impractical Actions",
      "Immediate/Future Actions"
    ]
  },
  18: {
    title: "Input-Output (Machine Based)",
    topics: [
      "Machine rearrangement logic",
      "Shifting based inputs (Left/Right)",
      "Arrangement based inputs (Ascending/Descending)"
    ]
  },
  19: {
    title: "Mathematical Operations",
    topics: [
      "Sign Substitution Rules (BODMAS)",
      "Equation Balancing",
      "Box Based Math Operations"
    ]
  },
  20: {
    title: "Mirror Image",
    topics: [
      "Reflection Rules (Lateral Inversion)",
      "Horizontal Mirror",
      "Vertical Mirror",
      "Clock Mirror Image"
    ]
  },
  21: {
    title: "Water Image",
    topics: [
      "Inversion Rules (Vertical Inversion)",
      "Basic Figures",
      "Alphabets (Capital/Small)",
      "Numbers"
    ]
  },
  22: {
    title: "Paper Folding & Cutting",
    topics: [
      "Symmetry and Crease Lines",
      "Folded Paper (Half/Quarter)",
      "Cut Design",
      "Unfolded Pattern",
      "Finding the Final Figure"
    ]
  },
  23: {
    title: "Paper Cutting (Counting)",
    topics: [
      "Number of Pieces after Cutting",
      "Symmetrical Cuts"
    ]
  },
  24: {
    title: "Embedded Figures",
    topics: [
      "Pattern overlay and recognition",
      "Finding Hidden Figure",
      "Figure inside another Figure"
    ]
  },
  25: {
    title: "Figure Completion",
    topics: [
      "Incomplete patterns",
      "Missing Part of Figure (Analogy approach)",
      "Rotation/Reflection based completion"
    ]
  },
  26: {
    title: "Figure Series (Non-Verbal)",
    topics: [
      "Visual pattern steps",
      "Rotation Series (Clockwise/Anticlockwise)",
      "Addition/Deletion of Elements",
      "Movement Series (Up/Down/Left/Right)",
      "Replacement Series"
    ]
  },
  27: {
    title: "Figure Analogy (Non-Verbal)",
    topics: [
      "Visual relations",
      "Shape based transformation",
      "Pattern based comparison",
      "Rotation based transformation"
    ]
  },
  28: {
    title: "Figure Classification (Odd One Out - Non-Verbal)",
    topics: [
      "Odd elements in visual patterns",
      "Shape/Size based mismatches",
      "Rotation mismatches",
      "Pattern mismatches"
    ]
  },
  29: {
    title: "Cubes & Dices",
    topics: [
      "Open Dice (Net folding and patterns)",
      "Closed Dice (Opposite/Face Adjacent determinations)",
      "Number of Cubes in a Stack",
      "Painted Cubes (Cutting / colored faces rules)"
    ]
  },
  30: {
    title: "Venn Diagrams",
    topics: [
      "Logical Representation of Sets",
      "Maximum/Minimum Cases",
      "Relationship based diagrams"
    ]
  },
  31: {
    title: "Counting of Figures",
    topics: [
      "Geometric shortcuts",
      "Number of Triangles",
      "Number of Squares/Rectangles",
      "Number of Parallelograms",
      "Number of Straight Lines"
    ]
  },
  32: {
    title: "Dot Situation",
    topics: [
      "Analyzing dot placements",
      "Common Region of Figures",
      "Intersection of Shapes"
    ]
  },
  33: {
    title: "Analogy of Figures (Matrix based)",
    topics: [
      "Matrix grid reasoning",
      "2×2 Matrix patterns",
      "3×3 Matrix patterns",
      "Pattern completion based grids"
    ]
  },
  34: {
    title: "Rule Detection",
    topics: [
      "Visual Rules",
      "Similarity of Figures",
      "Pattern Identification"
    ]
  },
  35: {
    title: "Figure Partitioning",
    topics: [
      "Dividing Figures into Identical Parts",
      "Minimum Number of Parts"
    ]
  },
  36: {
    title: "Seating Arrangement",
    topics: [
      "Linear Arrangement (Single/Row)",
      "Circular Arrangement (Facing Centre/Outside)",
      "Square/Rectangular Arrangements",
      "Uncertain Number of Persons"
    ]
  },
  37: {
    title: "Floor/Puzzle Based",
    topics: [
      "Multiple Floors (Up/Down sorting)",
      "Persons & Preferences (Colour/Food/City)",
      "Box/Item Based Arrangement"
    ]
  },
  38: {
    title: "Scheduling",
    topics: [
      "Days of Week sorting",
      "Months of Year sorting",
      "Time Slots allocation"
    ]
  },
  39: {
    title: "Inequalities (Coded)",
    topics: [
      "Direct Inequalities (>, <, =, ≥, ≤)",
      "Coded Inequalities (Symbols like @, #, $, %)"
    ]
  },
  40: {
    title: "Data Sufficiency",
    topics: [
      "Sufficient Data requirements",
      "Two Statements (I & II)",
      "Three Statements (I, II, III)"
    ]
  },
  41: {
    title: "Clock & Calendar",
    topics: [
      "Angle between Hands",
      "Mirror Image of Clock",
      "Day/Date based (Leap/Ordinary Year)",
      "Odd Days Concept"
    ]
  },
  42: {
    title: "Blood Relations (Coded Puzzle based)",
    topics: [
      "Family Tree with 4-5 Generations",
      "Coded Symbols & Directions combination"
    ]
  }
};

export const TOTAL_CHUNKS = Object.keys(chunkTopics).length;

/**
 * Returns the prompt string based on the chunk number and config.
 * 
 * @param {number} chunk - The current chunk number (1-based index)
 * @param {object} config - Configuration object
 * @param {number} questionsPerChunk - Unused here, but kept for signature compatibility
 * @returns {string} The fully compiled prompt text
 */
export function getPromptForChunk(chunk, config, questionsPerChunk) {
  const currentChunk = chunkTopics[chunk] || {
    title: `Reasoning Concepts - Part ${chunk}`,
    topics: ["General Aptitude and Logic Reasoning Applications"]
  };

  const topicListString = currentChunk.topics.join('\n');

  return `You are a world-class Reasoning and Aptitude professor writing a comprehensive, premium textbook for elite students preparing for highly competitive exams (such as CAT, GMAT, CSAT, and Bank PO). Your goal is to write a deeply educational, realistic, and highly authoritative chapter that feels entirely human-written, avoiding all standard AI clichés and generic summaries.

# WRITING STYLE & HUMAN VOICE GUIDELINES
1. **Write like a Veteran Human Educator**: Use a tone that is authoritative, engaging, direct, and intellectually stimulating. Be passionate about the logic, and teach the underlying cognitive structures, shortcuts, and mental models.
2. **Avoid AI Clichés & Buzzwords**: Do NOT use phrases like "Let's dive in," "In conclusion," "It is crucial to remember," "Essentially," "Moreover," "Furthermore," "Let's look at an example," or robotic transitions. Start directly with the content. Do not write any conversational preamble or postscript (e.g. "Sure, here is your chapter").
3. **Provide Immense Depth**: Avoid shallow definitions. For every sub-topic listed, explain the logical mechanics in full, the standard formulas (such as the letter-index grid, EJOTY rules, or circular seating direction formulas), and the exact step-by-step cognitive steps required to solve them.
4. **Reveal the Traps**: Discuss common student misconceptions, exam traps, and cognitive biases that lead to wrong answers, explaining exactly how to identify and avoid them.

# SPECIFIC DIALECT FORMATTING RULES
You must output ONLY valid text in our custom Markdown dialect. Follow these rules exactly:

1. **Page Title**: Start the document with exactly one \`# [Title]\` (use the chapter name: "${currentChunk.title}").
2. **Subtitle**: Immediately follow with \`> [Subtitle]\` (an intellectually rich, engaging, human-sounding subtitle summarizing the chapter).
3. **Chapters**: Group main topics using \`## Chapter [X]: [Name]\` (use chapter number ${chunk} and partition the topics below logically).
4. **Sections**: Break chapters into sections using \`### Section [X] | [Section Name]\`.
5. **Text Formatting**:
   - Use \`**bold**\` for emphasis.
   - Use \`*italic*\` for specific technical terms or rules.
   - Use \`=highlight=\` for key formulas, critical definitions, rules, shortcuts, or crucial words (e.g. \`=Total = (Left + Right) - 1=\` or \`=A is opposite to B if Sum = 27=\`).
6. **Lists**: Use \`- \` for bullet points.
7. **Tables**: Use standard markdown tables (e.g., \`| Col1 | Col2 |\`) to present clear comparison data, formulas, or character/symbol mappings.
8. **Important Alerts**: For crucial tips, formulas, shortcuts, or warning traps, wrap them in:
   [alert type="success"]
   **Important Note:** ...
   [/alert]
   *(Valid types: success, warning, info, danger)*
9. **Premium Solved Examples**: Always include realistic, challenging, step-by-step solved reasoning problems formatted as:
   [example]
   **Question:** [Insert a high-quality, realistic exam-style question]
   **Solution:** [Insert a deep, detailed, step-by-step cognitive breakdown explaining:
   1. The logic/pattern discovery.
   2. How to set up the visualization (family tree, grid, sequence).
   3. The exact logical derivation leading to the final correct answer.]
   [/example]
10. **Flashcards (Multiple per block)**: Group key terms, patterns, symbol meanings, or conceptual formulas into flashcard blocks:
    [flashcards title="[Topic/Concept]"]
    | [Front Term 1] | [Back Definition 1] |
    | [Front Term 2] | [Back Definition 2] |
    [/flashcards]
11. **High-Yield Quizzes (Multiple questions per block)**: At the end of each section, group 2-5 challenging practice questions together using the \`[quiz]\` shortcode. 
    - Provide 4 distinct options (A, B, C, D).
    - Avoid trivial options; use realistic distractors representing common logical mistakes.
    - Each option MUST include clear, detailed conceptual feedback in parentheses explaining why it is correct, or detailing the exact trap or logical slip that makes it incorrect:
    [quiz title="[Quiz Title]"]
    Q: [Question 1 text]
    - A) [Option A] (Correct: [Detailed explanation of why this is correct])
    - B) [Option B] (Incorrect: [Explain the specific logical slip or trap that leads to this wrong answer])
    - C) [Option C] (Incorrect: [Explain the specific logical slip or trap that leads to this wrong answer])
    - D) [Option D] (Incorrect: [Explain the specific logical slip or trap that leads to this wrong answer])
    
    Q: [Question 2 text]
    - A) [Option A] (Incorrect: [Explain logical slip])
    - B) [Option B] (Correct: [Detailed explanation of why this is correct])
    - C) [Option C] (Incorrect: [Explain logical slip])
    - D) [Option D] (Incorrect: [Explain logical slip])
    [/quiz]

Do not use any standard HTML tags like \`<div>\` or \`<span>\`. Only output this custom Markdown format.
Write a highly comprehensive, educational, and engaging chapter covering these topics in detail. Do not include any conversational text or explanations before or after the Markdown document.

**Here are the raw topics to convert and cover in this chapter:**
${topicListString}`;
}

/**
 * Returns a safe, descriptive filename based on the chapter title.
 * 
 * @param {number} chunk - The current chunk number
 * @returns {string} - A clean filename like "01_analogy_verbal.md"
 */
export function getFilenameForChunk(chunk) {
  const currentChunk = chunkTopics[chunk];
  if (!currentChunk) return `chapter_${chunk}.md`;
  
  // Format chunk number with leading zero if needed, e.g., "01"
  const prefix = chunk.toString().padStart(2, '0');
  
  // Clean the title to make it a safe, consistent filename
  const cleanTitle = currentChunk.title
    .toLowerCase()
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '') // remove special characters
    .trim()
    .replace(/\s+/g, '_'); // replace spaces with underscores
    
  return `${prefix}_${cleanTitle}.md`;
}

