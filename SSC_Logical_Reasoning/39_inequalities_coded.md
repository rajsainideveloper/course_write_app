# Inequalities (Coded)

> The algebra of order: decoding the hidden relationships that determine relative magnitude. This is not about solving equations; it is about tracing chains of precedence through a symbolic maze.

## Chapter 1: The Foundations of Inequality Logic

### Section 1 | What Is an Inequality Problem?

Inequality problems present a set of relationships between variables using symbols that represent standard inequality operators (>, <, ≥, ≤, =). In coded inequalities, these operators are replaced by arbitrary symbols (e.g., @, #, $, %, &), and you must first decode the symbols before analyzing the relationships.

**The Core Principle**: Inequalities are transitive. If A > B and B > C, then A > C. This transitive property is the engine of all inequality reasoning.

**The Cognitive Shift**: When evaluating inequalities, treat each relationship as a directional arrow. Build a chain of relationships from the given statements, then check the conclusions against the chain.

[alert type="danger"]
**The Directional Confusion**: The most common error is misreading the direction of an inequality. If A > B, then A is greater than B, and B is less than A. Always maintain the correct direction when combining statements.
[/alert]

### Section 2 | The Inequality Framework

| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `>` | Greater than | A > B (A is greater than B) |
| `<` | Less than | A < B (A is less than B) |
| `≥` | Greater than or equal | A ≥ B (A is greater than or equal to B) |
| `≤` | Less than or equal | A ≤ B (A is less than or equal to B) |
| `=` | Equal to | A = B (A is equal to B) |

The key operations for combining inequalities:
- **Transitivity**: If A > B and B > C, then A > C.
- **Combining**: If A > B and B ≥ C, then A > C (since A > B ≥ C).
- **Equality**: If A = B, then A can be substituted for B in any inequality.

## Chapter 2: Direct Inequalities (>, <, =, ≥, ≤)

### Section 1 | The Direct Statement Format

Direct inequalities use standard symbols. The questions present a set of statements (e.g., A > B, B ≤ C, C = D) and ask you to evaluate conclusions (e.g., A > D, A ≥ C, B < D).

**The Method**:
1. Write all statements in a chain, aligning the variables.
2. Use the transitive property to determine relationships between variables not directly connected.
3. Compare each conclusion against the derived relationships.

**The Trap**: When combining inequalities, remember that `>` and `<` are strict, while `≥` and `≤` allow equality. If A > B and B ≥ C, then A > C (strictly greater). If A ≥ B and B ≥ C, then A ≥ C (could be equal).

### Section 2 | The Combined Inequality Chain

To evaluate a set of statements, arrange them in a single chain:

**Example**: Statements: A > B, B ≥ C, C = D, D < E.
- Chain: A > B ≥ C = D < E.
- From this chain:
  - A > C (since A > B ≥ C).
  - A > D (since A > B ≥ C = D).
  - A > E? No, because D < E, and A > D, but we don't know how A compares to E (could be greater, less, or equal).
  - B ≥ D (since B ≥ C = D).
  - C < E (since C = D < E).

[alert type="success"]
**The Chain Visualization**: Write the inequalities in a single line with the appropriate symbols. This makes it easy to see all relationships at once.
[/alert]

[flashcards title="Direct Inequality Symbols"]
| Symbol | Meaning | Transitive Example |
| :--- | :--- | :--- |
| `>` | Greater than | A > B > C → A > C |
| `<` | Less than | A < B < C → A < C |
| `≥` | Greater than or equal | A ≥ B ≥ C → A ≥ C |
| `≤` | Less than or equal | A ≤ B ≤ C → A ≤ C |
| `=` | Equal | A = B = C → A = C |
[/flashcards]

[example]
**Question:** Statements: A > B, B ≥ C, C = D, D < E. Conclusions: I. A > C II. A > E III. B ≥ D
**Solution:**
Step 1: Chain: A > B ≥ C = D < E.
Step 2: Conclusion I: A > C. From chain, A > B ≥ C → A > C. True.
Step 3: Conclusion II: A > E. From chain, A > D and D < E. A > D and D < E means A > D but E > D. We don't know A vs E. Could be A > E, A < E, or A = E. False (not necessarily true).
Step 4: Conclusion III: B ≥ D. From chain, B ≥ C = D → B ≥ D. True.
**Final Answer:** I and III are true.
[/example]

## Chapter 3: Coded Inequalities (Symbols like @, #, $, %)

### Section 1 | The Coding Framework

In coded inequalities, standard operators are replaced by symbols. The question provides a legend: e.g., `@` means `>`, `#` means `<`, `$` means `≥`, `%` means `≤`, `&` means `=`. You must decode the statements before analyzing.

**The Method**:
1. Translate each coded statement into standard inequality notation.
2. Build the chain.
3. Translate the conclusions back into coded form if required.

**The Trap**: Some exams use different symbols for the same operator in different questions. Always read the legend carefully.

### Section 2 | The Decoding Process

**Example Legend**:
- `@` means `>`
- `#` means `<`
- `$` means `≥`
- `%` means `≤`
- `&` means `=`

**Coded Statement**: `A @ B` → `A > B`
**Coded Statement**: `B $ C` → `B ≥ C`
**Coded Statement**: `C & D` → `C = D`

The chain: `A > B ≥ C = D`.

[alert type="warning"]
**The Symbol Overload**: With multiple symbols, it's easy to confuse them. Write the translation next to each statement before combining. A quick reference table is essential.
[/alert]

[flashcards title="Coded Inequality Symbols Reference"]
| Coded Symbol | Meaning | Example |
| :--- | :--- | :--- |
| `@` | `>` | A @ B → A > B |
| `#` | `<` | A # B → A < B |
| `$` | `≥` | A $ B → A ≥ B |
| `%` | `≤` | A % B → A ≤ B |
| `&` | `=` | A & B → A = B |
[/flashcards]

[example]
**Question:** In a coded inequality, `@` means `>`, `#` means `<`, `$` means `≥`, `%` means `≤`, `&` means `=`. Statements: `A @ B`, `B $ C`, `C % D`, `D # E`. Conclusions: `A @ E`, `A % E`, `B $ D`.
**Solution:**
Step 1: Translate:
- A @ B → A > B
- B $ C → B ≥ C
- C % D → C ≤ D
- D # E → D < E
Step 2: Chain: A > B ≥ C ≤ D < E.
Step 3: Evaluate conclusions:
- A @ E → A > E. From chain, A > C and C ≤ D < E. A > C and C ≤ D < E means A > C and E > C. We don't know A vs E. Could be A > E, A < E, or A = E. False.
- A % E → A ≤ E. Could be true or false; not certain. False.
- B $ D → B ≥ D. From chain, B ≥ C ≤ D. B ≥ C and C ≤ D. We don't know B vs D. B could be greater, less, or equal to D. False.
Step 4: None of the conclusions are certain.
**Final Answer:** None follows.
[/example]

[quiz title="Inequalities Mastery Quiz"]
Q: Statements: A > B, B ≥ C, C = D, D < E. Which conclusion is true?
- A) A > C (Correct)
- B) A > E
- C) B < C
- D) D > E

Q: In a coded inequality, `$` means `>`, `#` means `<`, `%` means `≥`, `@` means `≤`. Statements: `A $ B`, `B # C`, `C @ D`, `D % E`. Which conclusion follows?
- A) A > D
- B) A ≤ E
- C) C ≥ E
- D) None follows (Correct: A > B < C ≤ D ≥ E. Too many gaps. Cannot determine any relationship.)
- E) B < E

Q: Statements: A = B, B > C, C ≥ D, D < E. Which conclusion is true?
- A) A > C (Correct: A = B > C → A > C)
- B) A < C
- C) C = D
- D) D > E

Q: In a coded inequality, `&` means `>`, `*` means `<`, `^` means `≥`, `!` means `≤`. Statements: `A & B`, `B ^ C`, `C * D`, `D ! E`. Which conclusion is true?
- A) A > D
- B) B > E
- C) C ≥ E
- D) None follows (Correct: A > B ≥ C < D ≤ E. Cannot determine A vs D, B vs E, or C vs E.)
- E) A > C

Q: Statements: A ≥ B, B ≤ C, C > D, D = E. Which conclusion is true?
- A) A > E
- B) B > D
- C) C > E (Correct: C > D = E → C > E)
- D) A = C
[/quiz]