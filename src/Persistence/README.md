# Persistence

`Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/hLZPoBBa745aWAsnm)

If you take an integer and form the product of it's individual digits, you get a smaller number. Keep doing this and eventually you end up with a single digit.

The number of steps it takes to reach this point is the integer's multiplicative persistence. For example, 347 has a persistence of 3: `3*4*7 = 84, 8*4 = 32, 3*2 = 6`.

Devise a function that returns the persistence of an integer.

### Examples

```js
persistence(9) ➞ 0

persistence(12) ➞ 1

persistence(6788) ➞ 6

persistence(678852) ➞ 2
```

### Notes

- The smallest number with persistence 11 is 277777788888899.
- A number has never been found, no matter how large, that has a persistence greater than 11.
