# Curzon Numbers

`Math` `Numbers` `Validation`

[View on Edabit](https://edabit.com/challenge/jXdJfXXtJ77rRCCR8)

In this challenge, establish if a given integer `num` is a Curzon number. If `1` plus `2` elevated to `num` is exactly divisible by `1` plus `2` multiplied by `num`, then `num` is a Curzon number.

Given a non-negative integer `num`, implement a function that returns `true` is `num` is a Curzon number, or `false` if it's not.

### Examples

```js
isCurzon(5) ➞ true
// 2 ** 5 + 1 = 33
// 2 * 5 + 1 = 11
// 33 is a multiple of 11

isCurzon(10) ➞ false
// 2 ** 10 + 1 = 1025
// 2 * 10 + 1 = 21
// 1025 is not a multiple of 21

isCurzon(14) ➞ true
// 2 ** 14 + 1 = 16385
// 2 * 14 + 1 = 29
// 16385 is a multiple of 29
```

### Notes

**Note for JavaScript version**: in this challenge, you must use `BigInt` objects instead of numbers. If you need an introduction to this special type of numbers, check the **Resources** and **Comments** tabs.
