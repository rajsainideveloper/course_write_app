# Data Sufficiency

> The logic of adequacy: determining whether the provided information is sufficient to answer a question. This is not about finding the answer; it is about evaluating whether the answer can be found with certainty.

## Chapter 1: The Foundations of Data Sufficiency Logic

### Section 1 | What Is Data Sufficiency?

Data Sufficiency questions present a question followed by two or three statements containing information. Your task is not to solve the problem completely, but to determine whether the statements together provide enough information to answer the question with certainty.

**The Core Principle**: A statement (or combination of statements) is sufficient if it allows only one unique answer to the question. If multiple answers are possible, the information is insufficient.

**The Cognitive Shift**: Do not solve the problem; evaluate the data. Your goal is to determine if a unique solution exists. You may need to solve partially to see if the information is enough, but you do not need to compute the final answer.

[alert type="danger"]
**The Solution Trap**: Many students solve the entire problem before checking sufficiency. In Data Sufficiency, your primary task is to assess the information, not to compute the answer. Solve only enough to determine if the answer is unique.
[/alert]

### Section 2 | The Response Categories

Data Sufficiency questions typically use five standard response options:

| Option | Meaning |
| :--- | :--- |
| A | Statement I alone is sufficient, but Statement II alone is not. |
| B | Statement II alone is sufficient, but Statement I alone is not. |
| C | Both statements together are sufficient, but neither alone is sufficient. |
| D | Each statement alone is sufficient. |
| E | Statements I and II together are not sufficient, even together with additional information. |

**The Elimination Flow**:
1. **Check Statement I alone**: Is it sufficient?
2. **Check Statement II alone**: Is it sufficient?
3. **If neither alone is sufficient**, check both together.
4. **If both together are not sufficient**, answer E.

## Chapter 2: Sufficient Data Requirements

### Section 1 | The Uniqueness Criterion

For a statement to be sufficient, it must lead to exactly one possible answer. If there are two or more possible answers that satisfy the statement, the statement is insufficient.

**Example**: "What is the value of x?"
- Statement: "x is a positive integer less than 5."
- Possible values: 1, 2, 3, 4. Not sufficient.
- Statement: "x is a prime number between 2 and 6."
- Possible values: 3, 5? Actually, 3 and 5 are both prime between 2 and 6. Not sufficient.
- Statement: "x is the only even prime number."
- Value: 2. Sufficient.

### Section 2 | The Dependency Rule

When evaluating two statements, check if they are independent or dependent. If one statement's truth depends on the other, that affects sufficiency.

**The Trap**: Some statements may appear sufficient alone but rely on information from the other statement. Always test each statement independently before combining.

[alert type="success"]
**The Isolation Test**: When testing Statement I, ignore Statement II completely. Pretend Statement II does not exist. If Statement I alone is sufficient, option A or D applies. Only if neither alone is sufficient should you combine them.
[/alert]

[flashcards title="Data Sufficiency Response Rules"]
| Option | Condition |
| :--- | :--- |
| A | I sufficient, II not |
| B | II sufficient, I not |
| C | I not, II not, but I+II sufficient |
| D | I sufficient, II sufficient |
| E | I not, II not, I+II not sufficient |
[/flashcards]

## Chapter 3: Two Statements (I & II)

### Section 1 | The Two-Statement Framework

Two-statement Data Sufficiency is the most common format. The question provides a prompt and two numbered statements.

**The Algorithm**:
1. **Read the question** and identify what you need to find.
2. **Test Statement I alone**: If sufficient, mark A or D (depending on Statement II).
3. **Test Statement II alone**: If sufficient, mark B or D.
4. **If neither alone is sufficient**, combine them.
5. **If combined is sufficient**, mark C; otherwise, mark E.

### Section 2 | Common Sufficiency Patterns

| Pattern | Example | Answer |
| :--- | :--- | :--- |
| I alone solves, II alone solves | What is x? I: x=5 II: x=5 | D |
| I alone solves, II alone does not | What is x? I: x=5 II: x is positive | A |
| I alone does not, II alone solves | What is x? I: x is positive II: x=5 | B |
| Neither alone solves, together solve | What is x? I: x>0 II: x<10, x is prime | C |
| Neither alone solves, together don't | What is x? I: x>0 II: x<10 | E |

[alert type="warning"]
**The Overinformation Trap**: If one statement alone is sufficient, the question is answered. Do not check the other statement for consistency—sufficiency is about answering the question, not about consistency between statements.
[/alert]

[flashcards title="Two-Statement Decision Tree"]
| Step | Question | Action |
| :--- | :--- | :--- |
| 1 | Is I sufficient? | Yes → Check II; No → Go to Step 2 |
| 2 | Is II sufficient? | Yes → Answer B; No → Go to Step 3 |
| 3 | Are I and II together sufficient? | Yes → Answer C; No → Answer E |
[/flashcards]

