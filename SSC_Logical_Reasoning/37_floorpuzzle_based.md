# Floor/Puzzle Based

> The architecture of multi-dimensional logic: reconstructing layered arrangements where people, preferences, and positions intersect. This is not about solving a single relationship; it is about weaving together multiple constraints into a coherent structure.

## Chapter 1: The Foundations of Floor and Puzzle Logic

### Section 1 | What Is a Floor/Puzzle Arrangement?

Floor and puzzle arrangements are multi-attribute problems where each person has multiple properties (e.g., floor, city, color, food preference). You are given a set of constraints that link these properties, and you must determine the complete mapping of all attributes to all persons.

**The Core Principle**: Each clue is a relationship between two or more attributes. The solution is built by combining these relationships, often using tables or grids to track possibilities.

**The Cognitive Shift**: Think of the problem as a constraint satisfaction puzzle. Each person is a row in a table; each attribute (floor, city, color) is a column. Your task is to fill the table such that all clues are satisfied.

[alert type="danger"]
**The Information Overload Trap**: With multiple attributes, it's easy to get lost. Always organize your information systematically. A table or grid is essential. Do not try to hold all clues in your head.
[/alert]

### Section 2 | The Multi-Attribute Framework

| Component | Description | Example |
| :--- | :--- | :--- |
| Persons | Individuals to be placed | A, B, C, D |
| Floors/Positions | The physical arrangement | Floor 1, Floor 2, Floor 3, ... |
| Preferences | Categories linked to persons | City: Delhi, Mumbai, Kolkata |
| Colors | Another linked category | Red, Blue, Green |
| Clues | Relationships between attributes | "A lives on a floor above B" |

## Chapter 2: Multiple Floors (Up/Down Sorting)

### Section 1 | The Floor Framework

Floor arrangements involve people living on different floors of a building. The floors are usually numbered from bottom (1) to top (n), or top to bottom. Clues involve relative positions ("above," "below," "immediately above").

**The Direction Rule**: If floors are numbered from bottom to top, "above" means a higher number. "Below" means a lower number. If numbered from top to bottom, the direction is reversed.

**The Drawing**: Draw a vertical column with the floors listed from top to bottom or bottom to top. Place people as you deduce their positions.

### Section 2 | The Floor Construction Algorithm

1. **Draw a vertical column** with each floor labeled.
2. **Place the most definite clue**: e.g., "A lives on the top floor" → place A at the top.
3. **Place relative clues**: e.g., "B lives two floors below A" → count two floors down from A.
4. **Use elimination**: If a person cannot be on a certain floor, note it.
5. **Check for consistency**: Ensure all clues are satisfied.

[alert type="success"]
**The "Above-Below" Translation**: When a clue says "A lives above B," the relative position is clear, but there may be floors between them. "Immediately above" means no floor between; "two floors above" means one floor between.
[/alert]

[flashcards title="Floor Terms"]
| Term | Meaning | Example |
| :--- | :--- | :--- |
| Above/Below | Relative position | A is above B |
| Immediately above/below | Adjacent floors | A is immediately above B |
| Two floors above/below | One floor between | A is two floors above B |
| Top/Bottom | Highest/lowest floor | A lives on the top floor |
| Between | Someone in the middle | A lives between B and C |
[/flashcards]

[example]
**Question:** A, B, C, D, and E live on five different floors of a building, numbered 1 (bottom) to 5 (top). A lives above B. C lives immediately above D. E lives on the bottom floor. B lives immediately below E? No, let's solve:
Clues:
1. A lives above B.
2. C lives immediately above D.
3. E lives on the bottom floor.
4. B lives on the floor immediately below E? But E is on the bottom floor, so B cannot be below E. So clue 4 must be different.
Let's use actual clues: A is above B. C is immediately above D. E is on floor 1. B is not on floor 2? Let's solve systematically:
**Solution:**
Step 1: E is on floor 1.
Step 2: A is above B. So A is on a higher floor than B.
Step 3: C is immediately above D. So C and D are adjacent, with C above D.
Step 4: We have 5 floors. Floors: 1:E, 2:?, 3:?, 4:?, 5:?.
Step 5: C and D must be adjacent. Possible pairs: (2,3), (3,4), (4,5). C is the higher one.
Step 6: A is above B. They cannot be adjacent necessarily.
Step 7: Try C at 5, D at 4. Then A and B must be above? A above B, but only floors 2 and 3 remain. A could be 3, B could be 2. Then arrangement: 1:E, 2:B, 3:A, 4:D, 5:C. Check: A above B? Yes (3 above 2). C immediately above D? Yes (5 above 4). Works.
Step 8: So arrangement: Floor 1: E, Floor 2: B, Floor 3: A, Floor 4: D, Floor 5: C.
**Final Answer:** Floor 1: E, 2: B, 3: A, 4: D, 5: C.
[/example]

