# Strong Password

`Strings` `Validation`

[View on Edabit](https://edabit.com/challenge/XYDCXdCn6bqaT6SJm)

Create a function that determines the minimum number of characters needed to make a strong password.

A password is considered _strong_ if it satisfies the following criteria:

- Its length is at least 6.
- It contains at least one digit.
- It contains at least one lowercase English character.
- It contains at least one uppercase English character.
- It contains at least one special character: `!@#$%^&*()-+`

Types of characters in a form you can paste into your solution:

```js
const numbers = '0123456789';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const special = '!@#$%^&*()-+';
```

### Examples

```js
strongPassword('Ed1') ➞ 3

strongPassword('#Edabit') ➞ 1

strongPassword('W1llth!spass?') ➞ 0
```

### Notes

Try solving this without RegEx.
