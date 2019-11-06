# Kaprekar Numbers

`Numbers` `Strings`

[View on Edabit](https://edabit.com/challenge/FzHZJtG5LQwjMGdZp)

A Kaprekar Number is a positive integer that, after being squared and split into two lexicographical parts, is equal to the sum of the two new numbers obtained:

- If the quantity of digits of the squared number is even, the left and right parts will have the same length.
- If the quantity of digits of the squared number is odd, then the right part will be the longest half, with the left part being the smallest or equal to zero if the quantity of digits is equal to 1.

Given a positive integer `n` implement a function that returns `true` if it's a Kaprekar number, and `false` if it's not.

### Examples

```js
isKaprekar(3) ➞ false
// n² = "9"
// Left + Right = 0 + 9 = 9 ➞ 9 !== 3

isKaprekar(5) ➞ false
// n² = "25"
// Left + Right = 2 + 5 = 7 ➞ 7 !== 5

isKaprekar(297) ➞ true
// n² = "88209"
// Left + Right = 88 + 209 = 297 ➞ 297 === 297
```

### Notes

- Trivially, 0 and 1 are Kaprekar Numbers being the only two numbers equal to their square. Any number formed only by digits equal to _9_ will always be a Kaprekar Number.
