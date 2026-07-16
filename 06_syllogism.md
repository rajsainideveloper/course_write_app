# Syllogism
> The algebra of categorical propositions: deducing what necessarily follows from given premises. This is not about probability or intuition; it is about strict logical entailment under the precise rules of set inclusion and exclusion.

## Chapter 1: The Foundations of Syllogistic Logic

### Section 1 | What Is a Syllogism?

A syllogism presents two or more categorical statements (premises) and asks you to determine which conclusions *necessarily* follow. The operative word is "necessarily." In syllogistic reasoning, a conclusion is valid only if it is *impossible* for the premises to be true while the conclusion is false. Any conclusion that could be true in some cases but false in others is invalid.

**The Core Components**:
- **Premises**: Given statements that you must accept as true.
- **Conclusion**: A statement to be tested for validity.
- **Terms**: The three classes (sets) involved in the argument. For two-premise syllogisms: the *major term* (predicate of the conclusion), the *minor term* (subject of the conclusion), and the *middle term* (appears in both premises but not in the conclusion).

The exam uses four standard categorical proposition types based on quality (affirmative/negative) and quantity (universal/particular):

| Type | Form | Example | Interpretation |
| :--- | :--- | :--- | :--- |
| **A** (Universal Affirmative) | All S are P | All cats are animals | S ⊆ P |
| **E** (Universal Negative) | No S are P | No cats are dogs | S ∩ P = ∅ |
| **I** (Particular Affirmative) | Some S are P | Some cats are black | S ∩ P ≠ ∅ |
| **O** (Particular Negative) | Some S are not P | Some cats are not black | S ⊄ P |

[alert type="danger"]
**The "Some" Trap**: In syllogistic logic, "some" means *at least one, and possibly all*. It does *not* mean "some but not all." This is the most common source of errors. If "Some S are P" is true, it is entirely possible that all S are P. The statement does not imply that any S are not P.
[/alert]

### Section 2 | The Venn Diagram Method

Venn diagrams are the gold standard for syllogism solving. They provide a visual representation of set inclusion and exclusion, eliminating ambiguity.

**The Three-Set Venn Diagram**:
- Draw three overlapping circles representing the three terms (e.g., A, B, C).
- Shade regions to indicate emptiness (universal statements).
- Mark regions with `X` to indicate existence (particular statements).
- A conclusion is valid if it is true in *all* possible diagrams consistent with the premises.

