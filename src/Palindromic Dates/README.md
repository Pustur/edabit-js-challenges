# Palindromic Dates

`Dates` `Strings` `Validation`

[View on Edabit](https://edabit.com/challenge/TmoJMiKP7iuckJHbQ)

The _2nd of February 2020_ is a palindromic date in _both_ **dd/mm/yyyy** and **mm/dd/yyyy** format _(02/02/2020)_. Given a date in **dd/mm/yyyy** format, return `true` if the date is **palindromic** in **both date formats**.

### Examples

```js
palindromicDate("02/02/2020") ➞ true

palindromicDate("11/12/2019") ➞ false

palindromicDate("11/02/2011") ➞ false
// Although 11/02/2011 is palindromic in dd/mm/yyyy format,
// it isn't in mm/dd/yyyy format (02/11/2011)
```

### Notes

All dates will be valid in both date formats.
