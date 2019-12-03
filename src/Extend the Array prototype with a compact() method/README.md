# Extend the Array prototype with a `compact()` method

`Arrays`

[View on Edabit](https://edabit.com/challenge/SNornDmdQ7ZJngoTn)

Extend the global Array object to have an instance method named `compact()` which returns a copy of the array without duplicate entries, and falsey values (with the exception of `0` and `false`).

### Examples

```js
[1, 2, 2, 3, 4, 4, 5].compact() ➞ [1, 2, 3, 4, 5]

[true, false, true, false].compact() ➞ [true, false]

[0, "hello", undefined, 17.2].compact() ➞ [0, "hello", 17.2]

[null, 0, undefined, 1, "h", "", 892].compact() ➞ [0, 1, "h", 892]
```

### Notes

This does not need to consider / work with objects, arrays, or non-primitive types as entries. Bonus if it does though!
