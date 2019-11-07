# Euler's Phi Function

`Algorithms` `Higher Order Functions` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/JDgeyZ9gxNty7Y5re)

The **Euler's phi function** (from the Greek letter **φ**, also called _Euler's totient function_) counts the positive integers that are coprime of a given number `n`, from 1 to `n` - 1. Two numbers are coprime when their greater common divisor is equal to 1. Look at the example below.

```js
divisors of 6 ➞ [1, 2, 3, 6]

divisors of 5 ➞ [1, 5] ➞ g.c.d. = 1
divisors of 4 ➞ [1, 2, 4] ➞ g.c.d. = 2
divisors of 3 ➞ [1, 3] ➞ g.c.d. = 3
divisors of 2 ➞ [1, 2] ➞ g.c.d. = 2
divisors of 1 ➞ [1] ➞ g.c.d. = 1

1 and 5 are coprime of 6 ➞ phi(6) = 2
```

Implement a phi function that returns the count of coprime integers of a given positive integer `n`.

### Examples

```js
phi(1) ➞ 1

phi(3) ➞ 2

phi(8) ➞ 4
```

### Notes

- 1 is trivially coprime of every number.
- You can also proceed to obtain prime factors of an integer instead of all its positive divisors, just remember that 1 is present in any case despite is not prime.
