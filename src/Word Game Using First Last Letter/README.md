# Word Game Using First/Last Letter

`Arrays` `Games` `Strings`

[View on Edabit](https://edabit.com/challenge/pgN9GtB8GacdGAcDy)

Create a function that takes an array of player 1's words `p1` and an array of player 2's words `p2`. Player 1 will always play first and will give a word. Player 2 must then give another word that begins with the end letter of the last word used. The first player to use a duplicate word, or use a word that does not begin with the last word's end, loses.

### Examples

```js
wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "round"]) ➞ "Player 1 wins!"
// Round does not begin with "g".

wordGame(["edabit", "yellow", "growing", "dart", "tangy"], ["tangy", "wedding", "ground", "toast", "yellow"]) ➞ "Player 2 wins!"
// Although player 2 repeated "yellow", player 1 repeated "tangy" first.

wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "ground"]) ➞ "Game Continues..."
// No winner yet.
```

### Notes

All words will be lowercase and there will be equal words used by each player, regardless of whether a player has won.
