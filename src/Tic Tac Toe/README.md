# Tic Tac Toe

`Arrays` `Games` `Logic` `Numbers`

[View on Edabit](https://edabit.com/challenge/jsukwFKLKJx2qLs5b)

Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for `"X"`, `"O"`, or a `"Draw"`, where `"X"` and `"O"` represent themselves on the matrix, and `"E"` represents an empty spot.

### Examples

```js
ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
]) ➞ "X"

ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"

ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"
```

### Notes

Make sure that if **O** wins, you return the letter `"O"` and not the integer **0** (zero) and if it's a draw, make sure you return the capitalised word `"Draw"`. If you return `"X"` or `"O"`, make sure they're capitalised too.
