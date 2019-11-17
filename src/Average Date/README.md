# Average Date

`Arrays` `Dates` `Math`

[View on Edabit](https://edabit.com/challenge/kBDrADkw28RHim74Q)

Create a function that given an array of dates returns the average date in string form.

### Examples

```js
averageDate([]) ➞ null

averageDate([
  new Date(Date.UTC(1970, 0, 1))
]) ➞ "1970-01-01T00:00:00.000Z"

averageDate([
  new Date(Date.UTC(1970, 0, 1)),
  new Date(Date.UTC(1971, 0, 1))
]) ➞ "1970-07-02T12:00:00.000Z"
```

### Notes

- For the return value you can use the `.toISOString()` method.
- If `dates` is an empty array return `null`.
