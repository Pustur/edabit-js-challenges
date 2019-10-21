# Time Around the World

`Dates` `Formatting`

[View on Edabit](https://edabit.com/challenge/5fN46pGqkjd9EQXca)

In this challenge, the goal is to calculate what time it is in two different cities. You're given a string `cityA` and the related string `timestamp` (time in `cityA`) with the date formatted in full **U.S. notation**, as in this example:

```
"July 21, 1983 23:01"
```

You have to calculate the corresponding time in `cityB` and return a new timestamp with date formatted in **ISO_8601 notation**, as in this example:

```
"1983-7-22 23:01"
```

See the table below for a list of given cities and their **GMT** (_Greenwich Mean Time_) hours offsets.

| GMT     | City         |
| ------- | ------------ |
| - 08:00 | Los Angeles  |
| - 05:00 | New York     |
| - 04:30 | Caracas      |
| - 03:00 | Buenos Aires |
| 00:00   | London       |
| + 01:00 | Rome         |
| + 03:00 | Moscow       |
| + 03:30 | Tehran       |
| + 05:30 | New Delhi    |
| + 08:00 | Beijing      |
| + 10:00 | Canberra     |

### Examples

```js
timeDifference("Los Angeles", "April 1, 2011 23:23", "Canberra") ➞ "2011-4-2 17:23"
// Can be a new day.

timeDifference("London", "July 31, 1983 23:01", "Rome") ➞ "1983-8-1 00:01"
// Can be a new month.

timeDifference("New York", "December 31, 1970 13:40", "Beijing") ➞ "1971-1-1 02:40"
// Can be a new year.
```

### Notes

- Pay attention to hours and minutes, a leading `0` is needed in the returned timestamp when they're a single digit.
- Pay attention to cities with half hours offsets.
