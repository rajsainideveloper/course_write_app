# Paper Cutting (Counting)

> The arithmetic of separation: determining how many fragments result from a series of cuts, and understanding the symmetrical patterns that emerge. This is not about shapes; it is about counting with precision.

## Chapter 1: The Foundations of Paper Cutting Counts

### Section 1 | What Is Paper Cutting Counting?

Paper cutting counting questions present a scenario where a piece of paper is cut in specific ways (straight cuts, folding, etc.) and ask for the number of resulting pieces. The logic is purely combinatorial—each cut increases the number of pieces in a predictable way.

**The Core Principle**: A straight cut across a piece increases the number of pieces by the number of separate pieces it passes through. A cut that does not go from edge to edge creates a partial cut that may not separate pieces.

**The Cognitive Shift**: Do not try to visualize the final arrangement of pieces. Instead, track the number of pieces as each cut is made. The order of cuts matters.

[alert type="danger"]
**The Single Cut Increment**: The most common error is assuming each cut adds exactly one piece. A cut that passes through multiple existing pieces adds multiple pieces—equal to the number of pieces it intersects. Always verify how many pieces the cut traverses.
[/alert]

### Section 2 | The Fundamental Counting Rule

| Number of Pieces Before Cut (P) | Pieces Intersected by Cut (I) | Pieces After Cut |
| :--- | :--- | :--- |
| P | I | P + I |

The increase is equal to the number of separate pieces the cut passes through. A cut along the edge or that does not cross any piece adds 0.

## Chapter 2: Number of Pieces After Cutting

### Section 1 | Straight Cuts Without Folding

When a rectangular paper is cut by straight lines, the number of pieces can be determined by counting intersections.

**Rule of Thumb**: With `n` straight cuts, the maximum number of pieces is:

=Maximum Pieces = n(n+1)/2 + 1=

- 1 cut → 2 pieces
- 2 cuts → 4 pieces (if they cross)
- 3 cuts → 7 pieces (if each cut intersects all previous cuts)
- 4 cuts → 11 pieces

**Example**: 3 straight cuts on a rectangular paper, all crossing each other, yield 7 pieces.

### Section 2 | Cuts with Folding

When a paper is folded before cutting, each cut can produce multiple pieces simultaneously.

**The Layer Effect**: If a paper is folded into `L` layers, one cut through all layers creates `L` cuts on the unfolded paper.

**Example**: A paper folded in half (2 layers) and cut once creates 2 cuts when unfolded. If the cut goes from edge to edge, it can create 4 pieces? Let's check: A paper folded in half, cut along the center. When unfolded, the cut appears as two parallel cuts, which can divide the paper into 3 pieces (if the cuts are parallel and go across). So the number of pieces depends on the cut's position.

[alert type="warning"]
**The Fold Multiplication**: Folding multiplies the number of cuts but does not necessarily multiply the number of pieces in the same way. The final piece count depends on how the unfolded cuts intersect.
[/alert]

[flashcards title="Maximum Pieces with Straight Cuts"]
| Number of Cuts (n) | Maximum Pieces (n(n+1)/2 + 1) |
| :--- | :--- |
| 1 | 2 |
| 2 | 4 |
| 3 | 7 |
| 4 | 11 |
| 5 | 16 |
| 6 | 22 |
[/flashcards]

[example]
**Question:** A rectangular paper is folded in half twice (quarter fold). One straight cut is made from the folded edge to the open edges. How many pieces result when unfolded?
**Solution:**
Step 1: Determine the number of layers. Quarter fold → 4 layers.
Step 2: A single cut through 4 layers creates 4 cuts on the unfolded paper.
Step 3: The positions of these cuts depend on the fold lines. If the cut is made from the folded corner to the opposite corner, it creates 4 diagonal cuts that may intersect.
Step 4: The number of pieces depends on the arrangement. If the cuts do not intersect, they may create up to 5 pieces.
Step 5: Without more details, we cannot give a single number. The exam will provide enough information to determine the exact count.
**Final Answer:** This requires specific details; the approach is to unfold and count.
[/example]

