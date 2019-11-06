# The “R” Rule for Shellfish

`Dates` `Logic`

[View on Edabit](https://edabit.com/challenge/DHtAvBsxCYvC67omj)

Common lore states that we should only be eating shellfish, especially oysters, in months with the letter “r”. So we can help ourselves to all the oysters, mussels, and clams we can eat from September through April, but put the brakes on come May.

Create a function that takes a date as an argument and returns "safe" or "unsafe" depending on whether or not it's safe or unsafe to eat shellfish.

### Examples

```js
shellFish(new Date(2059, 10, 6)) ➞ "safe"
// October contains "r".

shellFish(new Date(2000, 7, 10)) ➞ "unsafe"
// July doesn't contain "r".

shellFish(new Date(1937, 6, 2)) ➞ "unsafe"
// June doesn't either.
```

### Notes

- Input is always a valid date.
- Can you create a function without using a 'month' array?

### Info

The most compelling argument is that Red Tide most often occurs during summer months. This refers to high concentrations of an alga that is toxic to humans. If we eat shellfish that have absorbed this toxin, we can get pretty darn sick. The condition is known as “paralytic shellfish poisoning,” or PSP.
