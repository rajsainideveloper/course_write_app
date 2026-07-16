# Dot Situation

> The cartography of intersections: decoding the precise placement of dots within overlapping regions of complex figures. This is not about counting dots; it is about identifying the unique combination of regions that each dot occupies.

## Chapter 1: The Foundations of Dot Situation Logic

### Section 1 | What Is a Dot Situation?

A dot situation presents a complex figure composed of multiple overlapping shapes (triangles, circles, squares, etc.) with one or more dots placed in specific regions. You are then given options showing similar figures with dots, and you must identify the figure that reproduces the exact same pattern of region memberships for each dot.

**The Core Principle**: Each dot occupies a unique combination of regions defined by whether it lies inside or outside each shape. Two dots are equivalent if they lie in the exact same combination of regions. A dot situation is solved by matching these region memberships exactly.

**The Cognitive Shift**: Do not think of dots as points on a page. Think of them as vectors of membership across the set of shapes. The question is about matching these vectors, not about visual similarity of dot placement.

[alert type="danger"]
**The Shape Confusion Trap**: Students often try to match dot positions by visual proximity rather than by region membership. A dot near a boundary may belong to a different set of regions than a dot slightly farther away. Always determine exactly which shapes contain each dot.
[/alert]

### Section 2 | The Region Membership Framework

| Component | Description | Example |
| :--- | :--- | :--- |
| Shape 1 | Circle | Dot inside/outside |
| Shape 2 | Triangle | Dot inside/outside |
| Shape 3 | Square | Dot inside/outside |
| Region | Unique combination of memberships | Inside Circle, Inside Triangle, Outside Square |

Each dot must be assigned a membership vector: (Circle? Triangle? Square? ...). Two dots must have identical vectors to be considered matching.

## Chapter 2: Analyzing Dot Placements

### Section 1 | The Membership Vector Method

For each dot in the question figure:
1. **List all shapes** in the figure.
2. **For each shape**, determine if the dot is inside or outside.
3. **Record the vector** (e.g., In-In-Out means inside first shape, inside second shape, outside third shape).
4. **Repeat** for all dots.
5. **Compare** with the options: find the option where each dot has the same vector.

**Example**: A figure with a circle (C), triangle (T), and square (S). A dot is at the intersection of the circle and triangle, but outside the square. Its vector is (C-In, T-In, S-Out).

### Section 2 | The Common Region Identification

A "common region" is the area where two or more shapes overlap. A dot placed in a common region belongs to all those shapes.

**The Trap**: Some dots may be placed in a region that is common to several shapes, but near a boundary that might suggest it is outside one of them. Always trace the dot precisely to see which shapes' boundaries enclose it.

[alert type="success"]
**The Point-in-Polygon Test**: To determine if a dot is inside a shape, imagine drawing a ray from the dot to infinity. If it crosses the shape's boundary an odd number of times, the dot is inside; even means outside. This is a reliable mental test.
[/alert]

[flashcards title="Membership Vector Recording"]
| Step | Action | Example |
| :--- | :--- | :--- |
| 1 | List all shapes | Circle, Triangle, Square |
| 2 | Check dot 1 | Inside Circle, Inside Triangle, Outside Square |
| 3 | Record vector | (In, In, Out) |
| 4 | Check dot 2 | Outside Circle, Inside Triangle, Inside Square |
| 5 | Record vector | (Out, In, In) |
[/flashcards]

## Chapter 3: Common Region of Figures

### Section 1 | Overlapping Shapes and Common Regions

When shapes overlap, they create multiple regions. Each region corresponds to a unique combination of memberships.

**Example**: Two overlapping circles (A and B) create three regions:
1. Only A (Inside A, Outside B)
2. Only B (Inside B, Outside A)
3. Intersection (Inside A, Inside B)

With three overlapping shapes, there can be up to 7 distinct regions (excluding outside all).

### Section 2 | Matching Dot Situations

