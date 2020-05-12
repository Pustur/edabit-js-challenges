# The Sweetest Ice Cream

`Arrays` `Classes` `Numbers`

[View on Edabit](https://edabit.com/challenge/HKmJFmZZCX53ff4ke)

Create a function which takes an array of _instances_ from the class `IceCream` and returns **the sweetness value of the sweetest icecream**.

Sweetness is calculated from the _flavor_ and _number of sprinkles_. Each sprinkle has a _sweetness value of 1_, and the sweetness values for the flavors are as follows:

| Flavours      | Sweetness Value |
| ------------- | --------------- |
| Plain         | 0               |
| Vanilla       | 5               |
| ChocolateChip | 5               |
| Strawberry    | 10              |
| Chocolate     | 10              |

- You'll be given instance properties in the order `flavor`, `numSprinkles`.

### Examples

```js
ice1 = IceCream("Chocolate", 13)    // value of 23
ice2 = IceCream("Vanillla", 0)      // value of 5
ice3 = IceCream("Strawberry", 7)    // value of 17
ice4 = IceCream("Plain", 18)        // value of 18
ice5 = IceCream("ChocolateChip", 3) // value of 8

sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23

sweetestIcecream([ice3, ice1]) ➞ 23

sweetestIcecream([ice3, ice5]) ➞ 17
```

### Notes

Remember to only return the **sweetness value**.
