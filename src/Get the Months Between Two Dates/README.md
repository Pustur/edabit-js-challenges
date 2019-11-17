# Get the Months Between Two Dates

`Arrays` `Dates` `Sorting`

[View on Edabit](https://edabit.com/challenge/JhQ8qCptpTbZMvnRz)

Create a function that, given 2 dates, returns the names of the months that are present between them (inclusive).

## Examples

**Input**

```js
var january = new Date(2017, 0, 1);
var march = new Date(2017, 2, 1);

monthsInterval(january, march);
```

**Output**

```js
['January', 'February', 'March'];
```

**Input**

```js
var december = new Date(2017, 11, 1);
var january = new Date(2018, 0, 1);

monthsInterval(december, january);
```

**Output**

```js
['January', 'December'];
```

**Input**

```js
var january2017 = new Date(2017, 0, 1);
var january2018 = new Date(2018, 0, 1);

monthsInterval(january2017, january2018);
```

**Output**

```js
[
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
```

(Notice that January is **not** duplicated!)

## Notes

- The returned array should include the months of `dateStart` and `dateEnd` (inclusive)
- The returned array **must not** include duplicate values
- The month names returned by the function should be sorted (not alphabetically, but ordered by which comes first (January = 1st month, February = 2nd month, … , December = 12th month))
- The function should produce the same output even if `dateStart` is greater than `dateEnd`
