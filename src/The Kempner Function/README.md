# The Kempner Function

`Higher Order Functions` `Math` `Numbers` `Recursion`

[View on Edabit](https://edabit.com/challenge/tcdEnEJPA6gXg3XXP)

The Kempner Function, applied to a composite number, permits to find the smallest integer greater than zero which factorial is exactly divided by the number.

```js
kempner(6) ➞ 3

1! = 1 % 6 > 0
2! = 2 % 6 > 0
3! = 6 % 6 === 0

kempner(10) ➞ 5

1! = 1 % 10 > 0
2! = 2 % 10 > 0
3! = 6 % 10 > 0
4! = 24 % 10 > 0
5! = 120 % 10 === 0
```

A Kempner Function applied to a prime will always return the prime itself.

```js
kempner(2) ➞ 2
kempner(5) ➞ 5
```

Given an integer `n`, implement a Kempner Function.

### Examples

```js
kempner(6) ➞ 3

kempner(10) ➞ 5

kempner(2) ➞ 2
```

### Notes

- Try to solve this using a recursive method, with an approach oriented to higher order functions.
- If you need to get more confident with recursion and factorials, try [this challenge](https://edabit.com/challenge/Ju7AK9rAGjz86hjxo).
