# Unashamed Primes: Sexy Triplets

`Arrays` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/gn6kggvxAFfuMDsDJ)

A sexy (from _sex_, the Latin word for six) prime triplet is a group of three primes that differ by each other by 6, with the sum of the smallest prime plus 18 being a composite number.

You must implement a function that returns an array of triplets (triplets being arrays in turn) found in a range, which included bounds are the two given integers `low` and `high`.

### Examples

```js
sexyTriplets(1, 19) ➞ [ [7, 13, 19] ]
// 7 + 6 = 13 + 6 = 19 and 7 + 18 = 25 (composite)

sexyTriplets(5, 17) ➞ []
// Despite [5, 11, 17] can seem a triplet, 5 + 18 = 23 (not composite)

sexyTriplets(64, 88) ➞ [ [67, 73, 79] ]
// 67 + 6 = 73 + 6 = 79 and 67 + 18 = 85 (composite)
```

### Notes

- If no triplets are found in the range, return an empty array (see example #2).
- A composite number is trivially a **not** prime number.
