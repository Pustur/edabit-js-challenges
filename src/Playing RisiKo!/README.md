# Playing RisiKo!

`Arrays` `Data Structures` `Games` `Sorting`

[View on Edabit](https://edabit.com/challenge/DzZfKGHEF8jWMNYXq)

In a game of **RisiKo!** (the Italian version of the popular board game **Risk!**), the players throw six-faced dice to conquer territories around a World map.

When two players contend a territory there is a battle, and they throw from 1 up to 3 dice, with each die being an army sent to fight. To establish who loses armies after the battle, the dice are compared starting from the highest value, and proceeding with the comparisons in **descending order** (eliminating the dice in excess if the amount of thrown dice among the two players is different).

When the rolls are compared, for each comparison the die of the attacking player must have a greater value than the defender's die to win the fight. In the case of a tie, the defender wins the single fight.

Given two arrays `att` (rolls of the attacker) and `def` (rolls of the defender), implement a function that returns the **armies lost by the defender** as an integer.

### Examples

```js
risk([3, 6, 4], [2, 5, 3]) ➞ 3
// Comparison 1:
// ATT(6) vs. DEF(5): DEF loses an army
// Comparison 2:
// ATT(4) vs. DEF(3): DEF loses an army
// Comparison 3:
// ATT(3) vs. DEF(2): DEF loses an army

risk([3, 6], [6, 4, 4]) ➞ 0
// Comparison 1:
// ATT(6) vs. DEF(6): ATT loses an army
// Comparison 2:
// ATT(3) vs. DEF(4): ATT loses an army

risk([3, 1], [1]) ➞ 1
// Comparison 1:
// ATT(3) vs. DEF(1): DEF loses an army
```

### Notes

- When two compared dice have the same value, the player who defends wins the fight (see example #2).
- When the number of rolls is different among the two players, the comparisons to do are equals to the lowest amount of rolled dice (see examples #2 and #3).
- You can expect only valid inputs: each array will have at least a die, and no more than three dice, with values in the range from 1 to 6.