[example]
**Question:** What is the value of x?
I. x + 5 = 10
II. x - 2 = 3
**Solution:**
Step 1: Test Statement I: x + 5 = 10 → x = 5. Unique. Sufficient.
Step 2: Test Statement II: x - 2 = 3 → x = 5. Unique. Sufficient.
Step 3: Both alone are sufficient.
**Final Answer:** Option D.
[/example]

## Chapter 4: Three Statements (I, II, III)

### Section 1 | The Three-Statement Format

Some exams use three statements (I, II, and III). The response options usually ask which combination of statements is sufficient.

**The Response Patterns**:
- Only I and II are sufficient
- Only I and III are sufficient
- Only II and III are sufficient
- All three are sufficient
- None are sufficient

### Section 2 | The Three-Statement Algorithm

1. **Check each statement alone**: Is any statement alone sufficient? (Rare)
2. **Check pairs**: Test each pair of statements (I+II, I+III, II+III).
3. **Check all three**: If no pair is sufficient, test all three together.
4. **Select the option** that matches the sufficient combination.

[alert type="info"]
**The Pairwise Test**: Since three statements offer multiple combinations, systematically test each pair. The correct answer will be the combination that is sufficient and minimal (i.e., adding more statements does not change sufficiency).
[/alert]

[flashcards title="Three-Statement Options"]
| Option | Meaning |
| :--- | :--- |
| I and II only | Statements I and II together are sufficient |
| I and III only | Statements I and III together are sufficient |
| II and III only | Statements II and III together are sufficient |
| All three | All three statements together are sufficient |
| None | No combination is sufficient |
[/flashcards]

[example]
**Question:** What is the age of A?
I. A is 5 years older than B.
II. B is 10 years younger than C.
III. C is 30 years old.
**Solution:**
Step 1: Check I alone: A = B + 5. B unknown → Not sufficient.
Step 2: Check II alone: B = C - 10. C unknown → Not sufficient.
Step 3: Check III alone: C = 30. A unknown → Not sufficient.
Step 4: Check I+II: A = B + 5 and B = C - 10 → A = C - 5. C unknown → Not sufficient.
Step 5: Check I+III: A = B + 5 and C = 30. B unknown → Not sufficient.
Step 6: Check II+III: B = C - 10 and C = 30 → B = 20. A unknown → Not sufficient.
Step 7: Check I+II+III: A = B + 5, B = C - 10, C = 30 → B = 20, A = 25. Sufficient.
**Final Answer:** All three statements together are sufficient.
[/example]

[quiz title="Data Sufficiency Mastery Quiz"]
Q: What is the value of x?
I. x + 3 = 7
II. x - 2 = 2
- A) I alone sufficient (Correct: I gives x=4; II also gives x=4, so both are sufficient. Answer D.)
- B) II alone sufficient
- C) Both together sufficient
- D) Each alone sufficient (Correct)
- E) Neither sufficient

Q: What is the value of y?
I. y is a positive integer.
II. y^2 = 9
- A) I alone sufficient
- B) II alone sufficient (Correct: II gives y = 3 or -3; but with I, y is positive → y=3. So II alone is not sufficient? Wait: II alone gives y=±3, two values. So II alone is not sufficient. I alone is also not sufficient. Together: y is positive and y^2=9 → y=3. So both together are sufficient. Answer C.)
- C) Both together sufficient (Correct)
- D) Each alone sufficient
- E) Neither sufficient

Q: What is the sum of A and B?
I. A + B = 10
II. A - B = 4
- A) I alone sufficient
- B) II alone sufficient
- C) Both together sufficient (Correct: I gives A+B=10, II gives A-B=4. Solving gives A=7, B=3. So sum is 10. But the question asks for the sum, and I alone gives 10 directly. So I alone is sufficient. Answer A.)
- D) Each alone sufficient
- E) Neither sufficient

Q: Who is taller, A or B?
I. A is taller than C.
II. C is taller than B.
- A) I alone sufficient
- B) II alone sufficient
- C) Both together sufficient (Correct: A > C and C > B → A > B. Neither alone gives A vs B, but together they do.)
- D) Each alone sufficient
- E) Neither sufficient

Q: What is the value of p?
I. p is an even prime.
II. p is greater than 0.
- A) I alone sufficient (Correct: The only even prime is 2. So I alone is sufficient. II alone is not sufficient (p could be any positive number). Answer A.)
- B) II alone sufficient
- C) Both together sufficient
- D) Each alone sufficient
- E) Neither sufficient
[/quiz]