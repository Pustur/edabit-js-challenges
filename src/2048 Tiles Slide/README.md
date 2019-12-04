# 2048 Tiles Slide

`Algorithms` `Arrays` `Games` `Loops`

[View on Edabit](https://edabit.com/challenge/jmamZufrqZkhH7ZLM)

**2048** is a game where you need to slide numbered tiles (natural powers of 2) up, down, left or right on a square grid to combine them in a tile with the number 2048.

The sliding procedure is described by the following rules:

- Tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid.
- If two tiles of the same number collide while moving, they will merge into a tile with the total value of the two tiles that collided.
  - If more than one variant of merging is possible, move direction shows one that will take effect.
- Tile cannot merge with another tile more than one time.

Sliding is done almost the same for each direction and for each row/column of the grid, so your task is to implement only the left slide for a single row.

### Examples

```js
leftSlide([2, 2, 2, 0]) ➞ [4, 2, 0, 0]
// Merge left-most tiles first.

leftSlide([2, 2, 4, 4, 8, 8]) ➞ [4, 8, 16, 0, 0, 0]
// Only merge once.

leftSlide([0, 2, 0, 2, 4]) ➞ [4, 4, 0, 0, 0]

leftSlide([0, 2, 2, 8, 8, 8]) ➞ [4, 16, 8, 0, 0, 0]
```

### Notes

- Input row can be of any size (empty too).
- Input row will contain only natural powers of 2 and 0 for empty tiles.
- Keep trailing zeros in the output.
