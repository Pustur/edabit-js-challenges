# New Numbers

`Math` `Numbers` `Validation`

[View on Edabit](https://edabit.com/challenge/dydxdTCEpELGMRWeB)

A new number is a number that is not a permutation of any smaller number. 869 is **not** a new number because it is just a permutation of smaller numbers, 689 and 698. 509 is a new number because it can't be formed by a permutation of any smaller number (leading zeros not allowed).

Write a function that takes a non-negative integer and returns `true` if the integer is a new number and `false` if it is not.

### Examples

```js
isNew(3) ➞ true

isNew(30) ➞ true

isNew(321) ➞ false

isNew(123) ➞ true
```

### Notes

A curious fact: out of the first one million integers, only 8002 are new.
