# Which Generation Are You?

`Conditions` `Logic` `Strings`

[View on Edabit](https://edabit.com/challenge/48EJWLhF224na8po3)

Try finding your ancestors and offspring with code.

Create a function that takes a number and `"m"` (for male) or `"f"` (for female), and returns the **name of an ancestor (m/f)** or **descendant (m/f)**.

- If the number is **negative**, return the **related ancestor**.
- If **positive**, return the **related descendant**.
- You are generation `0`. In the case of `0` (male or female), return `"me!"`.

### Examples

```js
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
```

### Notes

Check the **Resources** tab for helpful hints.

| Generation | Male              | Female              |
| ---------- | ----------------- | ------------------- |
| -3         | great grandfather | great grandmother   |
| -2         | grandfather       | grandmother         |
| -1         | father            | mother              |
| 0          | me!               | me!                 |
| 1          | son               | daughter            |
| 2          | grandson          | granddaughter       |
| 3          | great grandson    | great granddaughter |
