# The Antipodes Average

`Algorithms` `Arrays` `Math`

[View on Edabit](https://edabit.com/challenge/NJ5GkgQbshyDDX3bq)

In this challenge, you are given an array and you have to obtain a smaller array in turn, following three steps. You have to:

- Split the array into **two parts of equal length**. If the given array has an odd length, then you have to eliminate the number in the middle of the array for obtaining two equal parts.
- Sum each number of the first part with each number of the **reversed second part**, obtaining a new single array having the same length of the previous two.
- **Divide by two** each number in the final array.

Given an array of integers `arr`, implement a function that returns a new array applying the above algorithm.

### Examples

```js
antipodesAverage([1, 2, 3, 4]) ➞ [2.5, 2.5]
/*
Left part = [1, 2]
Reversed right part = [4, 3]
Array resulting from the sum of each pair = [5, 5]
Each number is divided by two = [2.5, 2.5]
*/

antipodesAverage([1, 2, 3, 4, 5]) ➞ [3, 3]
/*
The length of array is odd, number 3 (in the middle) is eliminated
Left = [1, 2]
Reversed right = [5, 4]
Sum = [6, 6]
Division by two = [3, 3]
*/

antipodesAverage([-1, -2]) ➞ [-1.5]
// (-1 + -2) / 2 = [-1.5]
```

### Notes

- Every given `arr` will contain at least two numbers.
- The numbers into the given `arr` will be always integers (either positives or negatives), but the numbers into the returned final array can be also float (either positives or negatives, see the examples #1 and #3).
- You can do three separated steps, or thinking at how the algorithm can be synthesized for obtaining the result.
