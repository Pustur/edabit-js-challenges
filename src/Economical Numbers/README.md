# Economical Numbers

`Conditions` `Loops` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/W3Tw2TK8nF8ej9YPC)

A number is Economical if the quantity of digits of its prime factorization (including exponents greater than 1) is equal or lower than the digits quantity of the number itself.

Given an integer `n`, implement a function that returns a string:

- `"Equidigital"` if the quantity of digits of the prime factorization (including exponents greater than 1) is equal to the quantity of digits of `n`;
- `"Frugal"` if the quantity of digits of the prime factorization (including exponents greater than 1) is lower than the quantity of digits of `n`;
- `"Wasteful"` if none of the two above conditions is true.

### Examples

```js
isEconomical(14) ➞ "Equidigital"
// The prime factorization of 14 (2 digits) is [2, 7] (2 digits)
// Exponents equal to 1 are not counted

isEconomical(125) ➞ "Frugal"
// The prime factorization of 125 (3 digits) is [5^3] (2 digits)
// Notice how exponents greater than 1 are counted

isEconimical(1024) ➞ "Frugal"
// The prime factorization of 1024 (4 digits) is [2^10] (3 digits)

isEconomical(30) ➞ "Wasteful"
// The prime factorization of 30 (2 digits) is [2, 3, 5] (3 digits)
```

### Notes

- Any given `n` will be a positive integer greater than 1.
- Remember to count also the exponents greater than 1 into the prime factorization: 2<sup>1</sup> = 2 (one digit), 2<sup>2</sup> = 22 (two digits), 2<sup>10</sup> = 210 (three digits)...
