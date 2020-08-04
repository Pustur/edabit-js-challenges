# Star Ratings

`Arrays` `Logic` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/BpLG59eieSYarDfZj)

Given an array of five values, calculate the average star rating, rounded to two decimal places. The array contains user votes **per star**, so the first element `[0]` contains the number of 1-star ratings and the last element `[4]`, the number of 5-star ratings.

Return the average score in `[brackets]`, followed by a space and asterisks' `*` to represent the star rating, rounded to the nearest whole star.

### Examples

```js
starRating([55, 67, 98, 115, 61]) ➞ "[3.15] ***"

starRating([0, 2, 0, 1, 23]) ➞ "[4.73] *****"

starRating([16, 17, 23, 40, 45]) ➞ "[3.57] ****"
```

### Notes

Round stars to whole stars.
