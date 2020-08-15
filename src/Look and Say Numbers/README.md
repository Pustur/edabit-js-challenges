# Look and Say Numbers

`Algorithms` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/iKdJfMrxkWsBcEKEL)

Given a number with _an even number of digits_, return a new number according to the rules below:

- Split the number into groups of two digit numbers. If the number has an _odd_ number of digits, return `"invalid"`.
- For each group of two digit numbers, concatenate the _last digit_ to a string to the same number of times as the value of the _first digit_.
- Return the result as an _integer_.

```js
lookAndSay(3132) ➞ 111222

// By reading the number digit by digit, you get three "1" and three "2".
// Therefore, you put three ones and three two's together.
// Remember to return an integer.
```

### Examples

```js
lookAndSay(95) ➞ 555555555

lookAndSay(1213141516171819) ➞ 23456789

lookAndSay(120520) ➞ 200

lookAndSay(231) ➞ "invalid"
```

### Notes

- Note that the number **0** can be included (see example #3).
- Check the **Resources** tab for a TED-Ed video for extra clarity.
