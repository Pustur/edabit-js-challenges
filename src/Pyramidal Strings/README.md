# Pyramidal Strings

`Formatting` `Math` `Strings`

[View on Edabit](https://edabit.com/challenge/4BKEcK9Y4WW6o64Mt)

In this challenge, you have to obtain a pyramidal version of a given string, thus transforming the string into an array containing a series of string slices that progressively increase or decrease **steadily** from the left to the right. Every slice containing two or more characters must have **a space between every pair of characters**, to permit an hypothetical vertical alignment. See the example below:

<!-- prettier-ignore-start -->
```js
// REGULAR pyramidal version of "EDABIT"

[ "E",
 "D A",
"B I T" ]
```
<!-- prettier-ignore-end -->

Depending on the given `type`, you have to obtain a **regular** pyramid starting from its vertex (`type === "REG"`) as in the example above, or a **reversed** pyramid starting from its base (`type === "REV"`) as in the example below:

<!-- prettier-ignore-start -->
```js
// REVERSED pyramidal version of "EDABIT"

["E D A",
  "B I",
   "T"  ]
```
<!-- prettier-ignore-end -->

Every pyramid must follow the same steadily increment/decrement of its slices (or rows) by exactly one character (excluding spaces), so that not every string can be transformed in a pyramid! See the example below:

<!-- prettier-ignore-start -->
```js
// Regular pyramidal version of "PYRAMID"

[ "P",
 "Y R",
"A M I" ]

// Letter "D" can't be placed in the pyramid
```
<!-- prettier-ignore-end -->

Given as parameters a `string` and a `type`, implement a function that returns:

- A string `"Error!"` if the pyramidal version can't be obtained from the given `string`.
- An array containing the regular pyramidal version of the `string` if the given `type` is equal to `"REG"`;
- An array containing the reversed pyramidal version of the `string` if the given `type` is equal to `"REV"`.

### Examples

```js
pyramidalString("EDABIT", "REG") ➞ ["E", "D A", "B I T"]

pyramidalString("EDABIT", "REV") ➞ ["E D A", "B I", "T"]

pyramidalString("PYRAMID", "REG") ➞ "Error!"

pyramidalString("!", "REV") ➞ ["!"]

pyramidalString("", "REG") ➞ "[]
```

### Notes

- If the given `string` has just one character, the returned array will contain that single character. If the given `string` is empty, the returned array will be empty.
- Remember to insert a space between every character inside the rows containing two or more characters.
- The increment and the decrement of the rows in a pyramidal string is equal to one character more or less than the previous, depending on the given `type`.
- You have to find a discriminant rule for establish if a string can be transformed into a pyramid, without creating single exceptions for every given case. What is suggesting you the shape of a pyramid seen frontally?
