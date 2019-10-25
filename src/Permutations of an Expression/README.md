# Permutations of an Expression

`Higher Order Functions` `Math` `Strings`

[View on Edabit](https://edabit.com/challenge/5Fw82qJT4MgASBfnB)

In this challenge, you have to permutate an expression that includes three variable values `a`, `b` and `c`. You are given a set of three unique numbers to substitute for letters so there are six possible different expression variations, and you have to find which one returns the greater result.

```js
expr = "(a - b) * c"; | nums = [1, 2, 3];

Permutation #1 ➞ (1 - 2) * 3 = -3
Permutation #2 ➞ (1 - 3) * 2 = -4
Permutation #3 ➞ (2 - 1) * 3 = 3
Permutation #4 ➞ (2 - 3) * 1 = -1
Permutation #5 ➞ (3 - 1) * 2 = 4
Permutation #6 ➞ (3 - 2) * 1 = 1

// Permutation #5 returns the greater result.
```

Given an expression string `expr` and an array of three numbers `nums`, the function must return a string with the complete notation of the expression that returns the greater result (adding the equal sign after the expression and the result after the equal sign). For the example above, the result will be:

```js
greaterPermutation("(a - b) * c", [1, 2, 3]) ➞ "(3 - 1) * 2 = 4"
```

If an expression returns a float number as result, round it to the nearest hundredth.

### Examples

```js
greaterPermutation("(a - b) * c", [1, 2, 3]) ➞ "(3 - 1) * 2 = 4"

greaterPermutation("a ** b - c", [2, 3, 1]) ➞ "3 ** 2 - 1 = 8"

greaterPermutation("a % b + (c * 2)", [3, 1, 2]) ➞ "1 % 2 + (3 * 2) = 7"
```

### Notes

- Every given expression is designed to have just one permutation that returns a maximum result, don't worry about multiple matches.
- Expressions can contain known values besides the three variables (see example #3).
- Remember to round to the nearest hundredth if the result is a float number.
