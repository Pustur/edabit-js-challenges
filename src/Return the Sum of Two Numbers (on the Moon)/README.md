# Return the Sum of Two Numbers (on the Moon)

`Arrays` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/Ev6brd7JHWzMufJ9w)

When two numbers are added together, the strange Lunar arithmetic is used on the Moon. The Lunar sum of two numbers is not determined by the sum of their individual digits, but by the highest digit of the two taken into account at each step, in columnar form.

```js
2  4  6  +
3  1  7  =
--------
3  4  7

// 3 > 2 | 4 > 1 | 7 > 6

1  3  4  +
   5  4  =
--------
1  5  4

//  1 > 0 | 5 > 3 | 4 == 4
// Blank spots in the columnar form are equals to 0

   2  0  +
1  4  0  =
-------
1  4  0

// 1 > 0 | 4 > 2 | 0 == 0
```

Given two positive integers `number1` and `number2`, implement a function that returns their sum as a new integer.

### Examples

```js
lunarSum(246, 317) ➞ 347

lunarSum(134, 54) ➞ 154

lunarSum(20, 140) ➞ 140
```

### Notes

- The given numbers will be always positive integers: no exceptions to handle.
