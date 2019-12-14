# Digitaldrome

`Conditions` `Numbers` `Sorting` `Validation`

[View on Edabit](https://edabit.com/challenge/84jqLSWr288Wqx5eH)

In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending).

Given an integer `n`, implement a function that returns a string:

- `"Metadrome"` if the digits of `n` form an **ascending** sequence **without repeating digits**;
- `"Plaindrome"` if the digits of `n` form an **ascending** sequence with **repeating digits**;
- `"Katadrome"` if the digits of `n` form a **descending** sequence **without repeating digits**;
- `"Nialpdrome"` if the digits of `n` form a **descending** sequence with **repeating digits**;
- `"Repdrome"` if `n` contains a **single repeating digit**;
- `"Nondrome"` if none of the above conditions is true.

### Examples

```js
digitaldrome(1357) ➞ "Metadrome"
// Ascending sequence without repeating digits

digitaldrome(12344) ➞ "Plaindrome"
// Ascending sequence with repeating digits

digitaldrome(7531) ➞ "Katadrome"
// Descending sequence without repeating digits

digitaldrome(9874441) ➞ "Nialpdrome"
// Descending sequence with  repeating digits

digitaldrome(666) ➞ "Repdrome"
// There's only a single repeating digit

digitaldrome(1985) ➞ "Nondrome"
// This is not a sequence
```

### Notes

- Any given `n` will be a positive integer.
- The word _"drome"_ comes from the Greek suffix for "run", while _"kata"_ and _"meta"_ are the prefixes for "down" (or "into") and "after" (or "through").
