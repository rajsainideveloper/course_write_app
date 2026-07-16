# Counting of Figures

> The combinatorics of geometry: systematically enumerating every shape hidden within a complex arrangement of lines. This is not about visual scanning alone; it is about applying combinatorial formulas to avoid missing a single figure.

## Chapter 1: The Foundations of Counting Figures

### Section 1 | What Is Counting of Figures?

Counting of figures questions present a complex geometric figure (made of intersecting lines, triangles, squares, etc.) and ask you to count the total number of a specific type of figure (e.g., triangles, squares, rectangles) contained within it. The challenge is to count systematically without missing any.

**The Core Principle**: Every figure is defined by a unique set of vertices. Counting figures is equivalent to counting all valid subsets of vertices that form the desired shape.

**The Cognitive Shift**: Do not rely on visual scanning alone. Use systematic methods: count by size, by position, or by using combinatorial formulas. Visual scanning leads to missed or double-counted figures.

[alert type="danger"]
**The Overlap Trap**: Figures can overlap and share sides. When counting by size, ensure that each figure is counted exactly once. A common error is counting the same triangle twice because it appears in two different sizes.
[/alert]

### Section 2 | The Counting Methodology

| Step | Action | Purpose |
| :--- | :--- | :--- |
| 1 | Identify the smallest units | Count the smallest shapes first |
| 2 | Combine units | Count shapes formed by 2, 3, 4, etc., units |
| 3 | Use formulas for regular patterns | Apply n(n+1)/2 for rows and columns |
| 4 | Check totals | Sum all categories; verify with total count |

## Chapter 2: Number of Triangles

### Section 1 | The Triangle Counting Formula

For a triangle divided into `n` equal parts by lines from the apex to the base, or by a grid of lines, formulas simplify counting.

**Formula for a triangle divided by lines from apex to base** (n lines, creating n+1 sections):
=Total Triangles = n(n+1)(n+2)/6=

**Example**: A triangle with 3 lines from apex to base (dividing it into 4 sections):
- Total = 3(4)(5)/6 = 60/6 = 10 triangles.

### Section 2 | Counting Triangles in a Grid

For a large triangle composed of smaller triangles in a grid (like a triangular grid), count by size:
1. **Size 1**: Count all the smallest triangles.
2. **Size 2**: Count triangles made of 4 smallest triangles.
3. **Size 3**: Count triangles made of 9 smallest triangles.
4. **Continue until the largest triangle**.

**Example**: A triangular grid of side length 3 (3 small triangles per side):
- Size 1: 9 triangles.
- Size 2: 3 triangles (pointing up and down? Actually, in a triangular grid, there are both upward and downward pointing triangles).
- Size 3: 1 triangle (the whole).
- Total = 9 + 3 + 1 = 13.

[alert type="success"]
**The Up-Down Rule**: In a triangular grid, count upward-pointing and downward-pointing triangles separately. The downward-pointing triangles are often smaller and fewer.
[/alert]

[flashcards title="Triangle Counting Formulas"]
| Figure Type | Formula | Example |
| :--- | :--- | :--- |
| Triangle with n lines from apex | n(n+1)(n+2)/6 | n=3 → 10 |
| Triangular grid of side n (upward only) | n(n+1)(n+2)/6 | n=3 → 10 |
| Triangular grid (upward + downward) | For n=3: 13, n=4: 27 | n=4 → 27? Let's check: For n=4, upward triangles = 4(5)(6)/6 = 20; downward triangles = n(n+1)(n-1)/6? For n=4, downward = 4(5)(3)/6 = 10; total = 30? The exact formula is complex, so use the size-counting method. |
[/flashcards]

[example]
**Question:** Count the number of triangles in the figure (a triangle divided by 2 lines from the apex to the base).
**Solution:**
Step 1: n = 2 (2 lines divide the triangle into 3 sections).
Step 2: Use the formula: n(n+1)(n+2)/6 = 2(3)(4)/6 = 24/6 = 4.
Step 3: Let's verify: Small triangles: 3; Larger triangles: 1 (the whole); Total = 3 + 1 = 4.
**Final Answer:** 4 triangles.
[/example]

## Chapter 3: Number of Squares and Rectangles

### Section 1 | The Square Counting Formula

For an `n × n` grid of squares, the total number of squares is the sum of squares of integers from 1 to n:

=Total Squares = n(n+1)(2n+1)/6=

**Example**: A 3×3 grid:
- 1×1 squares: 9
- 2×2 squares: 4
- 3×3 squares: 1
- Total = 9 + 4 + 1 = 14
- Formula: 3(4)(7)/6 = 84/6 = 14.

### Section 2 | The Rectangle Counting Formula

For an `m × n` grid of squares, the total number of rectangles (including squares) is:

=Total Rectangles = [m(m+1)/2] × [n(n+1)/2]=

**Example**: A 2×3 grid:
- m=2, n=3.
- m(m+1)/2 = 2(3)/2 = 3.
- n(n+1)/2 = 3(4)/2 = 6.
- Total = 3 × 6 = 18 rectangles.

[alert type="info"]
**Squares are Rectangles**: The rectangle formula counts all rectangles, including squares. If you need only non-square rectangles, subtract the number of squares.
[/alert]