## Chapter 3: Symmetrical Cuts

### Section 1 | Symmetry in Cutting

When cuts are made on a folded paper, the resulting cuts on the unfolded paper are symmetrical about the fold lines. This symmetry can help determine the number of pieces.

**The Symmetry Rule**: If a paper is folded and cut, the unfolded pattern always has symmetry about the fold lines. The number of pieces is related to the number of cuts and their symmetry.

**Example**: A paper folded in half vertically, with a cut along the center line. When unfolded, there is one continuous cut down the center, dividing the paper into 2 pieces.

### Section 2 | Counting with Symmetry

To count pieces when cuts are symmetrical:
1. **Unfold the paper** mentally or on paper.
2. **Draw the cuts** reflected across the fold lines.
3. **Count the regions** formed by the cuts.

**The Trap**: Symmetrical cuts may appear to create more pieces than they actually do if cuts overlap. Always ensure cuts are counted as separate lines.

[alert type="success"]
**The Region Counting Method**: To find the number of pieces, draw the cuts on the unfolded paper. Then count the enclosed regions. Each region is a piece. This is the most reliable method.
[/alert]

[flashcards title="Symmetry Counting Principles"]
| Fold Type | Symmetry Axis | Cut Reflection Effect |
| :--- | :--- | :--- |
| Half (vertical) | Vertical | Left and right mirror |
| Half (horizontal) | Horizontal | Top and bottom mirror |
| Quarter | Both | All four quadrants mirror |
| Diagonal | Diagonal | Mirror across diagonal |
[/flashcards]

[example]
**Question:** A paper is folded in half vertically. A cut is made as shown (a triangular notch at the top edge of the folded paper). How many pieces result when unfolded?
**Solution:**
Step 1: The cut is on the folded paper at the top edge. It cuts through two layers (since it's a half fold).
Step 2: When unfolded, the cut appears as two notches: one on the top left and one on the top right, symmetric about the vertical center.
Step 3: These are notches, not cuts that go from edge to edge. They may not separate the paper into additional pieces; they only remove material.
Step 4: If the notch does not reach the bottom, the paper remains one piece (with two notches).
**Final Answer:** If the notch is only at the edge, it may still be one piece. If the cut goes all the way through, it divides the paper.
[/example]

[quiz title="Paper Cutting Counting Mastery Quiz"]
Q: A paper is cut by 3 straight lines, all crossing each other. What is the maximum number of pieces?
- A) 4
- B) 6
- C) 7 (Correct: n=3 → 3(3+1)/2 + 1 = 6 + 1 = 7)
- D) 8

Q: A paper is folded in half, and a straight cut is made from the folded edge to the open edge. How many pieces result?
- A) 1
- B) 2 (Correct: The cut goes from edge to edge, dividing the folded paper into two pieces. When unfolded, each layer is cut, resulting in 2 pieces.)
- C) 3
- D) 4

Q: A paper is folded in quarters, and a straight cut is made from one folded corner to the opposite folded corner. How many pieces result?
- A) 2
- B) 3
- C) 4 (Correct: A quarter fold has 4 layers. A diagonal cut from corner to corner will divide each layer, resulting in 4 pieces when unfolded.)
- D) 5

Q: How many straight cuts are needed to divide a paper into 16 pieces?
- A) 4
- B) 5 (Correct: With 5 cuts, max pieces = 5(6)/2 + 1 = 15 + 1 = 16)
- C) 6
- D) 7

Q: A paper is folded in half, then a cut is made along the folded edge. How many pieces result?
- A) 1 (Correct: A cut along the folded edge does not separate the paper; it just trims the edge. So 1 piece remains.)
- B) 2
- C) 3
- D) 4
[/quiz]