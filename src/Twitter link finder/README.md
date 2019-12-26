# Twitter link finder

`Formatting` `Regex`

[View on Edabit](https://edabit.com/challenge/zCkag8556FAjJ6W4L)

Your job is to make a 'Twitter Link' regex expression `rx`. This regex searches a tweet to find the `@handle` and the `#handle`.

- The function is already written in the test tab, so you only provide the Regex variable.
- Only return the @ and # handles.

### Examples

```js
tweet('Visit us at @edabit') ➞ '@edabit'

tweet('Follow @JavaScript') ➞ '@JavaScript'

tweet('#Honesty is the best @policy!!') ➞ '#Honesty @policy'
```

### Notes

- Make sure the regex doesn't return . , ! ? etcetera..
