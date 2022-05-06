# Reversible Inclusive List Ranges

`Loops` `Math` `Numbers` `Scope`

[View on Edabit](https://edabit.com/challenge/2HZ8DqCaZxLHN6cP6)

Write a function that, given the `start` and `end` values, returns an array containing all the numbers **inclusive** to that range. See examples below.

### Examples

```js
reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]

reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

reversibleInclusiveList(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

reversibleInclusiveList(24, 17) ➞ [24, 23, 22, 21, 20, 19, 18, 17]
```

### Notes

- The sort order of the resulting array is dependent of the input values.
- All inputs provided in the test scenarios are valid.
- If `start` is greater than `end`, return a **descendingly** sorted array, otherwise, **ascendingly** sorted.
- A recursive version of this challenge can be found [here](https://edabit.com/challenge/LKTiopxKdDRARMvri).
