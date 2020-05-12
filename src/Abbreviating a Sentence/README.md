# Abbreviating a Sentence

`Formatting` `Strings`

[View on Edabit](https://edabit.com/challenge/ktqDpdPrFApaQpcCi)

Create a function which takes a `sentence` and returns its abbreviation. Get all of the words over or equal to `n` characters in length and return the first letter of each, _capitalised_ and overall returned as a single string.

### Examples

```js
abbreviate("do it yourself") ➞ "Y"

abbreviate("do it yourself", 2) ➞ "DIY"
// "do" and "it" are included because the second parameter specified that word lengths 2 are allowed.

abbreviate("attention AND deficit OR hyperactivity THE disorder")➞ "ADHD"
// Words below the default 4 characters are not included in the abbreviation.

abbreviate("the acronym of long word lengths", 5) ➞ "AL"
// "acronym" and "lengths" have 5 or more characters.
```

### Notes

There may not be an argument given for `n` so set the default to `4`.
