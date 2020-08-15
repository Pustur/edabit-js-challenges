# ASCII Capitals

`Formatting` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/qfFpvDpeKb9f68x64)

Each character in the English Alphabet has an ASCII Char Code.

Given a sentence, return the sentence with one change:

For a word, if the sum of its letter's char codes is above the global average sum of char codes (i.e if the sum of char codes for a word is 205) and on average, a word in the sentence has a char code sum of 189, capitalise the word.

For example:

| Word | Tell | me  | the | time |
| ---- | ---- | --- | --- | ---- |
| Sum  | 401  | 210 | 321 | 431  |

Since on average, a word in this sentence has a char code sum of 340.75, "Tell" & "time" would be returned capitalised: `"TELL me the TIME"`

### Examples

```js
averageASCII("Tell me the time") ➞ "TELL me the TIME"
// Global Average for char code sum of a word is 340.75

averageASCII("To be or not to be") ➞ "To be or NOT to be"
// Global Average for char code sum of a word is 230.33

averageASCII("Edabit helps you learn in bitesize chunks") ➞ "EDABIT HELPS you learn in BITESIZE CHUNKS"
// Global Average for char code sum of a word is 533.43
```

### Notes

- Do _not_ count whitespace as part of a word.
- There will be no punctuation/special characters in the tests.
- If a word does not meet the capitalisation citeria, don't fully lowercase it ⁠— leave it how it is (i.e. the first words of a sentence should not be fully lowercased if they don't meet the criteria).
- The char code of a capital letter will be different than its lowercase counterpart.
- When you find the global average, it may help to round it to 2 decimal places, _then_ compare against it.
