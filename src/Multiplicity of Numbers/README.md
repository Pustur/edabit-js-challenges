# Multiplicity of Numbers

`Arrays` `Language Fundamentals`

[View on Edabit](https://edabit.com/challenge/PgNvoxjjy7Gx6zDni)

Write a function that returns an array of elements `[number, multiplicity]`. The `multiplicity` of a number refers to the number of times it occurs in the array.

To illustrate:

```js
[5, 5, 1, 1, 5, 5, 3];
[
  [5, 4],
  [1, 2],
  [3, 1],
];

// Since 5 appears 4 times, 1 appears twice, and 3 appears once.
```

The final array should only include unique elements, and the elements should be ordered by when they first appeared in the original array.

### Examples

```js
multiplicity([1, 1, 1, 2, 2, 3]) ➞ [[1, 3], [2, 2], [3, 1]]

multiplicity([1, 1, 1, 1, 1]) ➞ [[1, 5]]

multiplicity([1, 5, 4, 3, 2]) ➞ [[1, 1], [5, 1], [4, 1], [3, 1], [2, 1]]
```

### Notes

N/A