**The Shading Rules**:
- "All S are P" → Shade the portion of S that is outside P (S ∩ P' is empty).
- "No S are P" → Shade the intersection S ∩ P (they have no overlap).
- "Some S are P" → Place an `X` in the intersection S ∩ P.
- "Some S are not P" → Place an `X` in S outside P (S ∩ P').

**The Existence Rule**: Particular statements (Some) require an `X` to mark existence. Universal statements (All, No) do not imply existence by themselves. "All unicorns have horns" does not mean unicorns exist; it only states the conditional relationship.

[flashcards title="Venn Diagram Shorthand"]
| Statement | Set Interpretation | Shading/Marking |
| :--- | :--- | :--- |
| All S are P | S ⊆ P | Shade S outside P |
| No S are P | S ∩ P = ∅ | Shade S ∩ P |
| Some S are P | S ∩ P ≠ ∅ | Mark X in S ∩ P |
| Some S are not P | S ⊄ P | Mark X in S outside P |
[/flashcards]

## Chapter 2: 2-Statement Based Syllogisms

### Section 1 | The Four Valid Argument Forms

With two premises, only a limited number of combinations yield valid conclusions. The exam tests these classic forms. Memorize them not as abstract rules, but as Venn diagram patterns.

| Premise 1 | Premise 2 | Valid Conclusion | Invalid Consequence |
| :--- | :--- | :--- | :--- |
| All A are B | All B are C | All A are C | Some C are A (may be true, not necessary) |
| All A are B | No B are C | No A are C | All C are not A (same as No A are C) |
| Some A are B | All B are C | Some A are C | Some C are A (follows from Some A are C) |
| Some A are B | No B are C | Some A are not C | Some C are not A (does not follow) |

**The Middle Term Rule**: The middle term (the term common to both premises) must be distributed in at least one premise. "Distributed" means the term refers to *all* members of the class. In "All A are B," A is distributed; B is not. In "No A are B," both A and B are distributed. In "Some A are B," neither is distributed.

### Section 2 | The Common Distractors

**Distractor 1: Illicit Conversion**. "All A are B" does NOT imply "All B are A." The converse is "Some B are A" only if A is non-empty (which is not guaranteed). This is a favorite trap.

**Distractor 2: Illicit Reversal**. "Some A are not B" does NOT imply "Some B are not A." The statement only asserts that there is at least one A outside B; it says nothing about B outside A.

**Distractor 3: The Existential Fallacy**. From "All A are B" and "All B are C," you *cannot* conclude "Some C are A" unless you know that A exists. Universal premises do not assert existence.

[alert type="warning"]
**The Complement Trap**: If "All A are B" is true, then "No A are not B" is also true. The complement of B (not B) has no intersection with A. This is a valid equivalent. The exam often tests this by using negative terms.
[/alert]

[example]
**Question:** Statements: All pens are books. All books are copies. Conclusions: I. All pens are copies. II. Some copies are pens.
**Solution:**
Step 1: Draw Venn: Pens ⊆ Books ⊆ Copies.
Step 2: Conclusion I: All pens are copies. True, because Pens ⊆ Books ⊆ Copies.
Step 3: Conclusion II: Some copies are pens. True *if* pens exist. But the premises do not state that any pens exist. However, in standard syllogistic logic, "All pens are books" implies pens exist? Actually, traditional Aristotelian logic assumes existence for universal affirmative statements (the "existential import"). Modern logic does not. The exam follows traditional logic (unless explicitly stated otherwise). So "All pens are books" implies some pens exist. Thus, some copies are pens. True.
Step 4: Both conclusions follow.
**Final Answer:** Both I and II follow.
[/example]

## Chapter 3: 3-Statement Based Syllogisms

### Section 1 | The Chain Extension

Three-statement syllogisms extend the two-statement logic by adding an intermediate premise. The method is identical: combine pairs of premises to derive intermediate conclusions, then combine those with the third premise.

**The General Algorithm**:
1. Identify the middle terms. Look for terms that appear in two premises.
2. Combine two premises that share a middle term to derive a conclusion.
3. Combine that conclusion with the remaining premise to derive the final conclusion.
4. Check if the final conclusion matches any given conclusion.

**Example**: Premises:
- All A are B.
- Some B are C.
- All C are D.
- Step 1: Combine "All A are B" and "Some B are C." The middle term is B. From "All A are B" and "Some B are C," we cannot directly conclude anything about A and C because B is distributed in "All A are B" (A is distributed, B is not), but in "Some B are C," neither is distributed. The valid conclusion is "Some A are C"? Wait: In the classic syllogism pattern, "All A are B" + "Some B are C" → "Some A are C" is *invalid* because the middle term B is not distributed in either premise. The valid pattern requires "All A are B" + "Some A are C" to get "Some B are C." So this combination yields no valid conclusion.
- Step 2: The correct approach: The only valid combination is "All A are B" and "All C are D" don't share a middle term. "Some B are C" and "All C are D" share C: "Some B are C" + "All C are D" → "Some B are D." Then combine with "All A are B": "All A are B" + "Some B are D" → No valid conclusion (B not distributed in the second premise). So no conclusion follows.

### Section 2 | The Dependency Tracking Method

To avoid getting lost in chains, track which premises depend on which. Draw a dependency graph:
- Each premise is a node.
- Premises that share a term are connected.
- Conclusions can only be drawn along connected paths where the middle term is properly distributed.

[alert type="info"]
**The Shortcut**: In most 3-statement syllogisms, the correct conclusion will involve the *first* term of the first premise and the *last* term of the last premise, after chaining them through the middle terms. If the chain is valid (middle terms properly distributed), the conclusion follows.
[/alert]

[flashcards title="Middle Term Distribution Rules"]
| Premise Type | Subject Distributed? | Predicate Distributed? |
| :--- | :--- | :--- |
| All S are P | Yes (S) | No (P) |
| No S are P | Yes (S) | Yes (P) |
| Some S are P | No (S) | No (P) |
| Some S are not P | No (S) | Yes (P) |
[/flashcards]

## Chapter 4: Possibility Cases

### Section 1 | The Modality of Conclusions

"Possibility" questions test whether a conclusion *can* be true, *must* be true, or *cannot* be true under the premises. The standard distinctions:

- **Definite (or Certain)**: The conclusion necessarily follows from the premises. This is the standard valid syllogistic conclusion.
- **Possible**: The conclusion is consistent with the premises—there exists at least one arrangement of sets that makes both the premises and the conclusion true.
- **Impossible**: The conclusion contradicts the premises—no arrangement can make both true.

**The Key Insight**: A conclusion that is "possible" but not "certain" is *invalid* in a standard syllogism question unless the question explicitly asks for possibility. The exam often includes a separate category of questions where the answer is "some conclusion is possible" versus "some conclusion is definite."

### Section 2 | The Complement Possibility Rule

If "All A are B" is given, then:
- "Some A are not B" is *impossible* (direct contradiction).
- "Some A are B" is *certain* (if A exists, which is assumed in traditional logic).
- "Some B are A" is *certain* (if A exists).
- "All B are A" is *possible* but not *certain*.
- "No B are A" is *impossible* (if A exists).

The trap: Students often treat possibilities as certainties. The phrase "possible" in the conclusion does not change the premises; it only invites you to consider whether a conclusion *could* be true, not whether it *must* be true.

[alert type="success"]
**The If-Then Conditional**: In modern logic, "All A are B" is equivalent to "If something is A, then it is B." This conditional does not assert the existence of A. If the exam uses "possibility," they are often testing this logical subtlety. If A cannot exist, then "All A are B" is vacuously true, and any statement about some A being something is false. But the exam avoids vacuity by assuming existence in traditional logic.
[/alert]

[example]
**Question:** Statement: All teachers are scholars. Conclusions: I. Some scholars are teachers. II. No scholar is a teacher. III. Some scholars are not teachers. IV. All scholars are teachers.
**Solution:**
Step 1: "All teachers are scholars" → Teachers ⊆ Scholars.
Step 2: Conclusion I: Some scholars are teachers. This is definite (if teachers exist). True.
Step 3: Conclusion II: No scholar is a teacher. This contradicts the premise. False.
Step 4: Conclusion III: Some scholars are not teachers. This is possible (if there are scholars who are not teachers) but not definite. Without additional information, it could be true or false. In standard syllogism, it is a possible case but not a necessary conclusion.
Step 5: Conclusion IV: All scholars are teachers. This is possible (if the sets are identical) but not definite. Not a necessary conclusion.
**Final Answer:** Only Conclusion I follows as definite.
[/example]

## Chapter 5: Either/Or Cases

### Section 1 | The Complementary Pair

Either/Or questions present two conclusions that are *complementary*: they cannot both be true, but at least one must be true given the premises. The classic pattern is "Some A are B" and "Some A are not B." These two statements are not complementary; they can both be true (if some are B and some are not). The complementary pair is "All A are B" and "Some A are not B." These cannot both be true (they contradict), and at least one must be true (by the law of excluded middle). So if the premises lead to a situation where one of these must hold, the answer is "Either I or II follows."

**The Either/Or Rule**:
1. Check if the two conclusions are contradictory.
2. Check if the premises allow both to be false (if both can be false, then neither necessarily follows).
3. If they are contradictory and both cannot be false, then "Either I or II follows."

### Section 2 | The Most Common Either/Or Pattern

- Conclusion I: All A are B.
- Conclusion II: Some A are not B.
- If the premises lead to "Some A are B" (i.e., A exists), then the relationship between A and B is either that all A are B, or that some A are not B. These two cover all possibilities. Therefore, either I or II follows.

The trap: The exam sometimes pairs "No A are B" with "Some A are B" as an either/or pair. These are contradictory (they cannot both be true), but they *can* both be false (if some but not all A are B). So they do *not* form a valid either/or pair. The valid complementary pair for "No A are B" is "Some A are B" with "All A are B"? No. The true complementary pair for "No A are B" is "Some A are B"? Let's check: If no A are B is false, then at least one A is B (some A are B). So "No A are B" and "Some A are B" are contradictory. They cannot both be true, but they cannot both be false because if no A are B is false, then some A are B is true, and vice versa. So they form a valid either/or pair as well. Wait: If no A are B is false, it means there exists at least one A that is B, which is "Some A are B." So yes, they are complementary. So either/or pairs can be:
- "All A are B" and "Some A are not B" (contradictories).
- "No A are B" and "Some A are B" (contradictories).

[alert type="danger"]
**The Double Condition**: For an either/or answer to be correct, the premises must provide the *middle ground*—they must establish that A exists. If A does not exist, then "All A are B" is vacuously true (if A is empty), and "Some A are not B" is false. The either/or would fail because the false conclusion is not actually false under the premises. This is a subtle trap in modern logic.
[/alert]

[example]
**Question:** Statements: All cats are animals. Some animals are pets. Conclusions: I. All cats are pets. II. Some cats are not pets.
**Solution:**
Step 1: Draw Venn: Cats ⊆ Animals. Pets ∩ Animals ≠ ∅. No relation between Cats and Pets is established.
Step 2: Conclusion I: All cats are pets. This is possible but not certain.
Step 3: Conclusion II: Some cats are not pets. This is possible but not certain.
Step 4: Are these contradictory? Yes: "All cats are pets" and "Some cats are not pets" are contradictory. Since cats exist (given by "All cats are animals"), one of the two must be true. The premises do not tell us which. Therefore, the valid answer is "Either I or II follows."
**Final Answer:** Either I or II follows.
[/example]

## Chapter 6: Only / Only a Few Cases

### Section 1 | The Precision of "Only"

The word "only" in a statement like "Only S are P" means "All P are S." This is a reversal of the usual direction. It does *not* mean "All S are P." This reversal is a frequent source of errors.

**Translation Table**:
- "Only A are B" = "All B are A" (B ⊆ A).
- "All A are B" ≠ "Only A are B" (unless A and B are identical).
- "Only a few A are B" = "Some A are B, and some A are not B" (i.e., not all A are B, and not all B are A—it's a partial overlap).

### Section 2 | "Only a Few" in Venn Diagrams

"Only a few A are B" establishes:
1. Some A are B (intersection non-empty).
2. Some A are not B (A has elements outside B).
3. This implies "Some B are A" (since the intersection is non-empty).
4. This does *not* imply "All A are B" (that would violate condition 2).
5. This does *not* imply "No A are B" (that would violate condition 1).

The key insight: "Only a few" is equivalent to "Some A are B AND Some A are not B." It is a *partial overlap*, not a subset or disjoint relationship.

[alert type="success"]
**The "Only" Shortcut**: Whenever you see "Only," reverse the order of the terms. "Only A are B" becomes "All B are A." This translation is non-negotiable; failure to apply it leads to wrong answers.
[/alert]

[flashcards title="'Only' and 'Only a Few' Translation"]
| Statement | Logical Equivalent | Venn Interpretation |
| :--- | :--- | :--- |
| Only A are B | All B are A | B ⊆ A |
| Only a few A are B | Some A are B, Some A are not B | Partial overlap |
| Only A are not B | All non-B are A? | Not standard; usually means No A are B? |
[/flashcards]

[example]
**Question:** Statement: Only dogs are pets. Conclusions: I. All pets are dogs. II. Some dogs are pets.
**Solution:**
Step 1: "Only dogs are pets" → All pets are dogs. So Pets ⊆ Dogs.
Step 2: Conclusion I: All pets are dogs. This is exactly what the premise says. True.
Step 3: Conclusion II: Some dogs are pets. This follows if pets exist. "Only dogs are pets" implies that if there is a pet, it is a dog. It does not guarantee that any pet exists. But in traditional logic, the existence of pets is assumed from the statement? Actually, "Only dogs are pets" is a universal statement about pets, but it does not assert that any pets exist. However, the statement "pets" is the subject, so it implies pets exist? In traditional syllogistic, the subject term of a universal affirmative has existential import. So yes, some dogs are pets. True.
Step 4: Both I and II follow.
**Final Answer:** Both I and II follow.
[/example]

[quiz title="Syllogism Mastery Quiz"]
Q: Statements: All apples are fruits. No fruits are vegetables. Conclusions: I. No apples are vegetables. II. No vegetables are apples.
- A) Only I follows
- B) Only II follows
- C) Both I and II follow (Correct: All apples are fruits ⊆ fruits, and fruits ∩ vegetables = ∅ → apples ∩ vegetables = ∅. So No apples are vegetables. Also, No vegetables are apples is the converse and is valid.)
- D) Neither follows

