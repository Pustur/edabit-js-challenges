# Conveyor Belts, Warp Tunnels

`Arrays` `Data Structures` `Loops`

[View on Edabit](https://edabit.com/challenge/QK4QbxN6oj4EMf5zy)

In this challenge, you have to deal with a matrix that is moving from the left to the right by a given amount of times, shifting its items as in a conveyor belt. At the end of the last array inside the matrix, there's a warp tunnel. The warp tunnel made appear the elements pushed through by the shifts at the beginning of the matrix, in the same order as they were before the shift. Look at the example below:

```js
// before the movement
mtx = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
n = 2;

// after the movement (2 shifts to the right)
mtx = [
  [8, 9, 1],
  [2, 3, 4],
  [5, 6, 7],
];

// Shifting 2 times to the right, "8" and "9" are pushed through the warp tunnel
// The warped elements appear at the start
```

Given a matrix `mtx` and an integer `n` , implement a function that returns a new matrix with its elements shifted `n` times.

### Examples

```js
warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2) ➞ [[8, 9, 1], [2, 3, 4], [5, 6, 7]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 8) ➞ [[2, 3, 4], [5, 6, 7], [8, 9, 1]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9) ➞ [[2, 3, 4], [5, 6, 7], [8, 9, 1]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 18) ➞ [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

### Notes

- The given matrices are regular (each array shares the same number of elements contained) with variable lengths and number of arrays contained.
- The returned matrix must have the same dimensions of the original.
- The given `n` can be greater than the total number of elements inside the matrix (see example #4). Each time that you reach a complete shift cycle (so that every element is back in its original position, see example #3), you have to start again.
- This challenge was inspired by a comment of **@SwordAcolyte** on [this Python challenge](https://edabit.com/challenge/YzcnFjMEKQfyHAg6B)
