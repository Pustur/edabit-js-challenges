# Is It a Valid RGB(A) Color?

`Conditions` `Regex` `Validation`

[View on Edabit](https://edabit.com/challenge/CoAPnr8jxcTah2CzZ)

Given an RGB(A) CSS color, determine whether its format is valid or not. Create a function that takes a string (e.g. `"rgb(0, 0, 0)"`) and return `true` if it's format is correct, otherwise return `false`.

### Examples

```js
validColor("rgb(0,0,0)") ➞ true

validColor("rgb(0,,0)") ➞ false

validColor("rgb(255,256,255)") ➞ false

validColor("rgba(0,0,0,0.123456789)") ➞ true
```

### Notes

- Alpha is between 0 and 1.
- There are a few edge cases. Check out the **Tests** tab to know more.
