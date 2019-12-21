# Coin Trouble

`Arrays` `Logic` `Loops` `Validation`

[View on Edabit](https://edabit.com/challenge/xP34EkkKFGQc6ZGwg)

Given an array of coins, father needs to distibute them amongst his three children. Write a function to return if the coins can be distributed so that each recieve equal value of money from father. If it can be distributed return `true` otherwise return `false`.

```js
[1, 2, 3, 2, 2, 2, 3] ➞ true
```

- Amount to be distributed to each child = `(1+2+3+2+4+3)/3 => 15/3 => 5`
- Possible set of coin to be distributed to children = `[(1,2,2),(2,3),(2,3)]`

```js
[5, 3, 10, 1, 2] ➞ false
```

- Amount to be distributed to each child = `(5+3+10+1+2)/3 => 21/3 => 7`
- But there are no combination such that each child get equal value which is 7.

### Examples

```js
coinsDiv([1, 2, 3, 2, 2, 2, 3]) ➞ true

coinsDiv([5, 3, 10, 1, 2]) ➞ false

coinsDiv([2, 4, 3, 2, 4, 9, 7, 8, 6, 9]) ➞ true
```

### Notes

- Inputs will be an array of positive integers only.
- Coin can be any positive value.
