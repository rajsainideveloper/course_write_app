# Cubes & Dices
> The Geometry of Faces: From 2D Nets to 3D Configurations

## Chapter 29: The Topology of Spatial Reasoning

Cubes and dices are the purest test of spatial visualization in the reasoning syllabus. The examiner presents you with a two-dimensional representation and demands three-dimensional insight. The cognitive challenge is not computation—it is *mental rotation*. Your brain must fold a net, track opposite faces, or count hidden surfaces.

The underlying mathematics is surprisingly simple. Every cube has 6 faces, 12 edges, and 8 vertices. Every die follows a critical constraint: *opposite faces sum to 7* (on a standard die). But examiners often use non-standard dice, rendering this shortcut useless. You must rely on the *geometry of adjacency*—the fact that any two faces sharing an edge are adjacent, and any two faces not sharing an edge are opposite.

---

### Section 1 | The Open Dice: Folding Nets into Cubes

An open die is a 2D net—a flat pattern of six squares that can be folded into a cube. Your task is to determine which net folds into a valid cube and, more importantly, which faces will be opposite or adjacent after folding.

**The Fold Mechanics**:
- The net is composed of six squares. Each square becomes a face of the cube.
- When folded, the faces that share an edge in the net become *adjacent* faces.
- The faces that do not share an edge in the net *may* become opposite, depending on the fold.

**The Critical Constraint**: In any valid cube net, no two faces that are opposite in the cube can share an edge in the net. This is the primary rule for identifying invalid nets.

[alert type="warning"]
**The Invalid Net Trap**: Not every arrangement of six squares is a valid cube net. There are exactly 11 distinct cube nets. Examiners frequently include invalid nets among the options. The easiest way to identify an invalid net is to check if any face would overlap with another after folding.
[/alert]

**The Rule of Three**:
In a valid cube net, any three faces that meet at a common vertex in the cube must form an L-shape, a T-shape, or a straight line of three in the net. If they form a cross or a zigzag, the net is invalid.

[flashcards title="Cube Net Validity Rules"]
| Rule | Application |
|------|-------------|
| No opposite faces share an edge | If two faces that are opposite in the cube touch in the net, the net is invalid |
| No overlap after folding | If any face would cover another, the net is invalid |
| The L-shape rule | Three faces meeting at a vertex form an L-shape in the net |
| The 11 nets | There are exactly 11 unique cube nets |
[/flashcards]

[example]
**Question**: Which of the following nets can be folded into a cube?
**Solution**:
1.  **Rule 1**: Check for opposite faces sharing an edge. If any two faces that are opposite in the cube touch in the net, the net is invalid.
2.  **Rule 2**: Check for overlap. If folding causes any face to cover another, the net is invalid.
3.  **Rule 3**: Verify the L-shape rule. If three faces meeting at a vertex do not form an L-shape, the net is invalid.
4.  **Result**: Only the net with all three rules satisfied is valid.
[/example]

---

### Section 2 | The Closed Dice: Decoding Opposite and Adjacent Faces

A closed die is a cube with marked faces. You are given multiple views of the same die (different rotations) and must determine which faces are opposite or adjacent. The core principle is that *no two opposite faces appear in the same view*.

**The Opposite Face Rule**:
If two faces appear together in any view, they are *adjacent* (not opposite). If two faces never appear together in any view, they are *opposite*.

[alert type="success"]
**The Shared Edge Shortcut**: If two faces share a common edge in any view, they are adjacent. If they share a common vertex but not an edge, they are also adjacent (they meet at a corner). Only faces that are never seen together in any view can be opposite.
[/alert]

**The Algorithm for Opposite Faces**:
1.  **List all views**: Each view shows three faces.
2.  **Identify adjacent pairs**: In each view, all three faces are mutually adjacent. No two of them can be opposite.
3.  **Eliminate**: Remove all adjacent pairs from consideration.
4.  **The remaining pairs**: The only pairs left are opposite.

[example]
**Question**: Three views of a die are given:
- View 1: A, B, C
- View 2: A, D, E
- View 3: B, D, F

What is opposite to A?
**Solution**:
1.  **List adjacent pairs**:
    - View 1: A-B, A-C, B-C are adjacent.
    - View 2: A-D, A-E, D-E are adjacent.
    - View 3: B-D, B-F, D-F are adjacent.
2.  **Eliminate adjacent pairs**:
    - A is adjacent to B, C, D, E. The only face not adjacent to A is F.
3.  **Result**: F is opposite to A.
[/example]

---

### Section 3 | Number of Cubes in a Stack: The Volume Illusion

