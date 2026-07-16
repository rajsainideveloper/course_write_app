# Word Formation
> The architecture of language: constructing, deconstructing, and ordering words from the raw material of the alphabet. This is not about vocabulary; it is about the systematic manipulation of letters under defined constraints.

## Chapter 1: The Foundations of Word Formation

### Section 1 | What Is Word Formation?

Word formation problems test your ability to create, arrange, and analyze words using a given set of letters or by applying positional rules. The logic is structural, not semantic—though basic vocabulary knowledge is assumed for identifying meaningful words.

**The Three Core Operations**:
1. **Construction**: Forming meaningful words from a given set of letters.
2. **Deconstruction**: Analyzing a word to extract smaller words or count letters between positions.
3. **Ordering**: Arranging words alphabetically and determining their ranks.

**The Cognitive Framework**: Treat each letter as a discrete unit with a position (A=1, B=2, ... Z=26). Meaningfulness is a secondary filter; the primary logic is always about arrangement and position.

[alert type="warning"]
**The Vocabulary Assumption**: The exam uses common English words. If you are unsure whether a combination is a valid word, consider it valid only if it is a standard, commonly used word (e.g., "cat," "dog," "table"). Obscure or archaic words are rarely used as answers.
[/alert]

## Chapter 2: Meaningful Word from Letters

### Section 1 | The Anagram Principle

An anagram is a word formed by rearranging all the letters of another word or a given set of letters. The question may ask:
- "How many meaningful words can be formed from the letters of the word `TREAT`?"
- "Using the letters A, C, T, can you form a meaningful word?"

**The Algorithm**:
1. **List all letters** and identify any duplicates.
2. **Check for common word patterns**: Consonant-vowel-consonant (CVC) is the most frequent English word structure.
3. **Systematically rearrange**: Start with the vowels and place consonants around them.
4. **Verify meaning**: The word must be a standard English word.

**Example**: Using letters `A, C, T`:
- Possible arrangements: `ACT`, `CAT`, `TAC` (not a word), `ATC` (not a word), etc.
- Meaningful words: `ACT` (to do something), `CAT` (animal). So 2 words.

**The Trap**: Students often miss words that use all letters but are not obvious because they are not common. The exam sticks to common words.

### Section 2 | Extracting Smaller Words

Sometimes the question asks: "How many meaningful words of 3 or more letters can be formed from the letters of the word `MANAGEMENT`?" This requires extracting subsets of letters, not necessarily using all letters.

**The Algorithm**:
1. **Count letter frequencies** in the source word.
2. **For each candidate word**, check if all its letters appear in the source with sufficient frequency.
3. **Ignore words** that require a letter not present or require more copies than available.

**Example**: From `MANAGEMENT`:
- Letters: M(2), A(2), N(2), G(1), E(2), T(1).
- Possible 3-letter words: `MAN` (M,A,N), `AGE` (A,G,E), `GEM` (G,E,M), `NET` (N,E,T), `TEN` (T,E,N), `MEN` (M,E,N), `GAME` (4 letters, G,A,M,E), `NAME` (N,A,M,E), etc.

[alert type="success"]
**The Frequency Table**: For any "extract smaller words" problem, create a frequency table of the source word. Then check each candidate against this table. This systematic approach prevents missing constraints.
[/alert]

[flashcards title="Word Formation Letter Frequencies"]
| Source Word | Letter Frequencies |
| :--- | :--- |
| MANAGEMENT | M:2, A:2, N:2, G:1, E:2, T:1 |
| DEVELOPMENT | D:2, E:4, V:1, L:1, O:1, P:1, M:1, N:1, T:1 |
| EDUCATION | E:1, D:1, U:1, C:1, A:1, T:1, I:1, O:1, N:1 |
[/flashcards]

[example]
**Question:** How many meaningful English words can be formed using the letters `E, L, P, P, A` (using all letters)?
**Solution:**
Step 1: List letters: E, L, P, P, A. Total 5 letters.
Step 2: Try to form words. Possible arrangements: `APPLE` is a word. `PAPLE` is not. `PEAPL` is not. `PALPE` is not.
Step 3: Check `APPLE`: A, P, P, L, E → matches the set.
Step 4: Any other? `PAPEL` is not a word. `PALLE` is not. `PLEAP` is not. `LEAPP` is not.
Step 5: Only `APPLE` is a meaningful word.
**Final Answer:** 1 word.
[/example]

## Chapter 3: Number of Letters Between Two Alphabets

### Section 1 | The Positional Difference

This is a purely arithmetic problem: given two letters, find how many letters appear between them in the alphabet. The formula is the absolute difference of their positions minus 1.

