# Truncate String at a Given Length

`Formatting` `Strings`

[View on Edabit](https://edabit.com/challenge/pYSX8duMGhQCM3mWZ)

Create a function that takes a string (the string to truncate) and a number (the _maximum_ length of the truncated string) as arguments and returns the truncated string at the given length.

### Examples

```js
truncate("Lorem ipsum dolor sit amet.", 11) ➞ "Lorem ipsum"

truncate("Lorem ipsum dolor sit amet.", 16) ➞ "Lorem ipsum"

truncate("Lorem ipsum dolor sit amet.", 17) ➞ "Lorem ipsum dolor"
```

### Notes

- To "truncate" means _"to shorten by cutting off the top or end"_.
- If a word is trucated in the middle, discard it in the output (see 2nd example above).
