# Neutralisation

`Conditions` `Loops` `Strings`

[View on Edabit](https://edabit.com/challenge/HzxTqSHLmRC3zEfXb)

Given two strings comprised of `+` and `-`, return a new string which shows how the two strings interact in the following way:

- When positives and positives interact, they _remain positive_.
- When negatives and negatives interact, they _remain negative_.
- But when negatives and positives interact, they _become neutral_, and are shown as the number `0`.

### Worked Example

```js
neutralise("+-+", "+--") ➞ "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.
```

### Examples

```js
neutralise("--++--", "++--++") ➞ "000000"

neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"

neutralise("-++-", "-+-+") ➞ "-+00"
```

### Notes

The two strings will be of the same length.