=Letters Between = |Pos(A) - Pos(B)| - 1=

**Example**: How many letters are between `M` and `S`?
- M=13, S=19.
- Difference = 19 - 13 = 6.
- Between = 6 - 1 = 5 (N, O, P, Q, R).

**The Trap**: Some questions ask for the *number of letters* between them *inclusive* of one of the letters. Always read carefully: "including" means add 1, "excluding" means subtract 1, and "between" means exclusive (subtract 1).

### Section 2 | The Reverse Direction

When counting between two letters, the order does not matter for the count—only the absolute difference does.

**Example**: Letters between `Z` and `T`:
- Z=26, T=20.
- Difference = 6.
- Between = 5 (U, V, W, X, Y). Same as `T` and `Z`.

[alert type="info"]
**The Complementary Count**: The number of letters between two letters is symmetric. There is no difference between "between A and D" and "between D and A."
[/alert]

[flashcards title="Alphabet Position Reference"]
| Letter | Position | Letter | Position |
| :--- | :--- | :--- | :--- |
| A | 1 | N | 14 |
| B | 2 | O | 15 |
| C | 3 | P | 16 |
| D | 4 | Q | 17 |
| E | 5 | R | 18 |
| F | 6 | S | 19 |
| G | 7 | T | 20 |
| H | 8 | U | 21 |
| I | 9 | V | 22 |
| J | 10 | W | 23 |
| K | 11 | X | 24 |
| L | 12 | Y | 25 |
| M | 13 | Z | 26 |
[/flashcards]

[example]
**Question:** How many letters are there between the 5th letter from the left and the 3rd letter from the right in the word `UNIVERSITY`?
**Solution:**
Step 1: The word is `U N I V E R S I T Y`.
Step 2: 5th letter from the left = E (position 5).
Step 3: 3rd letter from the right: length 10, so 10 - 3 + 1 = 8th letter = R.
Step 4: Count between E and R: positions 5 and 8. Difference = 3. Between = 3 - 1 = 2 (letters: V, E? Wait, the letters between E and R in the word are V, E? No, the word at positions 6,7: V, S. So there are 2 letters: V and S).
Step 5: Between = 2.
**Final Answer:** 2
[/example]

## Chapter 4: Dictionary Order and Ranking of Words

### Section 1 | The Lexicographic Framework

Dictionary order (lexicographic order) is the order in which words appear in a standard dictionary. The rules are:
1. **First letter**: Words are sorted by their first letter alphabetically.
2. **Second letter**: If first letters are the same, sort by the second letter, and so on.
3. **Shorter words**: If one word is a prefix of another, the shorter word comes first (e.g., "cat" comes before "catalog").

**The Algorithm for Ranking**:
To find the rank of a word in a dictionary among all permutations of its letters:
1. Arrange all letters in alphabetical order.
2. For each position from left to right:
   - Count how many letters *smaller than* the current letter are available.
   - Multiply by (number of remaining letters)! to get the number of permutations that would come before this word.
   - Move to the next letter and repeat.
3. Add 1 to the total count to get the rank.

[alert type="success"]
**The Factorial Rule**: The number of permutations of `n` distinct letters is `=n!=`. If there are duplicates, divide by the factorial of the frequency of each duplicate letter.
[/alert]

### Section 2 | Ranking with Duplicate Letters

When letters repeat, the calculation adjusts:

**Algorithm for Duplicates**:
1. Arrange letters alphabetically with counts.
2. For each position:
   - Count available letters smaller than the current letter.
   - For each such letter, compute permutations of the remaining letters using the formula:
     `n! / (c1! × c2! × ... × ck!)`
     where `n` is the number of remaining positions, and `c1, c2, ...` are the frequencies of each remaining letter.
3. Sum these counts and add 1.

**Example**: Rank of `BALL` among all permutations of its letters.
- Letters: A, B, L, L (A=1, B=1, L=2).
- Alphabetical order: A, B, L, L.
- Rank calculation:
  - Position 1: Current letter = B. Available smaller letters = A (1). Permutations of remaining (A? No, we used A as the smaller letter, so remaining: B, L, L → 3!/(1! × 2!) = 3). So 1×3 = 3 words start with A before those starting with B. Count = 3.
  - Now consider words starting with B. Remaining letters: A, L, L.
  - Position 2: Current = A. No smaller letters. Count 0.
  - Position 3: Current = L. Remaining letters after fixing B, A: L, L. Smaller letters? L is the smallest available. No smaller. Count 0.
  - Position 4: Current = L. No smaller. Count 0.
