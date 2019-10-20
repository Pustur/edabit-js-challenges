# Casting Out Nines

`Language Fundamentals` `Logic` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/srfpEfnmYdWwMcqv4)

This is a method commonly taught in primary schools, used to verify the correctness of an operation; usually (as in this exercise) the multiplication.

Every number involved in the multiplication is replaced by its **digital root** (reiterated sum of its digits until a single-digit number is obtained). After this, the digital roots of factors are multiplied, and again this result is reduced to the digital root. If the digit obtained is different from the result's digital root the operation is surely wrong, if it is equal the operation can be correct with a possibility out of nine to be a false positive.

Given two factors and a result, implement a function that returns a string in the format:

- "**x, x, x, x = Result!**", with _x_ being the digital roots (a, b, r, and a\*b in the order).
- _Result!_ being "**Correct!**" if the last two digits are the same and the result is correct.
- "**False Positive!**" if the last two digits are the same but the result is wrong.
- "**Wrong!**" if the last two digits are different.

### Examples

```js
// D.R. is for Digital Root

castOutNines(467, 78, 36426) ➞ "8,6,3,3 = Correct!"
// D.R. 467 = 4 + 6 + 7 = 17 = 1 + 7 = 8
// D.R. 78 = 7 + 8 = 15 = 1 + 5 = 6
// D.R. 36426 = 3 + 6 + 4 + 2 + 6 = 21 = 2 + 1 = 3
// D.R. 8 * 6 = D.R. 48 = 4 + 8 = 12 = 1 + 2 = 3
// Last two digits are the same and result is correct: Correct!

castOutNines(467, 78, 36425) ➞ "8,6,2,3 = Wrong!"
// D.R. 467 = 8
// D.R. 78 = 6
// D.R. 36425 = 3 + 6 + 4 + 2 + 5 = 20 = 2 + 0 = 2
// D.R. 8 * 6 = 3
// Last two digits are different and result is wrong: Wrong!

castOutNines(467, 78, 129) ➞ "8,6,3,3 = False Positive!"
// D.R. 467 = 8
// D.R. 78 = 6
// D.R. 129 = 1 + 2 + 9 = 12 = 1 + 2 = 3
// D.R. 8 * 6 = 3
// Last two digits are equals but result is wrong: False Positive!
```

### Notes

N/A
