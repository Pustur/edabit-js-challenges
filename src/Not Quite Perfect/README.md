# Not Quite Perfect

`Math` `Numbers` `Validation`

[View on Edabit](https://edabit.com/challenge/WEhe9MCnyZG8WhN9Z)

A **perfect** number is a number that is equal to the sum of all its proper (non-self) divisors. Take 6 for example:

```
6 = 1 + 2 + 3
```

A number that is equal to the sum of all its proper divisors -- _provided that one of them is negative_ -- is not quite perfect, but **admirable**.

To illustrate. The proper divisors of 12 are 1, 2, 3, 4, 6, totalling 16. However, if 2 is negative, the total would be 12, the number itself. 12 is therefore an admirable number.

```
12 = 1 - 2 + 3 + 4 + 6
```

Create a function that takes a number `n` as input.

1.  If `n` is perfect, return `"Perfect"`.
2.  If `n` is admirable, return the proper divisor that must be rendered negative to make the sum of the proper divisors equal to `n`.
3.  If `n` is neither perfect nor admirable, return `"Neither"`.

### Examples

```js
admirable(6) ➞ "Perfect"

admirable(12) ➞ 2

admirable(18) ➞ "Neither"
```

### Notes

N/A
