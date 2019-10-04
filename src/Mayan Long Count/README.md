# Mayan Long Count

`Dates` `Formatting` `Math`

[View on Edabit](https://edabit.com/challenge/7d9iv4QuC7egSzqQG)

Ever heard about _13.0.0.0.0_ and the end of the world? The Maya civilization used to record the passed days from their mythological creation date (11 August 3114BC in the proleptic Gregorian calendar is the most accredited date) with a system that nowadays is called "The Long Count".

Days were recorded in a 5-place counter with a mixed _base20_ and _base18_ system. Starting from the left the names and values of the counter-places are:

- **Baktun** = 20 Katun = 144000 days (from 1 to 13)
- **Katun** = 20 Tun = 7200 days (from 0 to 19)
- **Tun** = 18 Uinal = 360 days (from 0 to 19)
- **Uinal** = 20 Kin = 20 days (from 0 to 17)
- **Kin** = 1 day (from 0 to 19)

A complete calendar cycle is equal to 1872000 days (13 Baktun).

The initial total Kin number is equal to the passed days from starting point to the date of interest less 365. Then, for every counter place, the value is obtained **dividing the Kin by the corresponding counter-place days value** (144000 for Baktun, 7200 for Katun, and so on) with **the Kin that at every step becomes the remainder of the division**.

Given a date as a string you must return a string representing the Mayan Long Count Date, joining the values of Baktun, Katun, Tun, Uinal and Kin with a dot between them.

### Examples

```js
getMayanDate("2012, 12, 21") ➞ "13.0.0.0.0"
//Whole part of 1872000 passed days / Baktun = 13, Kin (remainder) is 0

getMayanDate("1776, 7, 4") ➞ "12.8.0.1.13"
//Whole part of 1785633 passed days / Baktun = 12, Kin (remainder) is 57633
//Whole part of Kin / Katun = 8, Kin is now 33.
//Whole part of Kin / Tun = 0, Kin is  33.
//Whole part of Kin / Uinal = 1, Kin is 13.

getMayanDate("1200, 1, 1") ➞ "10.18.15.3.8"
```

### Notes

- The starting date is already in the **Code** tab.
- Remember to subtract 365 days from the total passed days before starting calculations.
- Kin is _literally_ a variable that changes at every step.
- Given dates are in the "YYYY, MM, DD" format.
- In the **Resources** tab you can find more info about the Mayan Long Count and a tool for calculate it given any date.
