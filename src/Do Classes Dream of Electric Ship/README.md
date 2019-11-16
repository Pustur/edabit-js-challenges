# Do Classes Dream of Electric Ship?

`Arrays` `Classes` `Data Structures` `Games`

[View on Edabit](https://edabit.com/challenge/pbeqf95r3H4PRQKJr)

In this challenge, you have to build a Class that will store and manipulate the data of a simplified clone of **Battleship**, the popular strategy game.

### The board

The game is played on a square board, **5x5** sized. The rows of the grid are identified by uppercased letters from **A to E** (from top to bottom), and the columns are identified by numbers from **1 to 5** (from left to right).

### Rules of the game

- There are two types of ship: the **Patrol** and the **Cruiser**. The Patrol occupies a single cell, the Cruiser occupies two cells, horizontally or vertically.
- Three Patrols and three Cruisers will be placed randomly in the grid, **without ships adjacent in rows and columns**. (see the **Notes**).
- The user _calls_ six different cells, trying to guess if there's a Patrol or a Cruiser in it.
- Hits and misses are recorded in the board. For every hit Patrol or Cruiser, a point is gained, and if a Cruiser is sunk, two additional points are gained.

### The Class `Battleship`

Each instance in the Test Cases tab will be declared with two variable parameters, so that the constructor has to be initialized with:

- `scheme` is the link to an array containing **9** strings being the coordinates indicating where the ships are placed in the grid;
- `input` is the link to an array containing **6** strings being the guesses made by the user;

### What do you have to implement

The Test Cases will verify the existence and the correctness of the data through an instance that will use the `Battleship` Class created by you, calling its four different methods:

- `board()` will return the final state of the board, based on the ships placement and the results of the user guesses, as a matrix of 5x5 size. To represent the graphic of the game, you will use four different characters:

  - ○ ➞ is a blank space on the board;
  - ● ➞ is a space occupied by a ship;
  - ☼ ➞ is a miss (wrong guess);
  - ☀ ➞ is a hit (a correct guess).

- `hits()` will return the **total number of hits** made by the user (correct guesses), either on Patrols or on Cruisers.

- `sunk()` will return the **total number of sunk** Cruisers (two adjacent guesses, in horizontal or vertical).
- `points()` will return the **total number of points** gained by the user (1 for every hit, 2 for every sunk Cruiser)

### Examples

```js
// scheme =
[ "A1", "C1", "B2",
"B3", "D2", "E2",
"E4", "E5", "A5" ];

// input = ["A1", "B2", "C3", "D4", "E5", "E4"];

battleship.board() ➞
[ [☀, ○, ○, ○, ●],
[○, ☀, ●, ○, ○],
[●, ○, ☼, ○, ○],
[○, ●, ○, ☼, ○],
[○, ●, ○, ☀, ☀] ]

battleship.hits() ➞ 4
// Total hits

battleship.sunk() ➞ 1
// Sunk Cruisers, not Patrols

battleship.points() ➞ 6
// Hits + Additional points given by Sunk Cruisers
```

### Notes

- If two cruisers are in the same row or in the same column, there will be a blank cell between them, so that it will be possible treat them as different ships.
- The board **is not** given, you have to build it.
- In the **Example** section, the symbols of the board are not between quotation marks for readability scopes, but they are strings. The set of the characters used for the challenge is already in the **Code** tab.
