# Learn Lodash: \_.countBy, Count Items in an Array

`Arrays` `Objects`

[View on Edabit](https://edabit.com/challenge/whHvvEDo67GDB7d9T)

According to the lodash documentation, `_.countBy` creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).

Recreate lodash's `_.countBy` with your own function using vanilla JavaScript.

### Input

- collection (Array or Object): The collection to iterate over.
- [iteratee=_.identity] (Function or string): The iteratee to check the keys and count them.

Returns an object the counted values.

### Real Life Scenario

You work at a car dealership. Your boss asks you to count the cars in the lot according to color. You come back to him and say there are 5 red ones, two blue ones and a green one. The color to search is the iteratee and the parking lot is the object or array you are searching. He might also give you a function to check the cars which could be, count the cars with milieage over 100,000 kilometers. You come back and say "true": 3, "false": 4 essentially 3 cars are over 100k and 4 cars are under.

### Examples

```js
houses = [
  {
    stories: 2,
    door: "blue"
  },
  {
    stories: 3,
    door: "blue"
  },
  {
    stories: 2,
    door: "green"
  }
]

countBy(houses, "door") ➞  { blue: 2, green: 1 }
```

### Notes

Do not attempt to import lodash; you are simply writing your own version.
