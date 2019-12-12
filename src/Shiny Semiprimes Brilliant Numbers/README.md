# Shiny Semiprimes: Brilliant Numbers

`Higher Order Functions` `Loops` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/Kj9uzWHcb5bdDp9NK)

In this challenge, you have to establish if a given number is _Brilliant_. A Brilliant number is a semiprime that can be obtained only by multiplicating two, and only two, different primes with the same number of digits.

A semiprime can be:

- A **composite** number equal to the **product of two different primes**.
- A **composite** number equal to the **square of a prime**.

Given an integer `n`, implement a function that returns `true` if `n` is a Brilliant number, or `false` if it's not.

### Examples

```js
isBrilliant(11) ➞ false
// 11 is a prime.

isBrilliant(9) ➞ true
// 9 is equal to the square of a prime: 3²

isBrilliant(21) ➞ true
// 21 is equal to the product of two different primes: 3 x 7
// 3 and 7 have the same digital length.

isBrilliant(22) ➞ false
// 22 is equal to the product of two different primes: 2 x 11
// 2 and 11 have different digital lengths.

isBrilliant(1001) ➞ false
// 1001 is equal to the product of two different primes of the same digital length...
// ...but it can be obtained in two ways: 11 * 91 or 13 * 77
// Must be equal to the product of two AND ONLY TWO different primes.
```

### Notes

- The given `n` will be a positive integer greater than 0.
- Remember that a Brilliant number is a semiprime that can be obtained only with a single combination of different primes having the same digital length (see example #5).
