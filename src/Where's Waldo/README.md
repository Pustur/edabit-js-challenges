# Where's Waldo?

`Arrays` `Functional Programming`

[View on Edabit](https://edabit.com/challenge/pNNvNZQCz2DmvT59d)

Return the coordinates (`[row, col]`) of the element that differs from the rest.

### Examples

```js
whereIsWaldo([
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
]) ➞ [3, 2]

whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
]) ➞ [2, 4]

whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
]) ➞ [5, 1]
```

### Notes

Rows and columns are 1-indexed (**not zero-indexed**).
