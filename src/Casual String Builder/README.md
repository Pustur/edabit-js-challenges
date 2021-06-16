# Casual String Builder

`Conditions` `Formatting` `Regex` `Strings`

[View on Edabit](https://edabit.com/challenge/vZ5fXMmqfzXQ5dQBv)

The function is given a string with some square brackets in it. You need to build the outcome string using the rule: `k[substring]` is replaced by the `substring` inside the square brackets being repeated exactly `k` times.

### Examples

```js
stringBuilder("3[a]2[bc]") ➞ "aaabcbc"

stringBuilder("3[a2[c]]") ➞ "accaccacc"

stringBuilder("2[abc]3[cd]ef") ➞ "abcabccdcdcdef"
```

### Notes

`k` is a positive integer.
