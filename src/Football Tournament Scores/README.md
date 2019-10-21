# Football Tournament Scores

`Data Structures` `Formatting` `Objects` `Sorting`

[View on Edabit](https://edabit.com/challenge/JunxyznafDQA8Yr38)

Four football teams face each other in a tournament and you must determine the final classification. Depending on the match result, a team gets a certain amount of points:

- A win is worth **3** points.
- A draw is worth **1** point.
- A defeat is worth **0** points.

Each team faces another once, for a total of six played games. For each game the result is provided with the following notation:

```
"Team X - X Team"
```

(_with X being the number of goals scored by both teams_)

```
"A 0 - 1 B" ➞ B wins and gets 3 points, A lose and gets 0 points
"C 2 - 2 D" ➞ It's a draw, both C and D get 1 point
```

At the end of the tournament, points are counted for each team. If two or more teams have the same number of points, two further criteria are applied to determine who gets the best placement, in the order:

- The greater number of goals scored.
- The greater goals difference (goals scored minus goals conceded).

Given an array `arr` containing strings with the results of the six played games, you have to implement a function that returns an array containing four arrays, one for each team, in the following notation:

```
[Team, PT, GS, GD]
```

- `Team`: A string, name of the team.
- `PT`: An integer, points obtained.
- `GS`: An integer, the sum of scored goals.
- `GD`: An integer, scored goals minus conceded goals (can be negative).

The main array containing the teams' info must be ordered in such a way as to present the correct placement of each team as if it were a summary of the final classification and performance.

### Examples

```js
tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"]) ➞ [ [ "B", 7, 5, 3 ], [ "C", 5, 6, 2 ], [ "D", 3, 3, -2 ], [ "A", 1, 3, -3 ] ]
// Final order is B, C, D, A. All teams have different points, so that a simple descendant sort by points obtained is enough.

tournamentScores([["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"]) ➞ [ [ "C", 6, 5, 2 ], [ "B", 6, 3, -2 ], [ "A", 3, 7, 1 ], [ "D", 3, 5, -1 ] ]
// Final order is C, B, A, D (C and B have same points, but C has more scored goals than B; A and D have same points but A has more scored goals than D).

tournamentScores([["A 2 - 1 B", "C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D"]) ➞ [ "A", 6, 5, 3 ], [ "D", 6, 5, 0 ], [ "C", 4, 4, 0 ], [ "B", 1, 4, -3 ]]
// Final order is A, D, C, B (A and D have same points and same number of scored goals, but A has a greater goals difference than D).
```

### Notes

- For the exercise scope, every given case is working with the given set of instructions, despite in real life football when teams share points, scored goals and goal difference, other criteria are used to determine the placement (sometimes even a coin toss!).
