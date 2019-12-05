# Kaprekar's Constant

`Arrays` `Numbers` `Recursion` `Sorting`

[View on Edabit](https://edabit.com/challenge/wzjRyguraKuZ5XiSE)

6174 is known as Kaprekar's constant, after the Indian mathematician D. R. Kaprekar. This number is notable for the following rule:

- Take any four-digit number, using at least two different digits (leading zeros are allowed).
- Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary.
- Subtract the smaller number from the bigger number.
- Go back to step 2 and repeat.

The above process, known as Kaprekar's routine, will always reach its fixed point, 6174, in at most 7 iterations. Once 6174 is reached, the process will continue yielding 7641 – 1467 = 6174. For example, choose 3524:

```js
5432 - 2345 = 3087;
8730 - 0378 = 8352;
8532 - 2358 = 6174;
7641 - 1467 = 6174;
```

Write a recursive function that will return the number of times it will take to get from a number to 6174 (the above example would equal 3).

```js
(1) 5432 - 2345 = 3087
(2) 8730 - 0378 = 8352
(3) 8532 - 2358 = 6174
```

### Examples

```js
kaprekar(6621) ➞ 5

kaprekar(6554) ➞ 4

kaprekar(1234) ➞ 3
```

### Notes

If the subtracted number is less than 1000, add an extra zero to that number.
