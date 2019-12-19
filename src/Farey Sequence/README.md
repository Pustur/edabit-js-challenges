# Farey Sequence

`Math`

[View on Edabit](https://edabit.com/challenge/QKj3nR5yATPMCkSw7)

The Farey sequence of order _n_ is the set of all fractions with a denominator between 1 and n, reduced and returned in ascending order. Given _n_, return the Farey sequence as an array, with each fraction being represented by a string in the form "numerator/denominator".

### Examples

```js
farey(1) ➞ ["0/1", "1/1"]

farey(4) ➞ ["0/1", "1/4", "1/3", "1/2", "2/3", "3/4", "1/1"]

farey(5) ➞ ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "1/1"]
```

### Notes

The Farey sequence will always begin with "0/1" and end with "1/1".
