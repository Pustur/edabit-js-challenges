# Malthusian Catastrophe

`Conditions` `Dates` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/4BeTkEwBXeuSKJTYe)

A man named Thomas Malthus described what is now called a _Malthusian Catastrophe_. According to him, food production grows by a fixed amount, but population grows by a percentage. So, the food supply would soon be insufficient for the population.

Your job is to find out when that will occur. For this challenge, assume 1 population needs 1 unit of food production. Food production & population both start at 100\. The year starts at 0.

The catastrophe happens when the population is larger than food production.

The function will pass:

- `foodGrowth` ⁠— an integer - Food production increase per year.
- `popMult` ⁠— a floating-point number - The population growth multiplier per year.

### Examples

```js
malthusian(4255, 1.41) ➞ 20
// { foodProd: 85,200, pop: 96,467.77..., year: 20 }

malthusian(9433, 1.09) ➞ 107
// { foodProd: 1,009,431, pop: 1,010,730.28..., year: 107 }

malthusian(5879, 1.77) ➞ 12
// { foodProd: 70,648, pop: 94,553.84..., year: 12 }
```

### Notes

- Return the year that the overtake happens, not the next year.
- Make sure you don't make the mistake of adding a year, _then_ calculating the changes to **food** & **population**. That way, you miss year 0.
- If the population & food production are equal, that is _not_ a catastrophe.
