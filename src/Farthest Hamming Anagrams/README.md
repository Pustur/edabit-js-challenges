# Farthest Hamming Anagrams

`Strings` `Validation`

[View on Edabit](https://edabit.com/challenge/exX3Y9T68wGvLEPHL)

An **anagram** is a word, x, formed by rearranging the letters that make up another word, y, and using up all the letters in y at the same frequency. For example, _"dear"_ is an anagram of _"read"_ and _"plead"_ is an anagram of _"paled"_.

The **Hamming distance** between two strings is the number of positions at which they differ. Hamming distances can only be calculated for strings of equal length.

```js
let s1 = 'eleven';

let s2 = 'twelve';
```

They only have the third position (index 2) in common, giving them a Hamming distance of 5.

As anagrams are of identical length, the Hamming distance between them can be calculated.

```js
let s1 = 'read';

let s2 = 'dear';
```

These strings differ at the first and last positions, giving them a Hamming distance of 2\. _"Plead"_ and _"paled"_ have a Hamming distance of 3.

Create a function that takes two strings, and returns:

- `true` if they are anagrams of each other and their Hamming distance is equal to their length (i.e. no letters in the same positions).
- `false` if they aren't anagrams, or
- Their Hamming distance if they are anagrams with >=1 letter at the same index.

### Examples

```js
maxHam("dear", "read") ➞ 2

maxHam("dare", "read") ➞ true

maxHam("solemn", "molest") ➞ false
```

### Notes

N/A
