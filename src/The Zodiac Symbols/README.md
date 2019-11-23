# The Zodiac Symbols

`Arrays` `Dates`

[View on Edabit](https://edabit.com/challenge/zfFDATiTLm6CgmGzf)

In the Western astrology, there are twelve possible date intervals for establishing the zodiac sign of a person, with each sign having its own symbol.

| Sign        | Symbol | Interval                  |
| ----------- | ------ | ------------------------- |
| Aries       | ♈     | March 21 – April 20       |
| Taurus      | ♉     | April 21 – May 21         |
| Gemini      | ♊     | May 22 – June 21          |
| Cancer      | ♋     | June 22 – July 22         |
| Leo         | ♌     | July 23 – August 22       |
| Virgo       | ♍     | August 23 – September 23  |
| Libra       | ♎     | September 24 – October 23 |
| Scorpio     | ♏     | October 24 – November 22  |
| Sagittarius | ♐     | November 23 – December 21 |
| Capricorn   | ♑     | December 22 – January 20  |
| Aquarius    | ♒     | January 21 – February 19  |
| Pisces      | ♓     | February 20 – March 20    |

Givem a string `dob` being a date of birth in the U.S. full format, implement a function that returns the related zodiac **symbol** accordingly to the table above.

### Examples

```js
zodiacSymbol("May 9, 1951") ➞ "♉"
// Taurus

zodiacSymbol("October 31, 1977") ➞ "♏"
// Scorpio

zodiacSymbol("January 19, 1985") ➞ "♑"
// Capricorn
```

### Notes

- A list of the Unicode characters to return is already given in the **Code** tab.
- In each date interval listed into the table, the starting date and the end date are the inclusive bounds of the range to consider.