Q: Statements: Some teachers are engineers. All engineers are graduates. Conclusions: I. Some graduates are teachers. II. Some teachers are graduates.
- A) Only I follows
- B) Only II follows
- C) Both I and II follow (Correct: Some teachers are engineers → intersection non-empty. All engineers are graduates → engineers ⊆ graduates. So the teachers that are engineers are also graduates. Thus, Some teachers are graduates (II). Also, some graduates are teachers (I) follows from the same. Both follow.)
- D) Neither follows

Q: Statements: All books are interesting. No interesting thing is boring. Conclusions: I. Some books are boring. II. No boring thing is a book.
- A) Only I follows
- B) Only II follows (Correct: All books are interesting. No interesting thing is boring → no intersection between interesting and boring. So books (subset of interesting) have no intersection with boring. Thus, No books are boring. The conclusion "Some books are boring" contradicts this. So II: No boring thing is a book is equivalent to No books are boring, which follows. Only II follows.)
- C) Both I and II follow
- D) Neither follows

Q: Statements: Only a few colors are bright. All bright things are visible. Conclusions: I. Some colors are not bright. II. Some visible things are colors.
- A) Only I follows
- B) Only II follows
- C) Both I and II follow (Correct: "Only a few colors are bright" → Some colors are bright and some colors are not bright. So I follows. Since some colors are bright, and all bright things are visible, those bright colors are visible. So some visible things are colors. II follows. Both follow.)
- D) Neither follows

Q: Statements: All trees are plants. No plants are stones. Conclusions: I. Some trees are stones. II. Some stones are not trees.
- A) Only I follows
- B) Only II follows
- C) Both I and II follow
- D) Neither follows (Correct: Trees ⊆ Plants. Plants ∩ Stones = ∅. So Trees ∩ Stones = ∅. Thus, No trees are stones. I is false. II: Some stones are not trees is true because if no trees are stones, then all stones are not trees. Since stones exist (assumed), at least one stone is not a tree. So II follows. Wait: "Some stones are not trees" follows from "No trees are stones" because if no trees are stones, then all stones are not trees, which implies some stones are not trees (if stones exist). So II follows. But the question asks which conclusions follow. I is false, II is true. So only II follows. But the option says "Only II follows." Let's check: II is "Some stones are not trees." From "No trees are stones," we get "All stones are not trees," which implies some stones are not trees if stones exist. So II follows. So the correct answer is B) Only II follows.)
[/quiz]