To match a dot situation between two figures:
1. **Identify the membership vector** for each dot in the question figure.
2. **Identify the membership vector** for each dot in each option.
3. **Find the option** where all dots match the question's vectors, possibly with rotations or reflections.

**The Trap**: Some options may have the same shapes but with different orientations. The membership vectors must match regardless of rotation—a dot inside a triangle is still inside even if the triangle is rotated.

[alert type="info"]
**The Rotation Invariance**: Rotating the entire figure does not change the membership of any dot. If an option is a rotated version of the correct answer, it is still correct. Always check for rotations.
[/alert]

[flashcards title="Common Region Patterns"]
| Number of Shapes | Distinct Non-Empty Regions | Example |
| :--- | :--- | :--- |
| 2 | 3 | A only, B only, Intersection |
| 3 | 7 | A only, B only, C only, AB, AC, BC, ABC |
| 4 | 15 | All combinations |
[/flashcards]

## Chapter 4: Intersection of Shapes

### Section 1 | Identifying Intersection Points

An intersection point is where two or more shapes' boundaries cross. Dots placed at intersections belong to all shapes that intersect there.

**Example**: A circle and a square intersect at two points. A dot placed at an intersection point is inside both the circle and the square.

### Section 2 | The Boundary Cases

Dots placed *on* a boundary are considered to be inside the shape for the purpose of dot situation questions? Usually, the exam avoids placing dots exactly on boundaries. If a dot appears on a boundary, it is assumed to be inside the shape, but this is rare.

[alert type="warning"]
**The Boundary Ambiguity**: In some exams, a dot on the boundary may be considered inside or outside depending on the convention. Always assume a dot is inside the shape if it touches the boundary, unless the question specifies otherwise.
[/alert]

[flashcards title="Intersection Membership Rules"]
| Dot Position | Membership |
| :--- | :--- |
| Inside a shape | Belongs to that shape |
| Outside a shape | Does not belong to that shape |
| On the boundary | Usually considered inside |
| At intersection of boundaries | Belongs to all intersecting shapes |
[/flashcards]

[example]
**Question:** In a figure with a circle, a triangle, and a square overlapping, dot X is inside the circle and triangle but outside the square. Which of the following options has a dot in the same region?
**Solution:**
Step 1: Identify dot X's vector: (Circle: In, Triangle: In, Square: Out).
Step 2: Check each option for a dot with the same vector.
Step 3: Look for the region that is inside the circle and triangle but not the square. This is a specific region of overlap between circle and triangle that is outside the square.
Step 4: Select the option that has a dot in that exact region.
**Final Answer:** The option with a dot in the circle-triangle overlap outside the square.
[/example]

[quiz title="Dot Situation Mastery Quiz"]
Q: In a figure with two overlapping circles (A and B), a dot is in the intersection. What is its membership vector?
- A) (In A, In B) (Correct)
- B) (In A, Out B)
- C) (Out A, In B)
- D) (Out A, Out B)

Q: A dot is inside a square, outside a circle, and inside a triangle. Which vector represents it?
- A) (In Square, Out Circle, In Triangle) (Correct)
- B) (Out Square, In Circle, In Triangle)
- C) (In Square, In Circle, Out Triangle)
- D) (In Square, Out Circle, Out Triangle)

Q: Two overlapping circles and a square. A dot is in the intersection of the circles but outside the square. What is its vector?
- A) (In C1, In C2, Out S) (Correct)
- B) (In C1, Out C2, In S)
- C) (Out C1, In C2, In S)
- D) (In C1, In C2, In S)

Q: A dot is placed at the intersection of three shapes. How many shapes does it belong to?
- A) 1
- B) 2
- C) 3 (Correct: At the intersection of all three, it belongs to all.)
- D) 0

Q: Which of the following is NOT a valid region in a two-shape overlap?
- A) Only Shape A
- B) Only Shape B
- C) Intersection of A and B
- D) Intersection of A and B and C (Correct: With only two shapes, there is no region for C.)
[/quiz]