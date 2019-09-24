# Find the Shortest Word(s) in a Sentence

`Language Fundamentals` `Loops` `Regex` `Strings`

[View on Edabit](https://edabit.com/challenge/mYJPkSLLxWthSffR6)

Create a function that accepts a string as an argument. Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).

### Examples

```js
findShortestWords("I think the solution is fairly obvious.") ➞ ["i"]

findShortestWords("Chase two rabbits, catch none.") ➞ ["two"]

findShortestWords("We become what we think about.") ➞ ["we", "we"]

findShortestWords("The quick brown fox jumped over the lazy dogs back.") ➞ ["fox", "the", "the"]
```

### Notes

- Periods, commas and other special characters don't count as part of a word's length.
- Remember to sort the array of words alphabetically before returning your result.
- Return words in lowercase only.
