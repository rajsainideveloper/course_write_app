# Statement & Conclusions
> The art of logical entailment: extracting only what necessarily follows, resisting the seduction of plausible but unsubstantiated inferences. This is not about what could be true; it is about what must be true.

## Chapter 1: The Foundations of Conclusion Logic

### Section 1 | What Is a Logical Conclusion?

A conclusion in this context is a proposition that *necessarily follows* from the given statement(s). Unlike assumptions (which are premises the statement depends on), conclusions are implications that the statement entails. The test is strict: if the statement is true, the conclusion must also be true.

**The Core Principle**: A valid conclusion is a logical consequence, not a mere possibility or a plausible guess. The statement provides the foundation; the conclusion is the structure that must stand on that foundation. If the foundation could be true while the conclusion is false, the conclusion is invalid.

**The Cognitive Shift**: When you read a statement, do not ask "What might this mean?" Instead, ask "What is this statement *forcing* me to accept as true?" The answer to that question is the logical conclusion.

[alert type="danger"]
**The Plausibility Trap**: Many students select conclusions that are *likely* or *reasonable* but not strictly necessary. The exam rewards rigorous logic over intuitive guesswork. If a conclusion can be false while the statement remains true, it is not a valid conclusion.
[/alert]

### Section 2 | The Conclusion Evaluation Framework

Every conclusion must pass three tests:

1. **The Necessity Test**: Is the conclusion unavoidable given the statement? If there is any scenario consistent with the statement where the conclusion is false, the conclusion does not follow.

2. **The Scope Test**: Does the conclusion stay within the scope of the statement? If the conclusion introduces new information not covered by the statement, it is invalid.

3. **The Degree Test**: Is the conclusion expressed with appropriate certainty? A statement that expresses possibility cannot yield a conclusion of certainty.

## Chapter 2: Conclusion Extraction Guidelines

### Section 1 | The Direct Implication

The simplest conclusions are direct implications: the statement explicitly or implicitly contains the conclusion.

**Example**:
- Statement: "All cats are animals."
- Conclusion: "Some animals are cats." (Valid, if cats exist)
- Conclusion: "All animals are cats." (Invalid, reversed)

**The Trap**: Direct implication is often confused with the converse. "All A are B" implies "Some B are A" (if A exists), but it does not imply "All B are A."

### Section 2 | The Compound Statement Logic

When a statement contains multiple clauses, the conclusion may combine them logically.

**Example**:
- Statement: "If it rains, the match will be cancelled. The match was not cancelled."
- Conclusion: "It did not rain." (Valid by modus tollens: if P → Q, and not Q, then not P.)

**Example**:
- Statement: "Either the manager approved the budget, or the project will be delayed. The project is not delayed."
- Conclusion: "The manager approved the budget." (Valid by disjunctive syllogism.)

[alert type="info"]
**The Conditional Chain**: If the statement is "If P then Q, and if Q then R," the valid conclusion is "If P then R." This is the transitive property of conditionals.
[/alert]

### Section 3 | The "Some" and "All" Relationships

Statements using quantifiers require precise handling:

| Statement | Valid Conclusions | Invalid Conclusions |
| :--- | :--- | :--- |
| All A are B | Some A are B (if A exists) | All B are A |
| No A are B | No B are A (valid converse) | Some A are B |
| Some A are B | Some B are A (valid converse) | All A are B |
| Some A are not B | Some not-B are A? No, invalid | Some B are not A |

[flashcards title="Quantifier Rules for Conclusions"]
| Statement | Valid Conclusion | Invalid Conclusion |
| :--- | :--- | :--- |
| All S are P | Some S are P | All P are S |
| No S are P | No P are S | Some S are P |
| Some S are P | Some P are S | Some S are not P |
| Some S are not P | Some S are P (No, not implied) | Some P are not S |
[/flashcards]

## Chapter 3: Definite and Probable Conclusions

### Section 1 | The Certainty Distinction

Not all conclusions are equally certain. Some are *definite* (necessarily true), while others are *probable* (likely but not guaranteed). The exam distinguishes between these two categories.

- **Definite Conclusion**: Follows logically from the statement with no exceptions. The negation would contradict the statement.
- **Probable Conclusion**: Is supported by the statement but not entailed. The statement makes it likely, but other possibilities remain.

**Example**:
- Statement: "The sky is cloudy."
- Definite Conclusion: "It is not clear and sunny." (If the sky is cloudy, it cannot be clear and sunny.)
- Probable Conclusion: "It will rain." (Cloudy skies increase the chance of rain but do not guarantee it.)

### Section 2 | The Language of Probability

