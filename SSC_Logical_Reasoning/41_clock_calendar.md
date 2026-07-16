# Clock & Calendar

> The mathematics of time: calculating the precise movements of clock hands and the recurring patterns of days and dates. This is not about reading time; it is about applying the rigid arithmetic that governs temporal systems.

## Chapter 1: The Foundations of Clock Logic

### Section 1 | The Clock as a Circular Number Line

A clock is a circle divided into 12 equal parts (hours) and 60 equal parts (minutes). Each hour mark represents 30° (360° ÷ 12). Each minute mark represents 6° (360° ÷ 60). The hour hand and minute hand move continuously, and their relative speeds determine the angle between them.

**The Core Principle**: The minute hand moves 12 times faster than the hour hand. In 60 minutes, the minute hand completes 360° (6° per minute), while the hour hand completes 30° (0.5° per minute).

**The Cognitive Shift**: When calculating clock angles, treat the clock as a number line. The hour hand's position depends on both the hour and the minutes, while the minute hand's position depends only on the minutes.

[alert type="danger"]
**The Hour Hand Movement Trap**: Many students forget that the hour hand moves continuously, not just once per hour. At 3:30, the hour hand is halfway between 3 and 4, not at 3.
[/alert]

### Section 2 | The Clock Speed Constants

| Hand | Degrees per Minute | Degrees per Hour |
| :--- | :--- | :--- |
| Minute Hand | 6° | 360° |
| Hour Hand | 0.5° | 30° |
| Relative Speed | 5.5° per minute | 330° per hour |

The relative speed of 5.5° per minute is the key to most clock problems. In one minute, the minute hand gains 5.5° on the hour hand.

## Chapter 2: Angle Between Hands

### Section 1 | The Angle Formula

To find the angle between the hour and minute hands at a given time:
1. **Calculate the hour hand's position**: (Hour × 30) + (Minutes × 0.5)
2. **Calculate the minute hand's position**: (Minutes × 6)
3. **Find the difference**: Absolute difference between the two positions.
4. **Take the smaller angle**: If the difference > 180°, subtract from 360°.

=Angle = |(30H + 0.5M) - (6M)| = |30H - 5.5M|=

Where H is the hour (1-12) and M is the minutes (0-59). If the result is > 180°, subtract from 360°.

**Example**: Time = 3:30
- Hour hand = (3 × 30) + (30 × 0.5) = 90 + 15 = 105°
- Minute hand = 30 × 6 = 180°
- Difference = |105 - 180| = 75°
- Angle = 75°.

### Section 2 | The Right Angle and Straight Angle

- **Right Angle**: 90° between hands.
- **Straight Angle**: 180° between hands.
- **Coincident**: 0° between hands.

**The Frequency**: In 12 hours, the hands coincide 11 times, are at right angles 22 times, and are in a straight line (180°) 11 times.

[alert type="success"]
**The Overlap Count**: The hands coincide once every 65 5/11 minutes (because relative speed is 5.5°/min, and 360°/5.5 = 65.45 minutes).
[/alert]

[flashcards title="Clock Angle Constants"]
| Event | Condition | Frequency in 12 Hours |
| :--- | :--- | :--- |
| Coincide | Angle = 0° | 11 times |
| Right Angle | Angle = 90° | 22 times |
| Straight Line | Angle = 180° | 11 times |
| Opposite | Angle = 180° | 11 times |
[/flashcards]

[example]
**Question:** What is the angle between the hour and minute hands at 4:20?
**Solution:**
Step 1: H = 4, M = 20.
Step 2: Hour hand position = 30 × 4 + 0.5 × 20 = 120 + 10 = 130°.
Step 3: Minute hand position = 6 × 20 = 120°.
Step 4: Difference = |130 - 120| = 10°.
Step 5: Since 10° < 180°, the angle is 10°.
**Final Answer:** 10°.
[/example]

## Chapter 3: Mirror Image of Clock

### Section 1 | The Mirror Time Formula

When a clock is reflected in a mirror, the time appears reversed. The actual time and the reflected time sum to 11:60 (or 12:00).

=Actual Time = 11:60 - Reflected Time=

**Example**: If the reflected clock shows 4:30, the actual time is 11:60 - 4:30 = 7:30.

### Section 2 | The Mirror Time Derivation

The mirror reverses the positions of the hands, but the relationship is linear. The formula works for any time on a 12-hour clock.

**The Trap**: Some students try to visualize the clock face. The formula is faster and less error-prone.

[flashcards title="Mirror Time Formula"]
| Given | Formula | Example |
| :--- | :--- | :--- |
| Reflected Time (R) | Actual = 11:60 - R | R = 4:30 → 7:30 |
| Reflected Time (R) | Actual = 12:00 - R | R = 4:30 → 7:30 |
[/flashcards]

[example]
**Question:** The mirror image of a clock shows 2:15. What is the actual time?
**Solution:**
Step 1: Use the formula: Actual = 11:60 - 2:15 = 9:45.
Step 2: Check: 12:00 - 2:15 = 9:45.
**Final Answer:** 9:45.
[/example]

