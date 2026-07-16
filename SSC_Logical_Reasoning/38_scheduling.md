# Scheduling

> The architecture of time: organizing people, events, and preferences across the dimensions of days, months, and hours. This is not about calendars; it is about resolving overlapping constraints through systematic elimination.

## Chapter 1: The Foundations of Scheduling Logic

### Section 1 | What Is a Scheduling Problem?

Scheduling problems present a set of entities (persons, events, tasks) that must be assigned to specific time slots—days of the week, months of the year, or hourly time slots. Each entity occupies one slot, and no two entities can occupy the same slot. Clues define relationships between entities and their assigned times.

**The Core Principle**: Every scheduling problem is a matching problem: assign each entity to a unique time slot such that all constraints are satisfied. The slots are fixed; the entities are distributed among them.

**The Cognitive Shift**: Think of the schedule as a row of boxes (one for each time slot). Each person or event must be placed in exactly one box. Clues eliminate possibilities and force placements.

[alert type="danger"]
**The Uniqueness Trap**: In scheduling problems, each slot is unique and each entity is unique. If a person is assigned to a slot, no one else can be assigned to that slot. This is the foundation of elimination logic.
[/alert]

### Section 2 | The Scheduling Framework

| Component | Description | Example |
| :--- | :--- | :--- |
| Entities | Items to be scheduled | Persons, events, tasks |
| Time Slots | Available positions | Days, months, hours |
| Constraints | Rules about placement | "A is before B" |
| Attributes | Additional properties | "A likes Monday" |

## Chapter 2: Days of Week Sorting

### Section 1 | The Seven-Day Framework

Day scheduling problems assign entities to the seven days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. The order is fixed and sequential.

**The Sequential Rule**: Clues use terms like "before," "after," "immediately before," "two days after," etc. These refer to the natural order of the week.

**The Drawing**: Draw a horizontal row with the seven days. Place entities as you deduce their positions.

### Section 2 | The Day Construction Algorithm

1. **Draw a row** with the seven days labeled.
2. **Place the most definite clue**: e.g., "A is on Monday" → place A on Monday.
3. **Place relative clues**: e.g., "B is three days after A" → count three days from A.
4. **Use elimination**: If a person cannot be on a certain day, note it.
5. **Check for uniqueness**: Each day has exactly one entity.

[alert type="success"]
**The Day Count**: When counting days, "three days after Monday" is Thursday (Monday + 3). "Two days before Friday" is Wednesday. Always count inclusively or exclusively as specified.
[/alert]

[flashcards title="Day Terms"]
| Term | Meaning | Example |
| :--- | :--- | :--- |
| Before/After | Relative position | A is before B |
| Immediately before/after | Adjacent days | A is immediately before B |
| Two days before/after | One day between | A is two days before B |
| Three days before/after | Two days between | A is three days before B |
| Between | Someone in the middle | A is between B and C |
[/flashcards]

[example]
**Question:** A, B, C, D, E, F, and G are scheduled for seven days of the week, starting Monday. A is on Tuesday. C is three days after A. D is immediately before B. E is on Friday. F is two days after D. What is the schedule?
**Solution:**
Step 1: A is Tuesday.
Step 2: C is three days after A → Tuesday + 3 = Friday. But E is on Friday. So C and E cannot both be on Friday. There's a conflict. Let's re-read: "C is three days after A" means if A is Tuesday, C is Friday. But E is also Friday. So the clues are inconsistent. Perhaps A is not Tuesday? The clue says A is on Tuesday, so C must be Friday, and E is Friday. This is impossible if each day has one person. So the question is flawed. Let's assume A is Monday instead. Then C is Thursday. E is Friday. D is immediately before B. F is two days after D. Let's solve: Monday: A. Tuesday: ?. Wednesday: ?. Thursday: C. Friday: E. Saturday: ?. Sunday: ?. D and B are adjacent with D before B. F is two days after D. So if D is Tuesday, F is Thursday (taken by C). If D is Wednesday, F is Friday (taken by E). If D is Saturday, F is Monday (taken by A). If D is Sunday, F is Tuesday. D cannot be Monday (A), Thursday (C), Friday (E). So D could be Saturday or Sunday. If D is Saturday, B is Sunday. Then F is Monday (taken by A). So not possible. If D is Sunday, B is Monday (taken by A). So not possible. Therefore, no solution. The clues are inconsistent.
**Final Answer:** The clues are inconsistent; no valid schedule exists.
[/example]

## Chapter 3: Months of Year Sorting

### Section 1 | The Twelve-Month Framework

Month scheduling problems assign entities to the twelve months of the year: January through December. The order is fixed and sequential.

**The Sequential Rule**: The same relative terms apply ("before," "after," "immediately before," etc.) based on the calendar order.

**The Drawing**: Draw a row with the twelve months. Place entities as you deduce their positions.

### Section 2 | The Month Construction Algorithm

The algorithm is identical to the day algorithm, but with 12 slots instead of 7. The increased number of slots makes the problem more complex, but the logic is the same.

[alert type="info"]
**The Month Count**: When counting months, "three months after January" is April. "Two months before December" is October.
[/alert]

[flashcards title="Month Terms"]
| Term | Meaning | Example |
| :--- | :--- | :--- |
| Before/After | Relative position | A is before B |
| Immediately before/after | Adjacent months | A is immediately before B |
| Two months before/after | One month between | A is two months before B |
| Three months before/after | Two months between | A is three months before B |
[/flashcards]