[flashcards title="Square and Rectangle Formulas"]
| Figure Type | Formula | Example |
| :--- | :--- | :--- |
| Squares in n×n grid | n(n+1)(2n+1)/6 | n=3 → 14 |
| Rectangles in m×n grid | [m(m+1)/2] × [n(n+1)/2] | 2×3 → 18 |
| Non-square rectangles | Rectangles - Squares | 18 - 14 = 4 (for 3×3 grid? Actually, for a 3×3 grid, rectangles = [3(4)/2]² = 6² = 36; squares = 14; non-square rectangles = 22) |
[/flashcards]

[example]
**Question:** Count the number of squares in a 4×4 grid.
**Solution:**
Step 1: n = 4.
Step 2: Use the formula: n(n+1)(2n+1)/6 = 4(5)(9)/6 = 180/6 = 30.
Step 3: Verify: 1×1: 16, 2×2: 9, 3×3: 4, 4×4: 1; Total = 16+9+4+1 = 30.
**Final Answer:** 30 squares.
[/example]

## Chapter 4: Number of Parallelograms

### Section 1 | The Parallelogram Counting Formula

For a grid of `m` horizontal lines and `n` vertical lines (or diagonal lines), the number of parallelograms is determined by choosing two lines from each set:

=Total Parallelograms = C(m, 2) × C(n, 2)=

Where `C(m, 2)` is the number of ways to choose 2 lines from m.

**Example**: A grid with 4 horizontal and 4 vertical lines:
- C(4,2) = 6.
- C(4,2) = 6.
- Total = 6 × 6 = 36 parallelograms.

### Section 2 | Counting Parallelograms in a Triangular Grid

When counting parallelograms in a grid of diagonal lines (e.g., a rhombus grid), the same formula applies: choose two lines from each direction.

[alert type="success"]
**The Two-Line Rule**: Any parallelogram is defined by two lines from each of two non-parallel directions. Count the number of lines in each direction, then choose 2 from each.
[/alert]

[flashcards title="Parallelogram Counting"]
| Grid Type | Formula | Example |
| :--- | :--- | :--- |
| m horizontal, n vertical lines | C(m,2) × C(n,2) | 4×4 → 36 |
| Rhombus grid | Choose two lines from each direction | Same principle |
[/flashcards]

[example]
**Question:** A grid has 5 horizontal lines and 5 vertical lines. How many parallelograms are there?
**Solution:**
Step 1: m = 5, n = 5.
Step 2: C(5,2) = 10.
Step 3: Total = 10 × 10 = 100.
**Final Answer:** 100 parallelograms.
[/example]

## Chapter 5: Number of Straight Lines

### Section 1 | Counting Lines in a Figure

Counting the number of straight lines in a figure requires careful observation. Lines may be continuous or segmented by intersections.

**The Method**:
1. Count all distinct straight line segments in the figure.
2. If a line is broken by an intersection, it may still be considered a single line if it is collinear.
3. Count each distinct straight line once.

**Example**: A square with both diagonals drawn.
- Outer square: 4 lines.
- Diagonals: 2 lines.
- Total = 6 straight lines.

### Section 2 | The Collinearity Check

If multiple segments lie on the same straight line, they should be counted as one line if they are continuous.

**Example**: A 3×3 grid of squares (4 horizontal lines and 4 vertical lines):
- Horizontal lines: 4.
- Vertical lines: 4.
- Total = 8 straight lines.

[alert type="warning"]
**The Intersection Effect**: Intersections do not create new straight lines; they only subdivide existing lines. Count based on the underlying straight line, not the segments.
[/alert]

[flashcards title="Line Counting Methods"]
| Figure Type | Counting Method | Example |
| :--- | :--- | :--- |
| Simple polygon | Count distinct sides | Square: 4 lines |
| With diagonals | Add diagonals | Square with diagonals: 6 lines |
| Grid | Count horizontal and vertical lines separately | 3×3 grid: 4 horizontal + 4 vertical = 8 lines |
[/flashcards]

[example]
**Question:** How many straight lines are there in a figure of a pentagon with all diagonals drawn?
**Solution:**
Step 1: A pentagon has 5 sides.
Step 2: A pentagon has 5 diagonals (from each vertex to non-adjacent vertices).
Step 3: Total straight lines = 5 + 5 = 10.
**Final Answer:** 10 straight lines.
[/example]

[quiz title="Counting of Figures Mastery Quiz"]
Q: How many triangles are in a triangle divided by 4 lines from the apex to the base?
- A) 10
- B) 15
- C) 20 (Correct: n=4 → 4(5)(6)/6 = 120/6 = 20)
- D) 25

Q: How many squares are in a 5×5 grid?
- A) 30
- B) 55 (Correct: 5(6)(11)/6 = 330/6 = 55)
- C) 25
- D) 100

Q: How many rectangles (including squares) are in a 3×4 grid?
- A) 60 (Correct: 3(4)/2 = 6; 4(5)/2 = 10; 6×10 = 60)
- B) 30
- C) 12
- D) 120

Q: How many parallelograms are in a grid with 6 horizontal and 6 vertical lines?
- A) 225 (Correct: C(6,2)=15; 15×15=225)
- B) 30
- C) 36
- D) 100

Q: How many straight lines are in a square with both diagonals and the midlines (horizontal and vertical through the center)?
- A) 4
- B) 6
- C) 8 (Correct: 4 sides + 2 diagonals + 2 midlines = 8)
- D) 10
[/quiz]