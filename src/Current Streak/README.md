# Current Streak

`Dates` `Games` `Loops` `Objects`

[View on Edabit](https://edabit.com/challenge/QxdWqug8d8vkMtobH)

Create a function that takes the current day (e.g. `"2019-09-30"`), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

### Examples

```js
currentStreak("2019-09-23", [
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-21"
  },
  {
    "date": "2019-09-22"
  },
  {
    "date": "2019-09-23"
  }
]) ➞ 3

currentStreak("2019-09-25", [
  {
    "date": "2019-09-16"
  },
  {
    "date": "2019-09-17"
  },
  {
    "date": "2019-09-21"
  },
  {
    "date": "2019-09-22"
  },
  {
    "date": "2019-09-23"
  }
]) ➞ 0
```

### Notes

- The array of dates is sorted chronologically.
- The `today` parameter will always be greater than or equal to the last date in the array.
- An empty array should return `0`.
