# Seasons on Earth

`Conditions` `Data Structures` `Dates`

[View on Edabit](https://edabit.com/challenge/4d4RamC7mArPEwHpX)

In this challenge, you are given a date and you have to determine the correspondent season in a certain emisphere of Earth.

You have to use the ranges given by the **metereological seasons** definition, accordingly to the following table:

| Start        | End            | North Emisphere | South Emisphere |
| ------------ | -------------- | --------------- | --------------- |
| March, 1     | May, 31        | Spring          | Autumn          |
| June, 1      | August, 31     | Summer          | Winter          |
| September, 1 | November, 30   | Autumn          | Spring          |
| December, 1  | February, 28\* | Winter          | Summer          |

_\* During leap years the end date is February, 29_

Given two strings `emisphere` (can be `"N"` for the North emisphere or `"S"` for the South emisphere) and `date` (name and day of the month), implement a function that returns a string with the season name, accordingly to the table above.

### Examples

```js
emisphereSeason("N", "June, 30") ➞ "Summer"

emisphereSeason("N", "March, 1") ➞ "Spring"

emisphereSeason("S", "September, 22") ➞ "Spring"
```

### Notes

N/A
