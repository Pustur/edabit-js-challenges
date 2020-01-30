# Explosion Intensity

`Algorithms` `Conditions` `Formatting` `Strings`

[View on Edabit](https://edabit.com/challenge/XnZAcvr4tCD9ppyrN)

Given a number, return a string of the word `"Boom"`, which varies in the following ways:

- The string should include `n` number of "o"s, unless `n` is below 2 (in that case, return `"boom"`).
- If `n` is _evenly divisible by 2_, add an exclamation mark to the end.
- If `n` is _evenly divisible by 5_, return the string in _ALL CAPS_.
- If `n` is _evenly divisible by **both** 2 **and** 5_, return the string in _ALL CAPS_ and add an exclamation mark to the end.

The example below should help clarify these instructions.

### Examples

```js
boomIntensity(4) ➞ "Boooom!"
// There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)

boomIntensity(1) ➞ "boom"
// 1 is lower than 2, so we return "boom"

boomIntensity(5) ➞ "BOOOOOM"
// There are 5 "o"s and 5 is divisible by 5 (all caps)

boomIntensity(10) ➞ "BOOOOOOOOOOM!"
// There are 10 "o"s and 10 is divisible by 2 and 5 (all caps and exclamation mark included)
```

### Notes

- A number which is evenly divisible by 2 **and** 5 will have both effects applied (see example #4).
- `"Boom"` will always start with a capital "B", except when `n` is _less than 2_, then return a minature explosion as `"boom"`.
