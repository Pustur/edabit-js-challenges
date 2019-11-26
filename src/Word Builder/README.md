# Word Builder

`Arrays` `Sorting`

[View on Edabit](https://edabit.com/challenge/PMKNyPeYgz7weyNXF)

In this challenge, you have to build a word from the scrambled letters contained into the first given array. For establishing how to assign the spots to the letters, you will use the positions contained into the second given array.

```js
letters = ["e", "t", "s", "t"];
positions = [1, 3, 2, 0];

Step 1 ➞ Letter "e" goes to index 1 ➞ _  e  _   _
Step 2 ➞ Letter "t" goes to index 3 ➞ _  e  _   t
Step 3 ➞ Letter "s" goes to index 2 ➞ _  e  s   t
Step 4 ➞ Letter "t" goes to index 0 ➞ t  e  s   t
```

Given the two arrays `letters` (containing the scrambled letters of the word) and `positions` (containing the indexes of the letters), implement a function that returns the resulting word as a string.

### Examples

```js
wordBuilder(["e", "t", "s", "t"], [1, 3, 2, 0]) ➞ "test"

wordBuilder(["b", "e", "t", "i", "d", "a"], [3, 0, 5, 4, 1, 2]) ➞ "edabit"

wordBuilder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"
```

### Notes

- Every given test case has valid parameters, don't worry about exceptions handling.
