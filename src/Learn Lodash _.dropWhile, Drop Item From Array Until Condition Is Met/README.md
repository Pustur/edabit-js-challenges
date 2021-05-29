# Learn Lodash: \_.dropWhile, Drop Item From Array Until Condition Is Met

`Arrays` `Objects`

[View on Edabit](https://edabit.com/challenge/HwLxxuwRqntMN3pm4)

According to the lodash documentation, `_.dropwWhile` Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until the predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

This is different than filter because it checks each item until the condition is met, like filtering until it finds a match, and then stops running the check and returns the rest of the array even if there are items in it that further down might meet the condition.

### Arguments

- array (Array): The array to check.
- predicate: A function that will be run on each iteration.

### Real World Example

You work in a car dealership. A man comes and says he doesn't believe that electric vehicles exist. You intend to prove him wrong. You go to the lot and check the first vehicle. It takes gas... the guy is getting cocky so you check the second vehicle and it also takes gas. Finally, you check the third vehicle and it is electric.

You've dropped the first two items while they are not electric, even though there may be gas vehicles further down the line you have proven your point and in this case, would return the list of remaining vehicles.

### Examples

```js
var users = [
  { "user": "barney",  "active": false },
  { "user": "fred",    "active": false },
  { "user": "pebbles", "active": true }
]

dropWhile(users, function(o) { return !o.active; })
  ➞ [{ "user": "pebbles", "active": true }]
```

### Notes

- Do not attempt to import lodash; you are simply writing your own version.
- This entire series of challenges can be found [here](https://edabit.com/collection/vLR3aCkPwZKSobGCi).
