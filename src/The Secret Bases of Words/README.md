# The Secret Bases of Words

`Formatting` `Numbers` `Strings`

[View on Edabit](https://edabit.com/challenge/fxMe9pKFgfHgujahQ)

In this challenge, you have to find the numeric value of a given word. Instead of the usual sum of Unicode values, you have to convert the whole word into a decimal number from a base equal to ten plus the position in the alphabet of the "highest" letter of the word (counting from `a = 1` to `z = 26`).

Given a string `word`, implement a function that returns an integer being the decimal value obtained after the conversion from the `word` specific base, accordingly to the instructions above.

### Examples

```js
wordToDecimal("Edabit") ➞ 351010469
// The highest letter of "Edabit" in the alphabet is "T"
// "T" is the 20th letter of the alphabet: adding 10 the result is 30
// "Edabit" in base30 is equal to 351010469 in base10

wordToDecimal("JavaScript") ➞ 680575028284221
// The highest letter of "JavaScript" in the alphabet is "v"
// "v" is the 22th letter of the alphabet: adding 10 the result is 32
// "JavaScript" in base32 is equal to 680575028284221 in base10

wordToDecimal("ZERO") ➞ 1652100
// The highest letter of "ZERO" in the alphabet is "Z"
// "Z" is the 26th letter of the alphabet: adding 10 the result is 36
// "ZERO" in base36 is equal to 1652100 in base10
```

### Notes

- The bases that accept letters in their representation are those starting from 11 (using 10 digits and 1 letter) up to 36 (using 10 digits and 26 letters).
- **JS Note:** This challenge is thinked and designed to avoid results bigger than the max safe integer representable in JS, so that the `BigInt()` method will be not necessary to pass it.
- Every given `word` will be a valid one made of just letters, either lowercased or uppercased.