## Chapter 3: Persons and Preferences (Colour/Food/City)

### Section 1 | The Preference Framework

Preference puzzles involve people and their likes/dislikes (colors, food items, cities, etc.). Each person has exactly one preference from each category, and no two people share the same preference within a category.

**The Categories**: Usually, there are two or three categories. For example, six people each like a different color and a different food. Clues link people to their preferences or to other people.

**The Drawing**: Use a table with persons as rows and categories as columns. Fill in the preferences as you deduce them.

### Section 2 | The Preference Construction Algorithm

1. **Create a table** with persons as rows and categories as columns.
2. **Mark known preferences**: e.g., "A likes Red" → put Red in A's color cell.
3. **Use elimination**: If a color is taken by A, it cannot be taken by anyone else.
4. **Use relative clues**: e.g., "B likes the same color as C's food" → this links two categories.
5. **Check for uniqueness**: Within each category, all preferences are different.

[alert type="info"]
**The Cross-Category Link**: Some clues link preferences across categories. For example, "The person who likes Pizza also likes Blue." This creates a combined constraint that can be very powerful.
[/alert]

[flashcards title="Preference Categories"]
| Category | Example Values | Unique? |
| :--- | :--- | :--- |
| Colors | Red, Blue, Green, Yellow, Black, White | Yes |
| Foods | Pizza, Burger, Pasta, Salad, Soup, Steak | Yes |
| Cities | Delhi, Mumbai, Chennai, Kolkata, Bangalore, Hyderabad | Yes |
| Sports | Cricket, Football, Tennis, Badminton, Hockey, Volleyball | Yes |
[/flashcards]

[example]
**Question:** A, B, C, D, and E live on five different floors. Each likes a different color: Red, Blue, Green, Yellow, White. Clues:
1. A lives above B.
2. C likes Red.
3. D lives immediately below E.
4. The person who likes Green lives on the top floor.
5. B likes Blue.
6. The person who likes White lives above the person who likes Yellow.
Solve the arrangement.
**Solution:**
Step 1: Let's set up floors 1-5 and colors.
Step 2: C likes Red. B likes Blue.
Step 3: Green is on the top floor (5).
Step 4: D is immediately below E.
Step 5: White is above Yellow.
Step 6: A is above B.
Step 7: We have colors: Red (C), Blue (B), Green (floor 5), White, Yellow.
Step 8: Try placing D and E: Possible pairs (1,2), (2,3), (3,4), (4,5). If E is on 5 and D on 4, then Green is on 5, so E likes Green. Then D is on 4.
Step 9: Floor 5: E (Green), Floor 4: D.
Step 10: Remaining floors: 1, 2, 3 for A, B, C. A above B. C likes Red. B likes Blue.
Step 11: If C is on 3, then remaining floors 1 and 2 for A and B. A above B → A on 2, B on 1.
Step 12: Colors: 5:E-Green, 4:D-?, 3:C-Red, 2:A-?, 1:B-Blue.
Step 13: Remaining colors: White and Yellow for A and D? Wait, D is on 4, A is on 2. Colors left: White, Yellow. Clue: White above Yellow. So White must be on a higher floor than Yellow. A is on 2, D is on 4. So D must be White (4), A must be Yellow (2). But White above Yellow (4 above 2) satisfies.
Step 14: Arrangement: Floor 1: B (Blue), Floor 2: A (Yellow), Floor 3: C (Red), Floor 4: D (White), Floor 5: E (Green).
**Final Answer:** 1:B-Blue, 2:A-Yellow, 3:C-Red, 4:D-White, 5:E-Green.
[/example]

## Chapter 4: Box/Item Based Arrangement

### Section 1 | The Box Framework

Box-based arrangements involve stacking or placing items (boxes, books, or other objects) in a linear order, often with attributes like color, weight, or content.

