# Volume of a Pizza

`Language Fundamentals` `Math`

[View on Edabit](https://edabit.com/challenge/zuXtbkRZnDnnkf3i4)

Tom is a very methodic guy that loves geometry and pizza: he loves them so much that, before eating a pizza, he calculates its radius and its height. Now, he wants to know from you the total volume of pizza that he swallowed!

You are given the two parameters that Tom measured:

- The `radius`;
- The `height`;

He tells you that if you multiply the height for the **square** of the radius and multiply the result for the mathematical constant **π** (Pi), you will obtain the total volume of the pizza. Implement a function that returns the volume of the pizza as a whole number, rounding it to the nearest integer (and rounding up for numbers with `.5` as decimal part).

### Examples

```js
volPizza(1, 1) ➞ 3
// (radius²  x  height  x  π) = 3.14159... rounded to the nearest integer

volPizza(7, 2) ➞ 308

volPizza(10, 2.5) ➞ 785
```

### Notes

- This challenge requires the knowledge of some language fundamentals related to math: the `Math` object methods. Find help in the **Resources** tab if you don't know them or if you still aren't confident with these concepts.
- If you're really stuck, unlock solutions in the **Solutions** tab.
- For the experienced users: try to be creative!
