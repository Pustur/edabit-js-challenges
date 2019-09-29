# Hole Number Sequence

`Algorithms` `Numbers` `Recursion` `Strings`

[View on Edabit](https://edabit.com/challenge/67z9Tzvadgxb5pDmS)

What do the digits 0, 4, 6, 8, and 9 have in common? Well, they are whole numbers... and they are also _hole_ numbers (not actually a thing until now). Hole numbers are numbers with holes in their shapes (8 is special in that it contains two holes).

14 is a hole number with one hole. 88 is a hole number with four holes.

Your task is to create a function with argument `N` that returns the sum of the holes for the integers _n_ in the range of range _0 < n <= N_.

To illustare, `sumOfHoles(14)` returns `7`, because there are 7 holes in 4, 6, 8, 9, 10 and 14.

### Examples

```js
sumOfHoles(4) ➞ 1

sumOfHoles(6) ➞ 2

sumOfHoles(8) ➞ 4

sumOfHoles(6259) ➞ 12345
```

### Notes

- All test cases are positive real integers.
- Don't forget that 8 has two holes.
