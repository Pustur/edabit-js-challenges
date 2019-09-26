# String Cleaver

`Strings` `Validation`

[View on Edabit](https://edabit.com/challenge/y7xoBP9bgHRNTcELK)

Create a function that takes a string (without spaces) and a word array, cleaves the string into words based on the array, and returns the correctly spaced version of the string (a sentence). If a section of the string is encountered that can't be found on the word array, return `"Cleaving stalled: Word not found"`.

### Examples

```js
const words = ["about", "be", "hell", "if", "is", "it", "me", "other", "outer", "people", "the", "to", "up", "where"]

cleave("ifitistobeitisuptome", words) ➞ "if it is to be it is up to me"

cleave("hellisotherpeople", words) ➞ "hell is other people"

cleave("hellisotterpeople", words) ➞ "Cleaving stalled: Word not found"
```

### Notes

Words in the `words` array can appear more than once in the string. The `words` array is a reference guide, kind of like a dictionary that lists which words are allowed.
