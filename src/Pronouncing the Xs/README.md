# Pronouncing the Xs

`Conditions` `Formatting` `Strings`

[View on Edabit](https://edabit.com/challenge/mH6Ny8eH6AStdzzyS)

Create a function which replaces all the x's in the string in the following ways:

Replace all x's with "cks" **UNLESS**:

- The word begins with "x", therefore replace it with "z".
- The word is just the letter "x", therefore replace it with "ecks".

### Examples

```js
xPronounce("Inside the box was a xylophone") ➞ "Inside the bocks was a zylophone"

xPronounce("The x ray is excellent") ➞ "The ecks ray is eckscellent"

xPronounce("OMG x box unboxing video x D") ➞ "OMG ecks bocks unbocksing video ecks D"
```

### Notes

- All x's are lowercase.
- I know that not all words with x's follow this rule, but there are too many edge cases to count!
