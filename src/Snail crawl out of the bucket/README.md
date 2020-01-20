# Snail crawl out of the bucket

`Algorithms` `Math`

[View on Edabit](https://edabit.com/challenge/JDKfDGtFxb92dj4SQ)

A snail fell into a bucket and wanted to crawl out. Assuming we already know the snail can climb 5cm per minute, the snail can crawl for 30 minutes continuously and then need to rest for 10 minutes. When it is resting it will slide down 30cm.

How many minutes will it take for a snail to crawl out at different depths. Create a function that takes a number of the bucket depth (the unit is cm) as an argument and returns the minutes.

```
if depth = 270
the snail crawling process
process: (150 - 30) +  150
minutes: (30+10) + 150 / 5
it will take 70 minutes
the last 150cm, the snail don't need a rest
```

If the time less than one minute also counts as one minute.

### Examples

```js
cal(31) ➞ 7

cal(150) ➞ 30

cal(200) ➞ 56
```

### Notes

The depth is a positive integer.
