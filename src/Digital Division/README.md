# Digital Division

`Conditions` `Math` `Numbers` `Validation`

[View on Edabit](https://edabit.com/challenge/ZSiHm257pcdv9QiXa)

In this challenge, you have to verify if a number is exactly divisible by a combination of its digits. There are three possible conditions to test:

- The given number is exactly divisible by each of its digits;
- The given number is exactly divisible by the sum of its digits;
- The given number is exactly divisible by the product of its digits.

Given an integer `n`, implement a function that returns:

- If every test is true, a string `"Perfect"`;
- If some test is true, the number of true tests (`1` or `2`);
- If every test is false, a string `"Indivisible"`.

### Examples

```js
digitalDivision(21) ➞ 1
// Exactly divisible only by the sum of its digits (2 + 1 = 3)

digitalDivision(128) ➞ 2
// Exactly divisible by each of its digits
// Exactly divisible by the product of its digits (1 * 2 * 8 = 16)

digitalDivision(100) ➞ 2
// Exactly divisible by each of its digits (excluding zeros)
// Exactly divisible by the sum of its digits (1 + 0 + 0 = 0)

digitalDivision(12) ➞ "Perfect"
// Exactly divisible by each of its digits
// Exactly divisible by 3 (sum of digits = 1 + 2)
// Exactly divisible by 2 (product of digits = 1 * 2)

digitalDivision(31) ➞ "Indivisible"
// Every testing condition is false
```

### Notes

- Remember to exclude any 0-digit when testing if the given `n` is divisible by each of its digits
- A number containing at least a 0-digit can't be exactly divided by the product of its digits (division by 0).
- Trivially, every single-digit positive number greater than 0 is Perfect
- Any given number will be a posiive integer greater than 0.
