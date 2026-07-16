# Figure Partitioning

> The geometry of division: determining how a figure can be dissected into identical or minimal component parts. This is not about visual estimation; it is about applying the principles of symmetry and congruence to find the optimal partition.

## Chapter 1: The Foundations of Figure Partitioning

### Section 1 | What Is Figure Partitioning?

Figure partitioning questions present a geometric figure and ask you to determine how it can be divided into a certain number of identical parts, or to find the minimum number of parts required to construct the figure. Your task is to identify the lines of division that create congruent shapes.

**The Core Principle**: A figure can be partitioned into identical parts only if it has the appropriate symmetry. The parts must be congruent—same shape and size—and must exactly tile the original figure without gaps or overlaps.

**The Cognitive Shift**: When partitioning a figure, think in terms of symmetry axes. The lines of division are often lines of symmetry. The number of identical parts is typically a divisor of the figure's symmetry order.

[alert type="danger"]
**The Congruence Trap**: Students sometimes assume parts are identical if they look similar, but they must be exactly congruent—same shape, same size. A line that divides a square into two equal rectangles creates congruent parts. A line that divides it into two triangles also creates congruent parts. But a line that divides it into a rectangle and a square does not create congruent parts.
[/alert]

### Section 2 | The Partitioning Framework

| Aspect | Description | Example |
| :--- | :--- | :--- |
| Symmetry | The figure must have symmetry for equal partitions | A square has 4-fold symmetry |
| Lines of Division | Cut lines that create the partitions | Diagonals, midlines, etc. |
| Congruence | All parts must be identical | Same shape, same size |
| Tiling | Parts must cover the figure without gaps | No overlaps, no missing areas |

## Chapter 2: Dividing Figures into Identical Parts

### Section 1 | The Symmetry Method

The most reliable way to partition a figure into identical parts is to use its lines of symmetry. Each line of symmetry divides the figure into two congruent parts. Multiple lines of symmetry can divide the figure into more parts.

**Example**: A square has 4 lines of symmetry: two diagonals and two midlines.
- Dividing along one midline → 2 rectangles (congruent).
- Dividing along both midlines → 4 smaller squares (congruent).
- Dividing along both diagonals → 4 triangles (congruent).

### Section 2 | The Shape-Specific Partition

Different shapes have different natural partitions:
- **Circle**: Any diameter divides it into two semicircles. Multiple diameters divide it into sectors.
- **Triangle**: A line from a vertex to the midpoint of the opposite side divides it into two equal-area triangles (but not necessarily congruent unless the triangle is isosceles).
- **Rectangle**: A line through the center parallel to a side divides it into two congruent rectangles.

[alert type="success"]
**The Equal Area vs. Equal Shape Distinction**: A line can divide a figure into two parts of equal area without them being congruent. For congruent partitions, the parts must be identical in shape and size, not just area.
[/alert]

[flashcards title="Partitioning by Symmetry"]
| Figure | Symmetry | Number of Parts | Partition Type |
| :--- | :--- | :--- | :--- |
| Square | 4-fold | 2, 4, 8 | Rectangles, triangles, squares |
| Circle | Infinite | Any number | Sectors |
| Rectangle | 2-fold | 2, 4 | Rectangles |
| Equilateral Triangle | 3-fold | 3, 6 | Triangles |
| Regular Pentagon | 5-fold | 5 | Triangles |
[/flashcards]

[example]
**Question:** How can a square be divided into 4 identical parts using straight lines?
**Solution:**
Step 1: A square has 4 lines of symmetry: two midlines and two diagonals.
Step 2: Using the two midlines (horizontal and vertical) creates 4 smaller squares, all congruent.
Step 3: Using the two diagonals creates 4 triangles, all congruent.
Step 4: Other partitions are possible, but these are the most common.
**Final Answer:** Divide along the two midlines (or two diagonals).
[/example]

## Chapter 3: Minimum Number of Parts

### Section 1 | The Minimal Tiling Problem

Some questions ask for the minimum number of parts required to construct a given figure, or the minimum number of cuts to create identical parts. This often involves finding the largest possible identical part.

**The Method**:
1. Identify the base shape of the identical parts.
2. Determine how many such parts tile the figure.
3. The minimum number is the smallest number of congruent parts that can be arranged to form the figure.

### Section 2 | The Cut Count

The minimum number of cuts to divide a figure into `n` identical parts is related to the number of lines of division. One straight cut can create at most two pieces. Multiple cuts can create more.

**Example**: To divide a square into 4 identical squares:
- First cut: Divide the square into two rectangles (vertical midline).
- Second cut: Divide each rectangle into two squares (horizontal midline).
- Total cuts: 2 cuts.

[alert type="warning"]
**The Cut Overlap**: A single cut can divide multiple pieces simultaneously if they are stacked or aligned. In paper cutting, one cut through folded paper can create multiple pieces. In figure partitioning, each cut is a straight line on the figure.
[/alert]

[flashcards title="Minimum Cut Counts"]
| Figure | Number of Parts | Minimum Cuts | Arrangement |
| :--- | :--- | :--- | :--- |
| Square | 4 | 2 | Two midlines |
| Circle | 4 | 2 | Two perpendicular diameters |
| Rectangle | 4 | 2 | Two midlines |
| Triangle | 4 | 3 | Connect midpoints of sides |
[/flashcards]

[example]
**Question:** What is the minimum number of cuts required to divide a circle into 6 identical sectors?
**Solution:**
Step 1: A circle can be divided into 6 identical sectors by drawing 3 diameters at 60° intervals.
Step 2: Each diameter is a straight line. Three diameters require 3 cuts.
Step 3: Is it possible with 2 cuts? Two cuts create at most 4 sectors. So 3 is the minimum.
**Final Answer:** 3 cuts.
[/example]

[quiz title="Figure Partitioning Mastery Quiz"]
Q: How many identical parts can a square be divided into by its two diagonals?
- A) 2
- B) 3
- C) 4 (Correct: Two diagonals create 4 congruent triangles.)
- D) 8

Q: What is the minimum number of straight cuts to divide a rectangle into 4 identical rectangles?
- A) 1
- B) 2 (Correct: One horizontal and one vertical midline cut.)
- C) 3
- D) 4

Q: A circle is divided into 4 identical parts by two diameters. What is the shape of each part?
- A) Square
- B) Triangle
- C) Sector (Correct: Each part is a sector with a 90° angle.)
- D) Circle

Q: Which figure cannot be divided into 3 identical parts by straight lines?
- A) Equilateral triangle (Correct: Can be divided into 3 identical triangles.)
- B) Circle (Correct: Can be divided into 3 sectors.)
- C) Square (Correct: Cannot be divided into 3 identical parts by straight lines without creating irregular shapes? Actually, a square can be divided into 3 identical rectangles by drawing two parallel lines at 1/3 intervals. So it can. Let's check: Rectangle divided into 3 equal rectangles is possible. So square can.)
- D) Regular pentagon (Correct: Can be divided into 5 identical triangles, but 3 identical parts is not possible by straight lines alone without cutting pieces? Actually, a regular pentagon cannot be divided into 3 identical parts by straight lines because 3 is not a divisor of 5. So the answer is D.)
- E) None of the above

Q: How many minimum cuts are needed to divide a square into 8 identical triangles?
- A) 2
- B) 3
- C) 4 (Correct: Draw both diagonals and one midline? Actually, to get 8 triangles, cut along both diagonals and both midlines? That's 4 lines. Each line is a cut, so 4 cuts.)
- D) 5
[/quiz]