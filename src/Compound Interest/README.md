# Compound Interest

`Algebra` `Math`

[View on Edabit](https://edabit.com/challenge/2GmmGPrktkTzTthdB)

Suppose that you invest \$10,000 for 10 years at an interest rate of 6% compounded monthly. What will be the value of your investment at the end of the 10 year period?

Create a function that accepts the principal `p`, the term in years `t`, the interest rate `r`, and the number of compounding periods per year `n`. The function returns the value at the end of term rounded to the nearest cent.

For the example above:

```js
compoundInterest(10000, 10, 0.06, 12) ➞ 18193.97
```

Note that the interest rate is given as a decimal and `n=12` because with monthly compounding there are 12 periods per year. Compounding can also be done annually, quarterly, or daily.

### Examples

```js
compoundInterest(100, 1, 0.05, 1) ➞ 105.0

compoundInterest(3500, 15, 0.1, 4) ➞ 15399.26

compoundInterest(100000, 20, 0.15, 365) ➞ 2007316.26
```

### Notes

See the **Resources** tab for the interest formula and more information.