**The Logic**: Similar to floor arrangements, but with items instead of people. Clues involve relative positions ("above," "below," "between") and attributes.

### Section 2 | The Box Construction Algorithm

1. **Draw a linear order** of positions (top to bottom or left to right).
2. **Place items** based on clues.
3. **Use attribute clues** to link items to their properties.
4. **Apply uniqueness**: Each item has distinct attributes within each category.

[alert type="warning"]
**The Attribute Overlap**: In box arrangements, each item may have multiple attributes (color, weight, content). Track each attribute separately in a table.
[/alert]

[flashcards title="Box Arrangement Terms"]
| Term | Meaning | Example |
| :--- | :--- | :--- |
| Above/Below | Vertical position | Box A is above Box B |
| Immediately above/below | Adjacent positions | Box A is immediately above Box B |
| Top/Bottom | Highest/lowest position | Box A is at the top |
| Between | In the middle | Box A is between Box B and Box C |
| Heavier/Lighter | Weight comparison | Box A is heavier than Box B |
[/flashcards]

[example]
**Question:** Five boxes are placed one on top of another. Each box has a different color: Red, Blue, Green, Yellow, White. Clues:
1. The Red box is above the Green box.
2. The Blue box is immediately below the Yellow box.
3. The White box is at the bottom.
4. The Green box is not at the top.
What is the arrangement?
**Solution:**
Step 1: Positions: Top, 2, 3, 4, Bottom.
Step 2: White is at the bottom.
Step 3: Blue is immediately below Yellow. So Yellow is above Blue, adjacent.
Step 4: Red is above Green.
Step 5: Green is not at the top.
Step 6: Let's try: Bottom = White. Remaining positions: Top, 2, 3, 4 for Red, Blue, Green, Yellow.
Step 7: Blue below Yellow: possible pairs (1,2), (2,3), (3,4). If (1,2): Yellow at Top, Blue at 2. Then Red above Green: remaining positions 3,4. Red at 3, Green at 4. But Green is not at top, but at 4 is okay. Red above Green (3 above 4) works. Arrangement: Top: Yellow, 2: Blue, 3: Red, 4: Green, Bottom: White.
Step 8: Check: Red above Green? Yes (3 above 4). Blue below Yellow? Yes (2 below 1). White at bottom? Yes.
**Final Answer:** Top: Yellow, 2: Blue, 3: Red, 4: Green, Bottom: White.
[/example]

[quiz title="Floor/Puzzle Arrangement Mastery Quiz"]
Q: In a building with 5 floors, A lives above B. C lives on the 3rd floor. D lives immediately below E. Who lives on the top floor?
- A) A
- B) B
- C) C
- D) Cannot be determined (Correct: Without more clues, the top floor could be A, D, or E.)
- E) E

Q: In a preference puzzle, each person likes a different color. If A likes Red and B does not like Blue, then which of the following is true?
- A) B likes Red (Incorrect: Red is taken by A.)
- B) B likes Blue (Incorrect: B does not like Blue.)
- C) B likes some color other than Red and Blue (Correct: B cannot like Red or Blue, so B likes one of the remaining colors.)
- D) None of these

Q: Six boxes are stacked. Box A is above Box B. Box B is above Box C. Box D is immediately below Box E. Box F is at the bottom. How many boxes are above Box C?
- A) 1
- B) 2
- C) 3
- D) Cannot be determined (Correct: We know A, B, C are in order with A above B above C. D and E are adjacent. F is at bottom. But we don't know the exact positions of D and E relative to A, B, C. So the number of boxes above C cannot be determined.)
- E) 4

Q: In a puzzle, A likes Pizza, B likes Pasta, C likes neither. Which of the following is true?
- A) A likes Pasta (Incorrect: A likes Pizza.)
- B) B likes Pizza (Incorrect: B likes Pasta.)
- C) C likes some other food (Correct: C does not like Pizza or Pasta, so C likes one of the remaining foods.)
- D) None of these

Q: Five people live on five different floors. A lives above B but below C. D lives immediately below E. Who is on the 3rd floor?
- A) A
- B) B
- C) C
- D) Cannot be determined (Correct: We know C is above A above B, so C is above, A is middle, B is below. D and E are adjacent. The exact floors depend on the number of floors and the positions of D and E. Without more information, we cannot determine who is on the 3rd floor.)
- E) D
[/quiz]