# Stems and Leaves

`Data Structures` `Formatting` `Numbers`

[View on Edabit](https://edabit.com/challenge/ZAGhB6otwk54JB8FA)

In statistics a stem-and-leaf plot is a graphical representation of values distribution in a dataset, usually implemented for a small set of values. In this exercise we'll build a simple plot for positive integer values following the steps below.

1. You must separate each value in two parts: the **stem, equal to all number digits but last** and the **leaf, equal to the last digit**. For numbers in range 0-9 you must add a "0" at the start. _Examples_:

- 4872: stem is "487", leaf is "2"
- 429: stem is "42", leaf is "9"
- 85: stem is "8", leaf is "5"
- 1: stem is "0", leaf is "1"

2. Insert in the plot the **stems without duplicate values in ascending order**, and for every stem **every proper leaf in ascending order**. _Examples for a dataset containing 22, 22, 13, 11, 11_:

- Stems are 1 and 2 (no duplicates in ascending order);
- Leaves for stem 1 are 1, 1 and 3 (every leaf in ascending order), leaves for stem 2 are 2 and 2

Given an array of positive integers you must return the stem-and-leaf plot as an array of formatted strings with **stem and leaves separated by " I " (spaces included)** and **leaves in ascending order separated by a space between them**.

### Examples

```js
stemPlot([111, 11, 1]) ➞ ["0 | 1", "1 | 1", "11 | 1"]

stemPlot([4, 8, 75]) ➞ ["0 | 4 8", "7 | 5"]

stemPlot([22, 22, 38, 22, 19]) ➞ ["1 | 9", "2 | 2 2 2", "3 | 8"]
```

### Notes

- Every given array is a valid one containing only positive integers, no exceptions to handle.
- Pay attention to leading and trailing zeroes.
- You can find more info about stem-and-leaf plots in the **Resources** tab.
