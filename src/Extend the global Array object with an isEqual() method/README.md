# Extend the global Array object with an `isEqual()` method

`Arrays`

[View on Edabit](https://edabit.com/challenge/ngX9LEmCvRq7ud7J5)

Extend the global Array object to have an instance method called `isEqual()`. The method should accept an array as the first argument, and a second optional argument that is a flag to ignore the order of the arrays. This second argument should default to `false`

### Examples

```js
[1, 2, 3].isEqual([1, 2, 3]) ➞ true

[1, 2, 3].isEqual([1, 3, 2]) ➞ false

[1, 2, 3].isEqual([1, 3, 2], true) ➞ true
```

### Notes

This method does not need to compare Arrays, Objects, and non-primitives. It just needs to consider numbers, booleans, and strings.
