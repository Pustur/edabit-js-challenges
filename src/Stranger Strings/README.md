# Stranger Strings

`Formatting` `Regex` `Sorting` `Strings`

[View on Edabit](https://edabit.com/challenge/vZ64kq7i28seXgXRK)

In this challenge, every given string is made of three types of characters: blank spaces, digits, and strangers.

```
The Digits ➞ 0 1 2 3 4 5 6 7 8 9

The Strangers ➞ 𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡
```

The goal is to remove the spaces, to separate the digits from the strangers, and to apply another transform in the two separated groups **without** using the `.replace()` string method.

Given a string `str`, implement a function that returns an array containing two values, in the order:

- An `integer` being the **sum of all digits**. If the given string has no digits, the sum will be equal to zero.
- A `string` containing the strangers, sorted in **decrescent order**. If the given string has no strangers, the returned string will be an empty one.

**Try doing this without using** `String.replace()`

### Examples

```js
strangerStrings("𝟚2 𝟛3 𝟘0 𝟙1") ➞ [ 6, "𝟛𝟚𝟙𝟘" ]

strangerStrings("𝟝 𝟚003   9") ➞ [ 12, "𝟝𝟚" ]

strangerStrings("32   000𝟜0 0 00𝟙𝟟") ➞ [ 5, "𝟟𝟜𝟙" ]
```

### Notes

- All given strings are valid, containing only the set of characters specified in the instructions: don't worry about validation handling.
- Credits: this was inspired by a comment (**@aligejtor**) on [this challenge](https://edabit.com/challenge/nBW6ubsQCurPvhpWc).
