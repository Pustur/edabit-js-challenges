# Decimal And Binary Palindromes

`Numbers` `Strings`

[View on Edabit](https://edabit.com/challenge/P5aEB9rvFibg4rRBg)

A number/string is a _palindrome_ if the digits/characters are the same when read both forward and backward. Examples include "racecar" and 12321\. Given a positive number _n_, check if _n_ or the binary representation of _n_ is palindromic. Return the following:

- `"Decimal only."` if only _n_ is a palindrome.
- `"Binary only."` if only the binary representation of _n_ is a palindrome.
- `"Decimal and binary."` if both are palindromes.
- `"Neither!"` if neither are palindromes.

### Examples

```js
palindromeType(1306031) ➞ "Decimal only."
// decimal = 1306031
// binary  = '100111110110110101111'

palindromeType(427787) ➞ "Binary only."
// decimal = 427787
// binary  = '1101000011100001011'

palindromeType(313) ➞ "Decimal and binary."
// decimal = 313
// binary  = 100111001

palindromeType(934) ➞ "Neither!"
// decimal = 934
// binary  = '1110100110'
```

### Notes

See the resources section for ways to convert to binary.
