# The Fiscal Code

`Algorithms` `Formatting` `Objects` `Strings`

[View on Edabit](https://edabit.com/challenge/Pa2rHJ6KeRBTF28Pg)

Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (_Codice Fiscale_). _See **Resources** tab for more info_.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

- Generate 3 capital letters from the **surname**. If it has:

  - **At least 3 consonants** then **the first three consonants are used**. (_Newman -> NWM_)
  - **Less than 3 consonants** then **vowels will replace missing characters in the same order they appear** (_Fox -> FXO | Hope -> HPO_)
  - **Less than three letters** then **"X" will take the third slot after the consonant and the vowel** (_Yu -> YUX_)

- Generate 3 capital letters from the **name**. If it has:

  - **Exactly 3 consonants** then **consonants are used in the order they appear** (_Matt -> MTT_)
  - **More than 3 consonants** then **first, third and fourth consonant are used** (_Samantha -> SNT | Thomas -> TMS_)
  - **Less than 3 consonants** then **vowels will replace missing characters in the same order they appear** (_Bob -> BBO | Paula -> PLA_)
  - **Less than three letters** then **"X" will take the the third slot after the consonant and the vowel** (_Al -> LAX_)

- Generate 2 numbers, 1 letter and 2 numbers from **date of birth** and **gender**:

  - Take the **last two digits of the year of birth** (_1985 -> 85_)
  - Generate **a letter corresponding to the month of birth** (_January -> A | December -> T_) **using the table for conversion included in the code**
  - **For males take the day of birth adding one zero at the start if is less than 10** (_any 9th day -> 09 | any 20th day -> 20_)
  - **For females take the day of birth and sum 40 to it** (_any 9th day -> 49 | any 20th day -> 60_)

### Examples

```js
fiscalCode({name: "Matt", surname: "Edabit", gender: "M", dob: "1/1/1900"}) ➞ "DBTMTT20A01"

fiscalCode({name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950"}) ➞ "YUXHLN50T41"

fiscalCode({name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928"}) ➞ "MSOMKY28A16"
```

### Notes

- Code letters must be in upper case.
- Date of birth is given in D/M/YYYY format.
- The conversion table for months is already in the starting code.
