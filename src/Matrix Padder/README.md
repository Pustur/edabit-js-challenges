# Matrix Padder

`Arrays`

[View on Edabit](https://edabit.com/challenge/JxdXoCGeWpk4ktevH)

Create a function that takes a matrix of size (m, n) and returns a matrix of size (m+2, n+2) with a pad of 0s around the perimeter.

### Examples

```js
padMatrix([[]]) ➞ [[0, 0], [0, 0], [0, 0]]

padMatrix([[9]]) ➞ [
  [0, 0, 0],
  [0, 9, 0],
  [0, 0, 0]
]

padMatrix([["hi", true]]) ➞ [
  [0, 0, 0, 0],
  [0, "hi", true, 0],
  [0, 0, 0, 0]
]

padMatrix([
  [1, 2, 5],
  [8, 6, 7],
  [3, 4, 9]
]) ➞ [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 5, 0],
  [0, 8, 6, 7, 0],
  [0, 3, 4, 9, 0],
  [0, 0, 0, 0, 0]
]
```

### Notes

- All inputs will be arrays of arrays.
- Refer to the first example to handle an empty input.
