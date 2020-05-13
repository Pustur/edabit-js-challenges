# Percentage of Box Filled In

`Arrays` `Logic` `Strings`

[View on Edabit](https://edabit.com/challenge/qYgE5kyLYuRve4Zap)

Create a function that calculates what percentage of the box is filled in. Give your answer as a string percentage rounded to the nearest integer.

### Examples

```js
percentFilled([
  "####",
  "#  #",
  "#o #",
  "####"
]) ➞ "25%"

// One element out of four spaces.

percentFilled([
  "#######",
  "#o oo #",
  "#######"
]) ➞ "60%"

// Three elements out of five spaces.

percentFilled([
  "######",
  "#ooo #",
  "#oo  #",
  "#    #",
  "#    #",
  "######"
]) ➞ "31%"

// Five elements out of sixteen spaces.
```

### Notes

- Only `"o"` will fill the box and also `"o"` will not be found outside of the box.
- Don't focus on how much physical space an element takes up, pretend that each element occupies one whole unit (which you can judge according to the number of `"#"` on the sides).
