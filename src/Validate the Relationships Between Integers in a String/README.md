# Validate the Relationships Between Integers in a String

`Conditions` `Strings`

[View on Edabit](https://edabit.com/challenge/Kg7rsPaPHMydFisP7)

You will be given a string consisting of a list of integers and their relationships to their neighboring integers. For instance:

```
"-15<-10<=0=0<5"
```

Test to see that all the relationships between the integers in the string are true. If they are, return `true`. If they are not, return `false`.

### Examples

```js
validateTheRelationships("5>-1<0=0<-5>5=5") ➞ false
// This is false because 0 is not less than -5.

validateTheRelationships("-15<-10<=0=0<5") ➞ true

validateTheRelationships("0=807<1000<=1000>9990<-3605<=20") ➞ false
// This is false because 0 is not equal to 807.
```

### Notes

- This is a modifcation of Helen Yu's "Correct Signs" challenge.
- As the examples above show, there could be negative numbers in the string.
- The numbers will only be separated by: `=, <, >, >=, <=`
- Tests will not contain any spaces.
