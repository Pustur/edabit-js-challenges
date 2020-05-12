# Height of the Tallest Building

`Arrays` `Strings`

[View on Edabit](https://edabit.com/challenge/rpTEWc6boQEgQB8D6)

Given an array of strings (depicting a skyline of _several buildings_), return _in meters_ the **height of the tallest building**. _Each line_ in the list represents **20m**.

### Examples

```js
tallestBuildingHeight([
  "            ##",
  "            ##",
  "            ##",
  "###   ###   ##",
  "###   ###   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "140m"

// Tallest building is 7 rows
// 7 x 20m = 140m

tallestBuildingHeight([
  "               ",
  "               ",
  "               ",
  "       #    ###",
  "      # #   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "80m"

// tallest building is 4 rows
// 4 x 20m = 80m

tallestBuildingHeight([
  "                              ",
  "                         ###  ",
  "                         ###  ",
  "###                    #####  ",
  "###      #             #####  ",
  "###     ###            #####  ",
  "######  ###            #######",
  "######  ######  ###    #######",
  "###################    #######",
  "###############################",
  "###############################"
]) ➞ "200m"

// Tallest building is 10 rows
// 10 x 20m = 200m
```

### Notes

- There may be some **open sky** above buildings (can't _just_ find the length of the array).
- There may be multiple tallest buildings (see example #2).
