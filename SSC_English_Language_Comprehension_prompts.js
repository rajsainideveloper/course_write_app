/**
 * Custom prompt generator designed for course generation.
 * This file divides the comprehensive English Language & Comprehension curriculum
 * (Grammar, Vocabulary, Error Detection, Sentence Arrangement, Comprehension, and Miscellaneous)
 * into 42 distinct, granular chapters and generates dynamic prompts in the custom Markdown dialect.
 */

// Mapping of 42 individual chapters to their specific topics
export const chunkTopics = {
  1: {
    title: "Parts of Speech & Fundamentals",
    topics: [
      "Overview of 8 Parts of Speech",
      "Noun: Types (Proper, Common, Abstract, Collective, Material)",
      "Pronoun: Types (Personal, Reflexive, Demonstrative, Indefinite, Relative, Interrogative, Distributive)",
      "Adjective: Types (Descriptive, Quantitative, Demonstrative, Possessive, Interrogative, Distributive)",
      "Verb: Action vs Linking Verbs, Transitive vs Intransitive",
      "Adverb: Types (Manner, Place, Time, Frequency, Degree, Interrogative, Relative)",
      "Preposition: Types (Simple, Compound, Phrasal)",
      "Conjunction: Coordinating, Subordinating, Correlative",
      "Interjection: Definition and Usage"
    ]
  },
  2: {
    title: "Tenses (Present)",
    topics: [
      "Overview of Tense System",
      "Present Indefinite/Simple Tense: Structure, Uses, Time Expressions",
      "Present Continuous Tense: Structure, Uses, Stative Verbs Exception",
      "Present Perfect Tense: Structure, Uses, Signal Words (Since/For)",
      "Present Perfect Continuous Tense: Structure, Uses, Duration Focus",
      "Common Errors in Present Tenses",
      "Comparative Analysis: When to Use Which Tense"
    ]
  },
  3: {
    title: "Tenses (Past)",
    topics: [
      "Past Indefinite/Simple Tense: Structure, Uses, Regular/Irregular Verbs",
      "Past Continuous Tense: Structure, Uses, Interrupted Actions",
      "Past Perfect Tense: Structure, Uses, Sequence of Events",
      "Past Perfect Continuous Tense: Structure, Uses, Duration before Past Event",
      "Common Errors in Past Tenses",
      "Narrative Past vs Simple Past Distinction"
    ]
  },
  4: {
    title: "Tenses (Future)",
    topics: [
      "Future Indefinite/Simple Tense: Will vs Shall Usage",
      "Future Continuous Tense: Structure, Uses, Future Plans",
      "Future Perfect Tense: Structure, Uses, Deadline Completion",
      "Future Perfect Continuous Tense: Structure, Uses, Duration before Future Event",
      "Other Ways to Express Future: Going to, Present Continuous, Simple Present",
      "Common Errors in Future Tenses"
    ]
  },
  5: {
    title: "Conditional Tenses",
    topics: [
      "Zero Conditional: General Truths & Laws (If + Present, Present)",
      "First Conditional: Real Possibility (If + Present, Will)",
      "Second Conditional: Unreal Present/Future (If + Past, Would)",
      "Third Conditional: Unreal Past (If + Past Perfect, Would Have)",
      "Mixed Conditionals: Combining Past & Present Situations",
      "Exceptions: Unless, Provided, As long as, Even if",
      "Common Errors in Conditionals"
    ]
  },
  6: {
    title: "Subject-Verb Agreement",
    topics: [
      "Core Principle: Singular Subject = Singular Verb, Plural Subject = Plural Verb",
      "Compound Subjects with 'And', 'Or', 'Nor'",
      "Collective Nouns (Team, Committee, Jury, Audience)",
      "Indefinite Pronouns (Everyone, Somebody, Each, Either, Neither, None)",
      "Either/Neither/Nor: Proximity Rule",
      "Each/Every/Many a + Singular Noun + Singular Verb",
      "Relative Pronouns (Who, Which, That): Agreement with Antecedent",
      "Quantifiers (A lot of, Some, All, None, Part of)",
      "Intervening Phrases (Along with, Together with, As well as, Except, Besides)",
      "Agreement with Nouns of Plural Form but Singular Meaning (News, Mathematics, Politics)"
    ]
  },
  7: {
    title: "Articles",
    topics: [
      "Definite Article 'The': Specificity, Unique Objects, Superlatives, Ordinals",
      "Indefinite Articles 'A/An': General Mention, First Mention, Professions",
      "Omission of Articles: Proper Nouns, Abstract Nouns, Material Nouns, Plural Nouns",
      "Use of Articles with Proper Nouns: Geography (Rivers, Mountains, Oceans, Countries)",
      "Use of Articles with Time Expressions, Institutions, Meals",
      "Repetition of Articles with Adjectives",
      "Fixed Expressions without Articles: At home, In school, By train",
      "Common Errors in Article Usage"
    ]
  },
  8: {
    title: "Prepositions",
    topics: [
      "Time Prepositions: At (Specific Time), On (Day/Date), In (Month/Year/Duration)",
      "Place Prepositions: At (Point), On (Surface), In (Enclosed Space)",
      "Movement Prepositions: To, Towards, Into, Through, Across, Over, Under",
      "Fixed Prepositions with Verbs: Depend on, Laugh at, Listen to, Wait for, Provide with",
      "Fixed Prepositions with Adjectives: Fond of, Angry with/at, Aware of, Proud of",
      "Fixed Prepositions with Nouns: Key to, Solution to, Ability to, Reason for",
      "Prepositional Phrases: In spite of, Because of, By means of",
      "Common Errors: Preposition Omission, Unnecessary Preposition, Wrong Preposition",
      "Words with Multiple Prepositions: Different meaning (Agree to/with/on)"
    ]
  },
  9: {
    title: "Conjunctions",
    topics: [
      "Coordinating Conjunctions (FANBOYS): For, And, Nor, But, Or, Yet, So",
      "Subordinating Conjunctions: Although, Because, While, Since, Unless, Until, When, Where, If",
      "Correlative Conjunctions: Either...Or, Neither...Nor, Both...And, Not Only...But Also",
      "Conjunctive Adverbs: However, Therefore, Moreover, Nevertheless, Consequently",
      "Common Errors with Conjunctions: Double Conjunctions, Unnecessary Conjunctions",
      "Punctuation Rules with Conjunctions"
    ]
  },
  10: {
    title: "Modals",
    topics: [
      "Can/Could: Ability, Permission, Request, Possibility",
      "May/Might: Permission, Possibility, Suggestion, Wish",
      "Shall/Should: Obligation, Advice, Prediction (1st Person)",
      "Will/Would: Volition, Habit, Condition, Polite Request",
      "Must: Necessity, Obligation, Strong Deduction",
      "Ought to: Moral Obligation, Advice",
      "Semi-modals: Need, Dare, Used to, Have to, Be able to",
      "Modals in Past: Could have, May have, Must have, Should have, Would have",
      "Common Errors in Modal Usage"
    ]
  },
  11: {
    title: "Active & Passive Voice",
    topics: [
      "Core Concept: Subject performs action (Active) vs Subject receives action (Passive)",
      "Present Tense Passive (Indefinite, Continuous, Perfect)",
      "Past Tense Passive (Indefinite, Continuous, Perfect)",
      "Future Tense Passive (Indefinite, Perfect)",
      "Modal Passive (Can be, Must be, Should have been)",
      "Imperative Passive (Let + Object + be + V3)",
      "Passive with Prepositions (Laughed at, Sent for)",
      "Passive without Agent: When to Omit 'By'",
      "Verbs with Two Objects: Double Passive",
      "Common Errors: Overuse of Passive, Wrong Tense Conversion",
      "Passive of Intransitive Verbs: Not Possible"
    ]
  },
  12: {
    title: "Direct & Indirect Speech",
    topics: [
      "Core Concept: Reporting Exact Words (Direct) vs Reporting Meaning (Indirect)",
      "Statement/Assertive Sentences: Tense Changes, Pronoun Changes",
      "Interrogative Sentences: Wh-word vs Yes/No Questions, 'If/Whether'",
      "Imperative Sentences: 'To' Infinitive, Reporting Verbs (Order, Request, Advice)",
      "Exclamatory Sentences: Reporting Strong Emotions (Wish, Pray, Exclaim)",
      "Change of Time & Place Words: Now→Then, Today→That Day, Here→There",
      "Reporting Verbs: Said vs Told, Object Required in 'Told'",
      "Rules for Universal Truths/Historical Facts: No Tense Change",
      "Common Errors in Narration Change"
    ]
  },
  13: {
    title: "Gerunds & Infinitives",
    topics: [
      "Gerund (Verb+ing as Noun): Uses as Subject, Object, Object of Preposition",
      "Infinitive (To + Verb): Uses as Noun, Adjective, Adverb",
      "Bare Infinitive (Without 'To'): After Modals, Let, Make, See, Hear, Feel",
      "Verbs followed by Gerund: Enjoy, Avoid, Consider, Admit, Appreciate",
      "Verbs followed by Infinitive: Want, Wish, Decide, Agree, Hope, Learn, Plan",
      "Verbs followed by Both (With Meaning Change): Remember, Forget, Stop, Try, Regret",
      "Gerund vs Present Participle: Distinction",
      "Common Errors: Gerund/Infinitive Confusion, Preposition + Gerund"
    ]
  },
  14: {
    title: "Participles & Dangling Modifiers",
    topics: [
      "Present Participle (V-ing): Active Meaning, Continuous Aspect",
      "Past Participle (V3): Passive Meaning, Perfect Aspect",
      "Perfect Participle (Having + V3): Completed Action before Main Verb",
      "Dangling Modifiers: When Subject of Participle ≠ Subject of Main Clause",
      "Misplaced Modifiers: Clarity Issues",
      "Squinting Modifiers: Ambiguity in Placement",
      "Common Errors and How to Correct Dangling Modifiers"
    ]
  },
  15: {
    title: "Question Tags",
    topics: [
      "Core Principle: Positive Statement → Negative Tag, Negative Statement → Positive Tag",
      "Structure: Auxiliary + Pronoun",
      "Special Cases: Let's → Shall we?",
      "Imperative Sentences: Will you? / Won't you? / Could you?",
      "None/Everybody/Someone → Singular Pronoun (They used commonly now)",
      "Negative Words (Never, No, Hardly, Seldom, Rarely) → Positive Tag",
      "Auxiliary Verbs: Have/Has/Do/Does/Did/Will/Would/Can/Could/Should/Must",
      "Common Errors in Question Tags"
    ]
  },
  16: {
    title: "Synonyms (Level 1 & 2)",
    topics: [
      "Definition and Importance of Synonyms",
      "Basic Synonyms (Level 1): Common Words",
      "Intermediate Synonyms (Level 2): Academic & SSC Pattern",
      "Context-Based Synonyms: Choosing Based on Sentence Context",
      "Synonyms with Subtle Differences: Connotation",
      "One-Word Substitution Synonyms: Multiple Words → One Word",
      "SSC Repeated Synonyms (150+ words with exact meanings)"
    ]
  },
  17: {
    title: "Synonyms (Advanced & Context Based)",
    topics: [
      "Advanced Synonyms (Level 3): Rare Words, Literary Terms",
      "SSC Tier-II Specific Synonyms (Difficult Level)",
      "Context-Based Synonyms: Same Word Different Meaning in Different Contexts",
      "Synonyms in Reading Comprehension: Identifying from Passage",
      "Antonym vs Synonym Distinction in Context",
      "Synonym Cloze: Fill in the Blank with Correct Synonym"
    ]
  },
  18: {
    title: "Antonyms (Prefix Based & Context Based)",
    topics: [
      "Definition and Types of Antonyms: Gradable, Complementary, Relational",
      "Prefix-Based Antonyms: Un-, In-, Dis-, Mis-, Ir-, Il-, Im-, Non-",
      "Context-Based Antonyms: Meaning Changes with Usage",
      "SSC Repeated Antonyms (100+ words with exact opposites)",
      "Antonyms from Reading Comprehension",
      "Common Errors: Choosing Wrong Antonym, Confusing with Synonym"
    ]
  },
  19: {
    title: "One Word Substitution (Government & Administration)",
    topics: [
      "Government/Administration Terms (100+ words with meanings)",
      "Words for Different Types of Government: Autocracy, Democracy, Plutocracy, Theocracy",
      "Administrative Positions: Incumbent, Emissary, Ambassador, Consul",
      "Official Documents: Affidavit, Deed, Warrant, Voucher",
      "Legal Terms: Alibi, Non compos mentis, Prima facie, Ex parte",
      "SSC Repeated One Word Substitutions"
    ]
  },
  20: {
    title: "One Word Substitution (Profession & Occupation)",
    topics: [
      "Words for Professions and Occupations (50+ words)",
      "Ology Endings: Study of Sciences (Anthropology, Biology, Psychology, etc.)",
      "Medical Specialists: Cardiologist, Dermatologist, Neurologist, Pediatrician",
      "Fine Arts Professions: Calligrapher, Sculptor, Philatelist, Numismatist",
      "Other Professions: Ornithologist, Botanist, Zoologist, Entomologist",
      "Person Related Terms: Egoist, Altruist, Optimist, Pessimist, Introvert, Extrovert"
    ]
  },
  21: {
    title: "One Word Substitution (General & Phobias)",
    topics: [
      "Phobias & Manias: 50+ Terms (Agoraphobia, Claustrophobia, Acrophobia, etc.)",
      "General Terms: 100+ Important Words",
      "Groups & Collections: Fleet, Flock, Herd, Swarm, Bouquet, Bunch",
      "Death/Murder Related: Assassinate, Execute, Homicide, Suicide, Patricide, Fratricide",
      "Scientific Instruments: Barometer, Thermometer, Stethoscope, Periscope",
      "Sound Related: Cacophony, Euphony, Onomatopoeia",
      "SSC Repeated (Total 200+ One Word Substitutions)"
    ]
  },
  22: {
    title: "Idioms & Phrases (Basic)",
    topics: [
      "Definition and Importance of Idioms in SSC",
      "Body Parts Based Idioms: Cold Feet, Cost an Arm and a Leg, Hit the Nail on the Head",
      "Animal/Bird Based Idioms: Black Sheep, Early Bird, Let the Cat out of the Bag",
      "Colour Based Idioms: Black Sheep, Red Herring, Blue Blood, Green with Envy",
      "Food Based Idioms: Piece of Cake, Full of Beans, Apple of My Eye",
      "SSC Repeated Idioms: 50+ Basic Idioms with Meanings"
    ]
  },
  23: {
    title: "Idioms & Phrases (Advanced)",
    topics: [
      "Daily Life Based Idioms: Once in a Blue Moon, Chip on the Shoulder",
      "Business/Work Based Idioms: Ball is in Your Court, Hit the Ground Running",
      "Literary/Sophisticated Idioms: Stiff Upper Lip, Through Thick and Thin",
      "SSC Repeated Advanced Idioms: 100+ Idioms",
      "Context Based Usage: Choosing Correct Idiom for Sentence",
      "Common Errors: Using Wrong Preposition in Idiom"
    ]
  },
  24: {
    title: "Phrasal Verbs (Part 1)",
    topics: [
      "Definition and Structure: Verb + Preposition/Adverb",
      "Break (Break down, Break into, Break out, Break up, Break off)",
      "Call (Call off, Call on, Call out, Call up, Call for, Call in)",
      "Carry (Carry on, Carry out, Carry away, Carry forward)",
      "Come (Come across, Come out, Come across, Come by, Come over)",
      "Cut (Cut down, Cut off, Cut out, Cut up, Cut through)",
      "Fall (Fall apart, Fall behind, Fall for, Fall off, Fall out, Fall through)"
    ]
  },
  25: {
    title: "Phrasal Verbs (Part 2)",
    topics: [
      "Get (Get along, Get away, Get by, Get over, Get through, Get up, Get out)",
      "Give (Give away, Give back, Give in, Give off, Give out, Give up, Give way)",
      "Go (Go after, Go ahead, Go along, Go back, Go down, Go off, Go on, Go out)",
      "Hold (Hold back, Hold on, Hold out, Hold over, Hold up)",
      "Keep (Keep away, Keep back, Keep off, Keep on, Keep out, Keep up)"
    ]
  },
  26: {
    title: "Phrasal Verbs (Part 3)",
    topics: [
      "Lay (Lay down, Lay off, Lay out, Lay up)",
      "Look (Look after, Look ahead, Look at, Look back, Look down, Look for, Look forward, Look into, Look on, Look out)",
      "Make (Make for, Make of, Make out, Make up, Make up for)",
      "Put (Put across, Put away, Put down, Put forward, Put off, Put on, Put out, Put through, Put up)",
      "Run (Run across, Run after, Run away, Run down, Run into, Run out, Run over)",
      "Set (Set about, Set aside, Set back, Set down, Set in, Set off, Set up)"
    ]
  },
  27: {
    title: "Phrasal Verbs (Part 4) & SSC Repeated",
    topics: [
      "Take (Take after, Take apart, Take away, Take back, Take down, Take in, Take off, Take on, Take out, Take over, Take up)",
      "Turn (Turn around, Turn away, Turn back, Turn down, Turn into, Turn off, Turn on, Turn out, Turn over, Turn up)",
      "Work (Work at, Work off, Work on, Work out, Work up)",
      "SSC Repeated Phrasal Verbs (100+ total with meanings and examples)",
      "Phrasal Verbs with Multiple Meanings",
      "Common Errors: Separable vs Inseparable Phrasal Verbs"
    ]
  },
  28: {
    title: "Homonyms, Homophones & Commonly Confused Words",
    topics: [
      "Homonyms: Same Spelling, Same Sound, Different Meaning (Bat, Bark, Bear, Lead, Right, Fair)",
      "Homophones: Same Sound, Different Spelling, Different Meaning (Their/There/They're, To/Too/Two)",
      "Commonly Confused Words (50+ pairs): Affect/Effect, Accept/Except, Advice/Advise, Allusion/Illusion",
      "Homographs: Same Spelling, Different Pronunciation, Different Meaning (Live, Read, Wind, Bow)",
      "Context Based Usage: Choosing the Correct Word",
      "SSC Pattern Questions on Homonyms/Homophones"
    ]
  },
  29: {
    title: "Spelling Test & Common Misspellings",
    topics: [
      "Correctly Spelt Word Identification",
      "Incorrectly Spelt Word Identification",
      "Common Misspelt Words (SSC Pattern): Accommodate, Occurrence, Separate, Independent, Mischievous",
      "Rules of Spelling: 'I' before 'E' except after 'C', Double Consonant Rule",
      "Words Ending in -ful, -able, -ible, -ance, -ence, -ant, -ent",
      "Spelling Changes with Suffix: Drop 'e', Keep 'e', Change 'y' to 'i'",
      "SSC Repeated Misspelt Words (100+ words)"
    ]
  },
  30: {
    title: "Root Words, Prefixes & Suffixes",
    topics: [
      "Importance of Root Words in Vocabulary Building",
      "Prefixes: Anti-, Auto-, Bio-, Co-, Contra-, Counter-, Dis-, Ex-, In-/Im-/Ir-/Il-, Inter-, Mis-, Mono-, Multi-, Non-, Over-, Post-, Pre-, Pro-, Re-, Sub-, Super-, Trans-, Tri-, Un-, Under-",
      "Suffixes: -Logy (Study of), -Phobia (Fear of), -Cracy (Rule by), -Graphy (Writing), -Ity, -Tion, -Ment, -Ness, -Ful, -Less, -Able/Ible, -Ous, -Al, -Ive, -Some",
      "Greek and Latin Roots: Bio (Life), Geo (Earth), Chron (Time), Auto (Self), Dict (Say), etc.",
      "Words Made from Roots: Meaning through Parts",
      "SSC Pattern Vocabulary Questions using Prefix/Suffix"
    ]
  },
  31: {
    title: "Word Meaning in Context",
    topics: [
      "Choosing Correct Meaning from Options",
      "Opposite Meaning in Context: Choosing Antonym from Context",
      "Context Clues: Definition, Synonym, Antonym, Example, Inference",
      "Same Word Different Meaning in Different Contexts",
      "SSC Pattern Questions on Context Based Vocabulary",
      "Tone and Register: Formal vs Informal Context"
    ]
  },
  32: {
    title: "Spotting Errors (Grammar Based)",
    topics: [
      "Error Detection: Strategies and Approach",
      "Subject-Verb Agreement Errors (Common Patterns)",
      "Tense Errors: Wrong Tense Used",
      "Preposition Errors: Wrong/Missing/Extra Preposition",
      "Article Errors: A/An/The/Omission/Misuse",
      "Conjunction Errors: Wrong Conjunction, Double Conjunction",
      "Modal Errors: Wrong Modal Used",
      "Pronoun Errors: Case, Number, Gender, Reference",
      "Adverb/Adjective Confusion",
      "Comparative/Superlative Errors",
      "Parallelism Errors",
      "SSC Pattern Spotting Errors: 5-10 Error Sentences per Set"
    ]
  },
  33: {
    title: "Sentence Improvement (Grammar & Vocabulary)",
    topics: [
      "Sentence Improvement: Replacing Underlined Phrase",
      "No Improvement Option: When Original is Correct",
      "Grammar Based Improvement: Tense, Agreement, Preposition, Article",
      "Vocabulary Based Improvement: Wrong Word, Context Inappropriate",
      "Style and Clarity: Improving Awkward Phrasing",
      "Redundancy and Wordiness: Removing Unnecessary Words",
      "SSC Pattern Sentence Improvement Questions"
    ]
  },
  34: {
    title: "Fill in the Blanks (Single Blank)",
    topics: [
      "Single Blank Grammar Based: Tense, Preposition, Article, Conjunction, Modal",
      "Single Blank Vocabulary Based: Choosing Correct Word",
      "Context Based: Clues in Sentence",
      "Collocation: Words that Go Together",
      "SSC Pattern Single Blank Fillers (Grammar + Vocabulary)"
    ]
  },
  35: {
    title: "Fill in the Blanks (Double & Triple Blanks)",
    topics: [
      "Double Blanks Conjunctions/Prepositions: Connecting Words",
      "Double Blanks Vocabulary: Pair of Words",
      "Double Blanks Context Based: Both Blanks Related",
      "Triple Blanks Advanced: 3 Words in a Sentence",
      "SSC Pattern Double/Triple Blank Fillers (Mains Level)",
      "Common Errors: Wrong Pair, Inconsistent Context"
    ]
  },
  36: {
    title: "Parajumbles (Sentence Arrangement)",
    topics: [
      "Para Jumbles: Re-arranging Sentences",
      "4/5 Sentence Jumbles: Basic Level",
      "4/5 Sentence Jumbles with Options (SSC Pattern)",
      "6/7 Sentence Jumbles: Advanced (Mains Level)",
      "Techniques: Opening Sentence, Closing Sentence, Connectives, Pronouns, Chronology",
      "Clue Words: However, Therefore, Thus, But, So, Since, As",
      "Common Errors: Wrong Sequence, Not Reading Options Carefully"
    ]
  },
  37: {
    title: "Sentence Completion & Connectors",
    topics: [
      "Sentence Completion: One Sentence with Missing Part",
      "Paragraph Completion: Last Line Missing (Logical Continuation)",
      "Sentence Connectors: Joining Two Sentences with Correct Connector",
      "Choosing Correct Connector: However/Although/Therefore/Moreover/Consequently",
      "Column Matching: Match Start and End of Sentences",
      "SSC Pattern Sentence Completion & Connector Questions"
    ]
  },
  38: {
    title: "Reading Comprehension (Factual Passages)",
    topics: [
      "Reading Comprehension: Strategies for Efficiency",
      "Factual Passages: Science, History, Geography, Technology",
      "Direct Answer Questions: Locating Information",
      "Inference Based Questions: Reading Between the Lines",
      "Vocabulary Based: Word Meaning from Passage",
      "Antonym/Synonym from Passage",
      "Tone of Passage: Optimistic, Pessimistic, Objective, Sarcastic, Critical, Satirical",
      "SSC Pattern Reading Comprehension: 5-8 Questions per Passage"
    ]
  },
  39: {
    title: "Reading Comprehension (Literary & Social Passages)",
    topics: [
      "Literary Passages: Stories, Philosophical, Narrative",
      "Economic/Social Passages: Current Affairs, Social Issues, Economy, Policy",
      "Abstract Passages: Finding the Main Idea, Theme, Central Argument",
      "Author's Purpose: Persuade, Inform, Entertain, Critique",
      "Identifying the Author's Perspective/Bias",
      "Title Selection: Choosing Best Title",
      "SSC Pattern Reading Comprehension: Mixed Passages"
    ]
  },
  40: {
    title: "Cloze Test (Fill in the Passage)",
    topics: [
      "Cloze Test: 5-7 Blanks in a Passage",
      "Grammar Based Blanks: Tense, Preposition, Article, Conjunction, Modal, Agreement",
      "Vocabulary Based Blanks: Correct Word in Context",
      "Context Based Blanks: Understanding Whole Passage",
      "Collocation & Fixed Phrases in Cloze",
      "Double Blank Cloze (Advanced): Pair of Words in Two Blanks",
      "SSC Pattern Cloze Test: 1-2 Passages per Exam"
    ]
  },
  41: {
    title: "Miscellaneous (New Pattern)",
    topics: [
      "Sentence Rearrangement New Type: Interchange 2-3 Sentences",
      "Phrase Replacement: Replacing a Phrase with Correct Option",
      "Word Swap: Interchanging Words in a Sentence (Find Error)",
      "Interchange Words: Finding the Correct Order of Words",
      "Spell Check + Word Meaning Combo: Find Word with Correct Spelling & Meaning",
      "Column Matching (Vocabulary): Match Column A (Words) with Column B (Meanings)",
      "Column Matching: Match Column A (Words) with Column B (Antonyms/Synonyms)",
      "Error Detection + Improvement Combo: Find Error + Suggest Improvement",
      "Usage of Words: Using a Word in Different Sentences (Choose Correct Usage)",
      "Passage Based Fillers: Fill Blanks in Passage (No Options)",
      "Find Replacement for Underlined Words in Passage",
      "SSC New Pattern/Moderate Difficulty Level Questions"
    ]
  },
  42: {
    title: "Advanced Grammar & Comprehensive Revision",
    topics: [
      "Advanced Subject-Verb Agreement (Complex Cases)",
      "Advanced Tenses: Sequence of Tenses",
      "Advanced Modals: Degrees of Certainty, Deduction",
      "Advanced Prepositions (Idiomatic Usage)",
      "Advanced Conjunctions: Despite vs In spite of, As vs Like",
      "Vocabulary: 100 High-Frequency Words with Synonyms/Antonyms",
      "Idioms & Phrases: Last 50 SSC Repeated",
      "Phrasal Verbs: Complete SSC List (All 150+)",
      "Spotting Errors: Mixed & Complex Sentences (Advanced Level)",
      "Sentence Improvement: Complex Sentences (Advanced Level)",
      "Reading Comprehension: 2 Full Passages with All Types of Questions",
      "Cloze Test: 2 Full Passages with 7-8 Blanks Each",
      "Full Mock Section: All English Topics Covered (50 Questions)"
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
    title: `English Language Concepts - Part ${chunk}`,
    topics: ["General English Language and Comprehension Applications"]
  };

  const topicListString = currentChunk.topics.join('\n');

  return `You are a world-class English Language and Comprehension professor writing a comprehensive, premium textbook for elite students preparing for highly competitive exams (such as SSC CGL, CHSL, Bank PO, CDS, and NDA). Your goal is to write a deeply educational, realistic, and highly authoritative chapter that feels entirely human-written, avoiding all standard AI clichés and generic summaries.

# WRITING STYLE & HUMAN VOICE GUIDELINES
1. **Write like a Veteran Human Educator**: Use a tone that is authoritative, engaging, direct, and intellectually stimulating. Be passionate about language mechanics, grammar rules, vocabulary building, and reading comprehension strategies. Teach the underlying cognitive structures, shortcuts, and mental models for English mastery.
2. **Avoid AI Clichés & Buzzwords**: Do NOT use phrases like "Let's dive in," "In conclusion," "It is crucial to remember," "Essentially," "Moreover," "Furthermore," "Let's look at an example," or robotic transitions. Start directly with the content. Do not write any conversational preamble or postscript (e.g. "Sure, here is your chapter").
3. **Provide Immense Depth**: Avoid shallow definitions. For every sub-topic listed, explain the logical mechanics in full, the standard rules (such as Subject-Verb Agreement rules, Tense structure tables, Preposition collocations, Phrasal Verb patterns, and Reading Comprehension strategies), and the exact step-by-step cognitive steps required to solve them.
4. **Reveal the Traps**: Discuss common student misconceptions, exam traps, and cognitive biases that lead to wrong answers, explaining exactly how to identify and avoid them. Include specific SSC (Staff Selection Commission) exam patterns and tricks.

# SPECIFIC DIALECT FORMATTING RULES
You must output ONLY valid text in our custom Markdown dialect. Follow these strict formatting rules exactly:

1. **Page Title**: Start the document with exactly one \`# [Title]\` (use the chapter name: "${currentChunk.title}").
2. **Subtitle**: Immediately follow with \`> [Subtitle]\` (an intellectually rich, engaging, human-sounding subtitle summarizing the chapter).
3. **Chapters**: Group main topics using \`## Chapter ${chunk}: [Chapter Name]\`.
4. **Sections**: Break chapters into sections using \`### Section [X] | [Section Name]\`.
5. **Text Formatting**:
   - Use \`**bold**\` for emphasis.
   - Use \`*italic*\` for terms.
   - Use \`=highlight=\` for key rules, formulas, or crucial words (e.g. \`=If the subject is singular, the verb must be singular=\`).
6. **Lists**: Use \`- \` for bullet points.
7. **Tables**: Use standard markdown tables (e.g., \`| Col1 | Col2 |\`). Use tables for tense structures, preposition usage, idiom lists, etc.
8. **Important Alerts**: For crucial tips, rules, or warning traps, wrap them in:
   [alert type="success"]
   **Important Rule:** ...
   [/alert]
   *(Valid types: success, warning, info, danger)*
9. **Solved Examples**: When you see a solved grammar, vocabulary, or comprehension question, format it exactly as:
   [example]
   **Question:** ...
   **Solution:** ...
   [/example]
10. **Flashcards (Multiple per block)**: If there are terms, rules, vocabulary words, idioms, or definitions to memorize, group them into a single flashcard block:
    [flashcards title="[Topic]"]
    | [Front Term 1] | [Back Definition 1] |
    | [Front Term 2] | [Back Definition 2] |
    [/flashcards]
11. **Quizzes (Multiple questions per block)**: For quizzes, group 2-5 questions together using the \`[quiz]\` shortcode and \`Q:\` for each question exactly like this:
    [quiz title="[Quiz Title]"]
    Q: [Question 1 text]
    - A) [Option 1]
    - B) [Option 2] (Correct: [Optional feedback])
    - C) [Option 3]
    - D) [Option 4]
    
    Q: [Question 2 text]
    - A) [Option 1] (Correct)
    - B) [Option 2]
    - C) [Option 3]
    - D) [Option 4]
    [/quiz]

Do not use any standard HTML tags like \`<div>\` or \`<span>\`. Only output this custom Markdown format.
Do not write any conversational text or preamble/postscript before or after the Markdown document. Start directly with the \`# [Title]\` line and end with the last \`[/quiz]\` or content block.

**Here are the raw topics to convert and cover in this chapter:**
${topicListString}`;
}

/**
 * Returns a safe, descriptive filename based on the chapter title.
 * 
 * @param {number} chunk - The current chunk number
 * @returns {string} - A clean filename like "01_parts_of_speech.md"
 */
export function getFilenameForChunk(chunk) {
  const currentChunk = chunkTopics[chunk];
  if (!currentChunk) return `chapter_${chunk}.json`;
  
  // Format chunk number with leading zero if needed, e.g., "01"
  const prefix = chunk.toString().padStart(2, '0');
  
  // Clean the title to make it a safe, consistent filename
  const cleanTitle = currentChunk.title
    .toLowerCase()
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '') // remove special characters
    .trim()
    .replace(/\s+/g, '_'); // replace spaces with underscores
    
  return `${prefix}_${cleanTitle}.json`;
}