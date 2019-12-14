# Bowling Scorekeeping

`Games` `Numbers`

[View on Edabit](https://edabit.com/challenge/Snuathy8yB6yHCqf9)

Tenpin bowling scores can range from 0 (all gutter balls) to 300 (a perfect game). If you are unfamiliar with scorekeeping, please see the **Resource** for a quick description.

A complete record of a 10 frame bowling game can be given as an array of the number of pins knocked down by each ball in sequence from beginning to the end of the game.

Create a function whose argument is such an array. The function should return the final score.

### Examples

```js
bowling([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) ➞ 300

bowling([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]) ➞ 80

bowling([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]) ➞ 150

bowling([10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10]) ➞ 200
```

### Notes

The number of balls thrown for a complete game can vary from 11 to 21 depending on the number of strikes thrown.
