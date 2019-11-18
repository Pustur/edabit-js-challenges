# ES6: Recursive String Builder

`Recursion` `Strings`

[View on Edabit](https://edabit.com/challenge/LMkhSsuCgpHYm8fCS)

Write a `getStringBuilder()` function that returns an object. Any arbitrary property of that object will also be an object as will the properties of that object. _Recursively._ Invoking any of the child objects should return a string generated from the entire property chain.

### Examples

```js
getStringBuilder().Hello.there() ➞ "Hello there"

getStringBuilder().one.two.three.four() ➞ "one two three four"

getStringBuilder().we.live.in.a.society() ➞ "we live in a society"
```

### Notes

N/A
