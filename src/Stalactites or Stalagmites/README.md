# Stalactites or Stalagmites?

`Arrays` `Validation`

[View on Edabit](https://edabit.com/challenge/wGwXLHQCYXnjJ9DW9)

**Stalactites** hang from the ceiling of a cave while **stalagmites** grow from the floor.

Create a function that determines whether the input represents `"stalactites"` or `"stalagmites"`. If it represents both, return `"both"`. Input will be a 2D array, with `1` representing a piece of rock, and `0` representing air space.

### Examples

```js
mineralFormation([
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]) ➞ "stalactites"

mineralFormation([
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "stalagmites"

mineralFormation([
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "both"
```

### Notes

- There won't be any examples where both stalactites and stalagmites meet (because those are called pillars).
- There won't be any example of neither stalactites nor stalagmites.
