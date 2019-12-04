# Simulate the Game "Rock, Paper, Scissors"

`Data Structures` `Games`

[View on Edabit](https://edabit.com/challenge/2n6kGrNsqpexmvJhQ)

Create a function which simulates the game "rock, paper, scissors". The function takes the input of both players (rock, paper or scissors), first parameter from first player, socond from second player. The function returns the result as such:

- "Player 1 wins"
- "Player 2 wins"
- "TIE" (if both inputs are the same)

The rules of rock, paper, scissors, if not known:

- Both players have to say either "rock", "paper" or "scissors" at the same time.
- Rock beats scissors, paper beats rock, scissors beat paper.

### Examples

```js
rps("rock", "paper") ➞ "Player 2 wins"

rps("paper", "rock") ➞ "Player 1 wins"

rps("paper", "scissors") ➞ "Player 2 wins"

rps("scissors", "scissors") ➞ "TIE"

rps("scissors", "paper") ➞ "Player 1 wins"
```

### Notes

There are several ways to solve this challenge.
