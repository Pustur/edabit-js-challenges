# Simon Says

`Arrays` `Numbers` `Strings`

[View on Edabit](https://edabit.com/challenge/DxAhwhR3cxiHK9E4d)

Simon asks you to perform operations on an array of numbers that **only he tells you**. You should ignore all other instructions given. Create a function which evaluates an array of commands (written in plain English) if the command begins with **Simon says**. Return the result as an integer.

### Examples

```js
simonSays([
  "Simon says add 4",
  "Simon says add 6",
  "Then add 5"
]) ➞ 10

simonSays([
  "Susan says add 10",
  "Simon says add 3",
  "Simon says multiply by 8"
]) ➞ 24

simonSays([
  "Firstly, add 4",
  "Simeon says subtract 100"
]) ➞ 0
```

### Notes

- If no instructions are given by Simon, return `0`.
- For the sake of simplicity, there will be no command for **dividing**.
