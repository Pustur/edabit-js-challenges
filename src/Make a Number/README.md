# Make a Number

`Arrays` `Loops` `Numbers`

[View on Edabit](https://edabit.com/challenge/AA5fY9AshyJkuPEMt)

In this challenge, you have to find all the subsequences of consecutive numbers that, when their numbers are added between them, are equals to the given number.

Given a positive integer `n`, implement a function that returns a matrix containing every sequence of consecutive numbers smaller than `n`, sorted ascendingly by their first term, whose sum is equal to `n`.

### Examples

```js
makeNumber(9) ➞ [ [2, 3, 4], [4, 5] ]

makeNumber(8) ➞ []

makeNumber(100) ➞ [ [9, 10, 11, 12, 13, 14, 15, 16], [18, 19, 20, 21, 22] ]
```

### Notes

If no sequence sum is equal to the given `n`, return an empty array (see example #2).