The wording of the conclusion often signals its degree of certainty:

| Language | Degree | Example |
| :--- | :--- | :--- |
| "Must" | Definite | "It must rain" |
| "Cannot" | Definite (negative) | "It cannot be sunny" |
| "May" | Probable | "It may rain" |
| "Might" | Probable | "It might rain" |
| "Possibly" | Probable | "It is possibly raining" |
| "Likely" | Probable | "It is likely to rain" |

**The Trap**: A conclusion phrased with certainty cannot be drawn from a statement that only supports probability. Conversely, a conclusion phrased with probability can sometimes be drawn from a certain statement, but the exam usually tests the more precise relationship.

[alert type="success"]
**The Certainty Check**: Before marking a conclusion as valid, check its language. If the statement uses "may" or "can," a conclusion using "must" is almost certainly invalid. Match the certainty of the conclusion to the certainty of the statement.
[/alert]

[flashcards title="Definite vs. Probable Indicators"]
| Indicator | Category | Example Statement | Example Conclusion |
| :--- | :--- | :--- | :--- |
| "All" | Definite | All birds have feathers | Some birds have feathers (definite) |
| "Some" | Definite | Some birds can fly | Some flyers are birds (definite) |
| "Usually" | Probable | Usually it rains in June | It will rain in June (probable, not definite) |
| "May" | Probable | It may rain today | It will rain today (invalid; over-certain) |
| "Could" | Probable | The match could be cancelled | The match is cancelled (invalid) |
[/flashcards]

[example]
**Question:** Statement: "If the power goes out, the backup generator will start. The generator started."
**Conclusion:** "The power must have gone out."
**Solution:**
Step 1: Identify the logical form: If P (power out), then Q (generator starts). Q is true.
Step 2: Does Q imply P? No. In logic, affirming the consequent is a fallacy. The generator could start for other reasons.
Step 3: The conclusion is not definite. It is possible, but not necessary.
Step 4: The statement does not support the conclusion.
**Final Answer:** The conclusion is invalid (not a definite conclusion).
[/example]

[example]
**Question:** Statement: "All roses are flowers. Some flowers are red."
**Conclusion:** "Some roses are red."
**Solution:**
Step 1: Draw a Venn diagram: Roses ⊆ Flowers. Flowers ∩ Red ≠ ∅.
Step 2: The red flowers could be outside the Roses circle. The intersection of Roses and Red could be empty.
Step 3: The conclusion "Some roses are red" is possible but not definite.
Step 4: Therefore, the conclusion is not a logical certainty.
**Final Answer:** The conclusion is invalid (probable but not definite).
[/example]

[quiz title="Statement & Conclusions Mastery Quiz"]
Q: Statement: "No cats are dogs." Which conclusion follows?
- A) No dogs are cats (Correct: This is the valid converse of the statement.)
- B) Some cats are not dogs (This is true but is a restatement, not a new conclusion. It is valid but less precise than A.)
- C) All cats are not dogs (This is a restatement.)
- D) Some dogs are cats (Invalid; contradicts the statement.)

Q: Statement: "If you study hard, you will pass the exam. You did not pass the exam." Which conclusion follows?
- A) You did not study hard (Correct: Modus tollens. If P → Q, and not Q, then not P.)
- B) You studied hard (Incorrect; would lead to passing.)
- C) You will study hard next time (Outside the scope.)
- D) The exam was difficult (Outside the scope.)

Q: Statement: "All mangoes are fruits. Some fruits are sweet." Which conclusion follows?
- A) Some mangoes are sweet (Probable but not definite.)
- B) No mangoes are sweet (Contradicts possibility.)
- C) Some sweet things are fruits (Correct: Since some fruits are sweet, there exists a sweet fruit. So some sweet things are fruits.)
- D) All fruits are mangoes (Invalid; reversed.)

Q: Statement: "The CEO will either retire or be promoted. The CEO was not promoted." Which conclusion follows?
- A) The CEO retired (Correct: Disjunctive syllogism. If P or Q, and not Q, then P.)
- B) The CEO will retire next year (Outside scope.)
- C) The CEO was fired (Not stated.)
- D) The CEO resigned (Not stated.)

Q: Statement: "Most students passed the test." Which conclusion follows?
- A) Some students failed the test (Possible but not definite.)
- B) All students passed (Contradicts "most" if some did not.)
- C) Some students did not pass (Correct: "Most" means more than half, so at least one did not pass. If 100 students, most = 51+, so at least 49 did not pass. Thus, some did not pass.)
- D) The test was easy (Outside scope.)
[/quiz]