# Is It a Right-Angled Triangle?

`Math` `Validation`

[View on Edabit](https://edabit.com/challenge/LgD9W3uCRBXow6s5e)

Find out if a right-angled triangle can be made given some facts about the shape.

- Given varying information about a shape, create a function that returns `true` if the shape could be a right-angle triangle and `false` if not.
- You will be given an array of numbers and a string stating whether the numbers are angles or sides.
- The information may indicate more than one possible shape, but we just need to know if these details could be found in a right-angled triangle.

### Examples

```js
isRightAngle([30, 60], "angle") ➞ true
// A third angle could be 90

isRightAngle([20, 20, 20, 20], "angle") ➞ false
// More than 3 sides

isRightAngle([4, 5, 3], "side") ➞ true
// 3**2 + 4**2 = 5**2

isRightAngle([4, 5], "side") ➞ true
// Third side may be 3
```

### Notes

Check the **Resources** for more info on right-angle triangles.