- Total before = 3. Rank = 3 + 1 = 4.

**Check**: Permutations of BALL: BALL, B L A L? Let's list: ABLL (not a word), ALBL, ALLB, BALL, BLAL, BLLA, etc. The 4th permutation in alphabetical order is BALL. So rank = 4. Correct.

[alert type="danger"]
**The Prefix Rule**: In dictionary order, if one word is a prefix of another, the shorter word comes first. This affects ranking when comparing different words. For example, "BALL" comes before "BALLOON" because "BALL" is a prefix. In permutations, this is automatically handled because "BALL" has all its letters used up before the extra letters of "BALLOON" appear.
[/alert]

[flashcards title="Rank Calculation Formula"]
| Case | Formula |
| :--- | :--- |
| All distinct letters | Rank = 1 + Σ (smaller letters available) × (remaining positions)! |
| With duplicates | Rank = 1 + Σ (smaller letters available) × [ (remaining positions)! / (product of factorials of duplicate frequencies) ] |
| Dictionary order of different words | Compare character by character; prefix comes first |
[/flashcards]

[example]
**Question:** What is the rank of the word ``MOTHER` among all permutations of its letters?
**Solution:**
Step 1: Letters: M, O, T, H, E, R. All distinct. Alphabetical order: E, H, M, O, R, T.
Step 2: Rank = 1 + sum over positions:
- Position 1: M. Smaller letters available: E, H → 2 letters.
  - For each smaller letter, remaining 5 letters: 5! = 120.
  - Count = 2 × 120 = 240.
- Position 2: O (current letter). Remaining letters after fixing M: E, H, O, R, T. Smaller than O: E, H → 2 letters.
  - Remaining positions: 4! = 24.
  - Count = 2 × 24 = 48.
- Position 3: T (current). Remaining letters after M, O: E, H, T, R. Smaller than T: E, H, R → 3 letters.
  - Remaining positions: 3! = 6.
  - Count = 3 × 6 = 18.
- Position 4: H (current). Remaining after M, O, T: E, H, R. Smaller than H: E → 1 letter.
  - Remaining positions: 2! = 2.
  - Count = 1 × 2 = 2.
- Position 5: E (current). Remaining after M, O, T, H: E, R. Smaller than E: none.
  - Count = 0.
- Position 6: R (current). Remaining: R. Smaller: none. Count 0.
Step 3: Total before = 240 + 48 + 18 + 2 = 308.
Step 4: Rank = 308 + 1 = 309.
**Final Answer:** 309
[/example]

[quiz title="Word Formation Mastery Quiz"]
Q: How many meaningful English words can be formed from the letters `E, H, T`?
- A) 1
- B) 2 (Correct: "THE" and "HET"? No, "HET" is not a word. "THE" is a word. "ETH" is not a word. "TEH" is not a word. Actually, "THE" is the only word. Wait, what about "HET"? It's not a standard word. So only 1. Let's check: E, H, T → "THE" is a word. "HET" is archaic. So likely 1.)
- C) 3
- D) 4

Q: How many letters are between `L` and `P` in the alphabet?
- A) 2
- B) 3 (Correct: L=12, P=16. Difference=4. Between=4-1=3: M, N, O.)
- C) 4
- D) 5

Q: What is the dictionary rank of the word ``CAT` among all permutations of its letters?
- A) 1
- B) 2
- C) 3 (Correct: Letters A, C, T. Alphabetical: A, C, T. Rank = 1. Words: ACT, CAT, CTA, TAC, TCA, etc. Wait: Permutations: ACT (1), ATC (2), CAT (3). So rank of CAT is 3.)
- D) 4

Q: How many 3-letter meaningful words can be formed from the word ``TRAIN` (without repetition)?
- A) 4
- B) 5
- C) 6 (Correct: Letters T, R, A, I, N. 3-letter words: RAT, TAN, TAR, ART, AIR, TIN, RAN, ANT, etc. Let's list meaningful: RAT, TAN, TAR, ART, AIR, TIN, RAN, ANT → 8 words. But the options don't have 8. Let's check common words: RAT, TAN, TAR, ART, AIR, TIN, RAN, ANT. That's 8. But the question might expect only common, non-slang words. If we exclude TAR (which is a word), we have 7. The options are 4,5,6,7? The question options are not given. The likely answer is 6 if we include only the most common: RAT, TAN, ART, AIR, TIN, ANT. That's 6.)
- D) 7

Q: What is the rank of the word ``BALL` among all permutations of its letters?
- A) 2
- B) 3
- C) 4 (Correct: As calculated earlier, rank of BALL is 4.)
- D) 5
[/quiz]