[example]
**Question:** A, B, C, and D are born in four different months: January, April, July, October. A is born before B. C is born after D. B is born in July. Who is born in January?
**Solution:**
Step 1: B is in July.
Step 2: A is before B → A is in January or April (before July).
Step 3: C is after D → D is before C.
Step 4: The months are January, April, July, October. B is July. A is before July → A is January or April.
Step 5: If A is January, then remaining: April and October for C and D. C is after D → D is April, C is October. Then A=January, D=April, B=July, C=October.
Step 6: If A is April, then remaining: January and October for C and D. C is after D → D is January, C is October. Then A=April, D=January, B=July, C=October.
Step 7: In both cases, January is either A or D. The question asks "Who is born in January?" It could be A or D. So we need more information to determine exactly.
**Final Answer:** Cannot be determined; could be A or D.
[/example]

## Chapter 4: Time Slots Allocation

### Section 1 | The Time Slot Framework

Time slot allocation assigns entities to specific hours of the day (e.g., 9 AM, 10 AM, 11 AM) or to specific time slots (e.g., Morning, Afternoon, Evening). The logic is identical to day and month scheduling, but with smaller sets.

**The Sequence**: Time slots are ordered sequentially. Terms like "before" and "after" refer to the chronological order.

### Section 2 | The Time Slot Construction Algorithm

The algorithm is the same as for days and months. The key is to treat each time slot as a unique position in a linear sequence.

[alert type="warning"]
**The AM-PM Distinction**: If time slots cross noon, ensure the order is correct (e.g., 9 AM, 10 AM, 11 AM, 12 PM, 1 PM, 2 PM). The sequence is continuous.
[/alert]

[flashcards title="Time Slot Terms"]
| Term | Meaning | Example |
| :--- | :--- | :--- |
| Before/After | Relative position | A is before B |
| Immediately before/after | Adjacent slots | A is immediately before B |
| Two slots before/after | One slot between | A is two slots before B |
| At a specific time | Exact assignment | A is at 10 AM |
[/flashcards]

[example]
**Question:** A, B, C, and D have appointments at 9 AM, 10 AM, 11 AM, and 12 PM. A is before B. C is immediately after D. B is at 11 AM. What is the schedule?
**Solution:**
Step 1: B is at 11 AM.
Step 2: A is before B → A is at 9 AM or 10 AM.
Step 3: C is immediately after D → D and C are adjacent, with D before C.
Step 4: Times: 9 AM, 10 AM, 11 AM, 12 PM. B at 11 AM. Remaining: 9 AM, 10 AM, 12 PM for A, C, D.
Step 5: If A is at 9 AM, remaining: 10 AM and 12 PM for C and D. C is immediately after D → D at 10 AM, C at 11 AM? But 11 is taken by B. So not possible.
Step 6: If A is at 10 AM, remaining: 9 AM and 12 PM for C and D. C is immediately after D → D at 9 AM, C at 10 AM (but 10 is taken by A). Not possible.
Step 7: Let's re-evaluate: D and C are adjacent. Possible adjacent pairs: (9,10), (10,11), (11,12). 11 is taken by B. So (10,11) and (11,12) are not possible. (9,10) is possible, with D at 9, C at 10. Then A is before B (11) → A could be 9 or 10. But 9 is D, 10 is C. So A has no place. Therefore, no solution.
**Final Answer:** The clues are inconsistent; no valid schedule exists.
[/example]

[quiz title="Scheduling Mastery Quiz"]
Q: A, B, C are scheduled on three consecutive days starting Monday. A is before B. C is after B. Who is on Wednesday?
- A) A
- B) B
- C) C (Correct: If A is before B, and C is after B, the order is A, B, C. Starting Monday, Monday=A, Tuesday=B, Wednesday=C.)
- D) Cannot be determined

Q: In a week, A is on Monday. B is two days after A. C is immediately before B. Who is on Wednesday?
- A) A
- B) B
- C) C (Correct: A=Monday, B=Wednesday (two days after Monday? Actually, Monday + 2 days = Wednesday. C is immediately before B → C=Tuesday. So Wednesday is B.)
- D) None

Q: A, B, C, D are born in four different months: January, March, June, September. A is born before B. C is born after D. B is born in June. Who is born in January?
- A) A (Correct: B=June. A before B → A=January or March. C after D. If A=January, then remaining: March, September for C and D. C after D → D=March, C=September. Works. If A=March, then remaining: January, September for C and D. C after D → D=January, C=September. Then A=March, D=January, B=June, C=September. So January could be A or D. But the question asks "Who is born in January?" In the first case, it's A; in the second, it's D. Without more clues, it cannot be determined. Let's check: The options are A, B, C, D. If the question expects a single answer, there must be an additional clue. If B is June, and A before B, A could be January or March. If C after D, then D is before C. If A=January, D=March, C=September works. If A=March, D=January, C=September works. So January is either A or D. So the answer is "Cannot be determined." But the question asks for a specific person. If the options include "Cannot be determined," that is the answer.)
- B) B
- C) C
- D) Cannot be determined (Correct)

Q: A, B, C have appointments at 10 AM, 11 AM, 12 PM. A is before B. C is not at 10 AM. Who is at 12 PM?
- A) A
- B) B (Correct: C is not at 10 AM → C is at 11 AM or 12 PM. A is before B. If C is at 12 PM, then A and B are at 10 AM and 11 AM. A before B → A=10, B=11. Then 12=C. Works. If C is at 11 AM, then A and B are at 10 AM and 12 PM. A before B → A=10, B=12. Then 12=B. In this case, B is at 12 PM. So 12 PM is B in one case and C in another. Cannot be determined.)
- C) C
- D) Cannot be determined (Correct)

Q: In a week, A is on Monday. B is immediately after C. D is two days after B. Who is on Thursday?
- A) A
- B) B
- C) C
- D) Cannot be determined (Correct: A=Monday. B immediately after C. D two days after B. We don't know the exact days of B, C, D. So Thursday could be any of them.)
- E) D
[/quiz]