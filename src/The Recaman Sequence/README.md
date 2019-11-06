# The Recamán Sequence

`Algorithms` `Loops` `Numbers`

[View on Edabit](https://edabit.com/challenge/jDtwBwYhaMD2HftdX)

The Recamán Sequence is a numeric sequence that starts always with 0\. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:

- For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
- If the subtraction of the length from the last element returns a number **greater than 0 and not already present in the sequence**, it is added to the sequence.
- When the conditions of the above statement are not meeted, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
- Repeat until the number of interest is found.

Look at example below for the steps to do for to establish the Recamán Index of number 2:

```js
Sequence = [0]

Last - Length = 0 - 1 = -1 (lower than zero)
Last + Length = 0 + 1 = 1

Sequence = [0, 1]

Last - Length = 1 - 2 = -1 (lower than 0)
Last + Length = 1 + 2 = 3

Sequence = [0, 1, 3]

Last - Length = 3 - 3 = 0 (already present in sequence)
Last + Length = 3 + 3 = 6

Sequence = [0, 1, 3, 6]

Last - Length = 6 - 4 = 2 (greater than 0 and not already in sequence)

Sequence = [0, 1, 3, 6, 2]

// The Recaman Index of 2 is: 4
```

Given a positive integer `n`, implement a function that returns its Recamán Index.

### Examples

```js
recamanIndex(2) ➞ 4

recamanIndex(3) ➞ 2

recamanIndex(7) ➞ 5
```

### Notes

- The sequence starts always with 0.
- The step with the subtraction Last Element - Sequence Length (verifying that is not already present in the sequence) has the precedence over the second step.
- Remember: if the number to add is the result of a subtraction it can't be already in the sequence (_first step_), if it is the result of an addition it can be already present (_second step_).
- Curiosity: the first number to repeat in the sequence is 42...
- Curiosity: the first number with a _BIG_ delay in the sequence is 19.
