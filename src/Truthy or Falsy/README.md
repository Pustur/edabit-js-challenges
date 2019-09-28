# Truthy or Falsy?

`Conditions` `Control Flow` `Language Fundamentals` `Validation`

[View on Edabit](https://edabit.com/challenge/czEAQio8zr9HjZsQn)

A "truthy" value is a value that translates to `true` when evaluated in a Boolean context. All values are truthy unless they're defined as falsy.

All falsy values are as follows:

- `false`
- `null`
- `undefined`
- `0`
- `NaN`
- `""`

Create a function that takes an argument of any data type and returns `1` if it's truthy and `0` if it's falsy.

### Examples

```js
isTruthy(0) ➞ 0

isTruthy(false) ➞ 0

isTruthy("") ➞ 0

isTruthy("false") ➞ 1
```

### Notes

- Don't forget to `return` the result.
- If you get stuck on a challenge, find help in the **Resources** tab.
- If you're _really_ stuck, unlock solutions in the **Solutions** tab.
