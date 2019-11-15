# Password Validation

`Conditions` `Regex` `Validation`

[View on Edabit](https://edabit.com/challenge/JYyXdP5WBmDiL8LvT)

Create a function that validates a password to conform to the following rules:

- Length between 6 and 24 characters.
- At least one uppercase letter (A-Z).
- At least one lowercase letter (a-z).
- At least one digit (0-9).
- Maximum of 2 repeated characters.
  - "aa" is OK 👍
  - "aaa" is NOT OK 👎
- Supported special characters:
  - `! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .`

### Examples

```js
validatePassword("P1zz@") ➞ false
// Too short.

validatePassword("iLoveYou") ➞ false
// Missing a number.

validatePassword("Fhg93@") ➞ true
// OK!
```

### Notes

N/A
