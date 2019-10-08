# Magic Sigil Generator

`Formatting` `Loops` `Regex` `Strings`

[View on Edabit](https://edabit.com/challenge/kqup45hRWqWQ7LqDm)

A magic sigil is a glyph which represents a desire one wishes to manifest in their lives. There are many ways to create a sigil, but the most common is to write out a specific desire (e.g. "_I HAVE WONDERFUL FRIENDS WHO LOVE ME_"), remove all vowels, remove any duplicate letters and then design a glyph from what remains.

Using the sentence above as an example, we would remove duplicate letters:

```
AUFRINDSWHLOVME
```

And then remove all vowels, leaving us with:

```
FRNDSWHLVM
```

Create a function that takes a string and removes its vowels and duplicate letters. The returned string should not contain any spaces and be in uppercase.

### Examples

```js
sigilize("i am healthy") ➞ "MLTHY"

sigilize("I FOUND MY SOULMATE") ➞ "FNDYSLMT"

sigilize("I have a job I enjoy and it pays well") ➞ "HVBJNDTPYSWL"
```

### Notes

When performing actual sigil magic, you MUST make your sigils manually. Check the **Resources** tab for more info on sigils if you're interested in the concept.