This archetype presents a 3D stack of cubes (often shown as a 2D projection) and asks for the total number of cubes. The challenge is that some cubes are hidden behind others. You must infer their presence from the visible structure.

**The Algorithm**:
1.  **Identify layers**: Break the stack into horizontal layers.
2.  **Count visible cubes**: In each layer, count the cubes that are visible from the top.
3.  **Infer hidden cubes**: If a cube is present in a lower layer, all cubes above it must also be present (to support the structure). This constrains the possible configurations.

[alert type="warning"]
**The Unsupported Cube Trap**: A cube cannot float. If a cube is visible in a higher layer, there must be a cube directly below it. This is the key constraint for inferring hidden cubes.
[/alert]

**Step-by-step protocol for cube counting**:
1.  **Draw the grid**: Represent the top view as a grid. Each cell corresponds to a vertical column.
2.  **Determine column heights**: Use the side views to infer how many cubes are in each column.
3.  **Sum the heights**: The total number of cubes is the sum of all column heights.

[example]
**Question**: A stack of cubes is shown in three views: top, front, and side. The top view shows a 3x3 grid with numbers indicating the number of cubes in each column. How many cubes are there?
**Solution**:
1.  **Top view**: A 3x3 grid with numbers (e.g., 2, 1, 0, 3, 2, 1, 0, 1, 2).
2.  **Sum**: 2+1+0+3+2+1+0+1+2 = 12.
3.  **Result**: There are 12 cubes.
[/example]

---

### Section 4 | Painted Cubes: The Counting of Colored Faces

This is the most mathematically rigorous archetype. A large cube is painted on the outside and then cut into smaller cubes. You must count how many of the smaller cubes have a certain number of painted faces.

**The Formulas** (for a cube of side \(n\) cut into \(n^3\) smaller cubes):
- **0 painted faces**: \((n-2)^3\)
- **1 painted face**: \(6(n-2)^2\)
- **2 painted faces**: \(12(n-2)\)
- **3 painted faces**: 8 (the corners)

[alert type="success"]
**The Corner-Edge-Face Framework**: Every small cube falls into one of four categories based on its location:
- Corners: 3 painted faces.
- Edges (non-corners): 2 painted faces.
- Faces (non-edges): 1 painted face.
- Interior: 0 painted faces.
[/alert]

[example]
**Question**: A cube of side 5 cm is painted red and cut into 1 cm cubes. How many cubes have exactly 2 painted faces?
**Solution**:
1.  \(n = 5\).
2.  Apply the formula: \(12(n-2) = 12(5-2) = 36\).
3.  **Result**: 36 cubes have exactly 2 painted faces.
[/example]

---

## Cognitive Biases in Cubes & Dices

1.  **The Rotation Confusion**: When rotating a die, students often lose track of which faces are opposite. The solution is to use a fixed reference: choose one face as the top and track the others.
2.  **The Hidden Cube Overlook**: In cube stacks, students often forget that a cube must be supported from below. If a cube is visible in the top layer, there must be cubes beneath it.
3.  **The Net Validity Assumption**: Students assume any six-square pattern is a valid cube net. This is false. Only 11 patterns work. Learn to identify invalid nets by checking for overlapping faces.

[quiz title="Chapter 29: Cubes & Dices Mastery Quiz"]
Q: Three views of a die are given. View 1 shows 1, 2, 3. View 2 shows 1, 4, 5. View 3 shows 2, 4, 6. What is opposite to 1?
- A) 6 (Correct: 1 is adjacent to 2,3,4,5. The only face not adjacent is 6.)
- B) 4
- C) 5
- D) 3

Q: A cube of side 6 cm is painted blue and cut into 1 cm cubes. How many cubes have exactly 1 painted face?
- A) 96 (Correct: 6(n-2)^2 = 6(4)^2 = 96)
- B) 64
- C) 48
- D) 24

Q: Which of the following nets can be folded into a cube?
- A) A cross shape of 6 squares
- B) A straight line of 6 squares
- C) An L-shape with 6 squares (Correct: Only certain configurations are valid. A straight line of 6 squares cannot fold into a cube because the ends would overlap. A cross shape of 6 squares is a valid net. An L-shape with 6 squares is invalid because it would cause overlap. The correct answer is A.)
- D) A zigzag of 6 squares

Q: A stack of cubes has 3 layers. The top view shows a 2x2 grid with numbers 2, 3, 1, 2. How many cubes are there?
- A) 8 (Correct: Sum = 2+3+1+2 = 8)
- B) 10
- C) 12
- D) 16
[/quiz]