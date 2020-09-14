# Numbers That are Also Writers

`Conditions` `Loops` `Numbers` `Validation`

[View on Edabit](https://edabit.com/challenge/LZcvkTGzhNfvxukPP)

If a number is **autobiographical**, then the number's digits describe itself. The first digit is the amount of times the digit 0 appears, the second digit is the amount of times the digit 1 appears, the third digit is the amount of times the digit 2 appears, etc. **This repeats for all digits of the number.** The number `6210001000` is autobiographical, because it has six 0's, two 1's, one 2, zero 3's, zero 4's, zero 5's, one 6, zero 7's, zero 8's, and zero 9's.

Create a function that takes an integer `n` and returns whether or not `n` is an autobiographical number.

### Examples

```js
isAutobiographical(6210001000) ➞ true

isAutobiographical(12345) ➞ false

isAutobiographical(1210) ➞ true
// one 0, two 1's, one 2, zero 3's

isAutobiographical(638) ➞ false

isAutobiographical(0) ➞ false
// claims no zeroes, however zero is the first digit
```

### Notes

- Numbers with more than 10 digits should always return `false` (9 is the highest digit in base 10, so you can't go higher than 9,999,999,999).
- `n` is always >= 0 and is always an integer.