## Chapter 4: Calendar - Day and Date Based

### Section 1 | The Calendar Framework

Calendar problems ask for the day of the week on a given date, or the number of days between two dates. The logic is based on the number of odd days (extra days beyond complete weeks).

**The Core Principle**: The calendar repeats every 400 years. Within that, leap years add an extra day.

**The Odd Days Concept**:
- 1 week = 7 days.
- Any number of days can be reduced to the remainder when divided by 7. This remainder is the number of "odd days."
- 1 ordinary year = 1 odd day (365 = 52 weeks + 1 day).
- 1 leap year = 2 odd days (366 = 52 weeks + 2 days).

### Section 2 | The Calendar Day Calculation

To find the day of the week on a given date:
1. Count the number of odd days from a known reference.
2. The day of the week shifts forward by the number of odd days.

**Reference**: January 1, 2000 was a Saturday.
- Odd days from 2000 to the target year: (Number of leap years × 2) + (Number of ordinary years × 1).
- Then add odd days from the target year's start to the target date.

[alert type="success"]
**The Reference Day**: Knowing the day for January 1, 2000 (Saturday) is a standard shortcut. However, the exam may provide a different reference date to test your calculation ability.
[/alert]

[flashcards title="Odd Days Reference"]
| Year Type | Days | Odd Days |
| :--- | :--- | :--- |
| Ordinary Year | 365 | 1 |
| Leap Year | 366 | 2 |
| 100 Years | 36525 | 5 odd days |
| 200 Years | 73050 | 3 odd days |
| 300 Years | 109575 | 1 odd day |
| 400 Years | 146100 | 0 odd days |
[/flashcards]

[example]
**Question:** What day of the week is January 1, 2025?
**Solution:**
Step 1: Reference: January 1, 2000 was Saturday.
Step 2: From 2000 to 2024 (24 years):
- Leap years: 2000, 2004, 2008, 2012, 2016, 2020, 2024 → 7 leap years.
- Ordinary years: 24 - 7 = 17.
- Odd days = (7 × 2) + (17 × 1) = 14 + 17 = 31.
- 31 mod 7 = 3 odd days.
Step 3: Add 3 days to Saturday → Tuesday.
Step 4: Wait: January 1, 2025 is actually Wednesday. Let's re-evaluate. 2000 is a leap year (divisible by 400). From 2000 to 2024 includes 2000, 2004, 2008, 2012, 2016, 2020, 2024 → 7 leap years. But the odd days from 2000 to 2024 is 31, 31 mod 7 = 3. Saturday + 3 = Tuesday. But the actual day is Wednesday. The reference is January 1, 2000 was Saturday? Actually, January 1, 2000 was a Saturday. Let's recalculate: January 1, 2000 to January 1, 2025 is 25 years. Leap years: 2000, 2004, 2008, 2012, 2016, 2020, 2024 → 7 leap years. 25 - 7 = 18 ordinary years. Odd days = 7×2 + 18×1 = 14 + 18 = 32. 32 mod 7 = 4. Saturday + 4 = Wednesday. Correct.
**Final Answer:** Wednesday.
[/example]

[quiz title="Clock & Calendar Mastery Quiz"]
Q: What is the angle between the hour and minute hands at 6:00?
- A) 90°
- B) 120°
- C) 180° (Correct: 6:00 hour hand at 180°, minute at 0°, difference = 180°.)
- D) 0°

Q: The mirror image of a clock shows 8:20. What is the actual time?
- A) 3:40 (Correct: 11:60 - 8:20 = 3:40)
- B) 4:40
- C) 3:20
- D) 8:40

Q: What day of the week is January 1, 2024? (Reference: January 1, 2000 was Saturday)
- A) Monday (Correct: From 2000 to 2024: 24 years, leap years: 2000,2004,2008,2012,2016,2020,2024 → 7 leap years. Odd days = 7×2 + 17×1 = 31, 31 mod 7 = 3. Saturday + 3 = Tuesday. Wait: 2024 is a leap year, but from Jan 1, 2000 to Jan 1, 2024 is 24 years, including 2024? No, Jan 1, 2024 is before Feb 29, 2024. So 2024 is not counted as a leap year for this calculation. Leap years: 2000,2004,2008,2012,2016,2020 → 6 leap years. Odd days = 6×2 + 18×1 = 12+18=30, 30 mod 7 = 2. Saturday + 2 = Monday. Yes, January 1, 2024 was Monday.)
- B) Tuesday
- C) Wednesday
- D) Thursday

Q: How many times do the hands of a clock coincide in 24 hours?
- A) 22 (Correct: In 12 hours, they coincide 11 times. In 24 hours, 22 times.)
- B) 11
- C) 24
- D) 12

Q: What is the angle between the hour and minute hands at 9:15?
- A) 172.5° (Correct: H=9, M=15. Hour = 270 + 7.5 = 277.5°. Minute = 90°. Difference = 187.5°, smaller angle = 360 - 187.5 = 172.5°.)
- B) 187.5°
- C) 90°
- D) 180°
[/quiz]