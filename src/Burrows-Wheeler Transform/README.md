# Burrows-Wheeler Transform

`Cryptography` `Formatting` `Sorting` `Strings`

[View on Edabit](https://edabit.com/challenge/Sdj4jE7tHuoiyNKFv)

Burrows-Wheeler transform (BWT) is an algorithm which is used in data compression. Given a string `text`, BWT of `text` is a modified version of the string with same length as `text`. It can then be used to efficiently find substrings of `text` (which won't be covered here). We will just find the BWT of `text`.

1.  Build Burrows-Wheeler-Matrix (BWM) containing all rotations of `text`.
2.  Sort BWM lexicographically (\$ < a < b < ... < z).
3.  BWT is the last coloumn of BWM and gets returned.

```js
// Example with text = "banana$"

// BWM (all rotations of text):
banana$;
anana$b;
nana$ba;
ana$ban;
na$bana;
a$banan;
$banana;

// BWM sorted lexicographically:
$banana;
a$banan;
ana$ban;
anana$b;
banana$;
na$bana;
nana$ba;

// BWT (last coloumn of BWM):
annb$aa;
```

### Examples

```js
bwTransform("banana$") ➞ "annb$aa"

bwTransform("mississippi$") ➞ "ipssm$pissii"

bwTransform("acccgtttgtttcaatagatccatcaa$") ➞ "aacc$tacgttctaccatcaatatttgg"
```

### Notes

Consider "\$" as the terminator character at the end of every input `text`.
