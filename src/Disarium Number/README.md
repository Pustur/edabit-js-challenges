# Disarium Number

`Loops` `Math` `Numbers` `Strings` `Validation`

[View on Edabit](https://edabit.com/challenge/pyxXekyofGasXX2me)

A number is said to be Disarium if the **sum** of its _digits raised to their respective positions_ is the number itself.

Create a function that determines whether a number is a Disarium or not.

### Examples

```js
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(518) ➞ false

isDisarium(518) ➞ true

isDisarium(544) ➞ false

isDisarium(8) ➞ true

isDisarium(466) ➞ false
```

### Notes

- Position of the digit is 1-indexed.
- A recursive version of this challenge can be found via this [link](https://edabit.com/challenge/3bMksFY5emJLvLJBW).
