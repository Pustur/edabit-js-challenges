# Bit Rotation

`Bit Operations` `Strings`

[View on Edabit](https://edabit.com/challenge/GAgu4fL6JY9ZnFWcd)

JavaScript offers some bit operations but not bit rotation. To complete that, create a function that takes three parameters:

1.  `n`: Integer, which in binary representaion should be rotated.
2.  `m`: Number of rotation steps that should be performed.
3.  `d`: Boolean value; `true` = rotation right, `false` = rotation left.

Your function should return an integer as a result of its rotated binary representation.

### Examples

```js
bitRotate(8, 1, true) ➞ 4
// 8 in bin: 1000, rotated 1 step to the right: 0100, in dec: 4

bitRotate(16, 1, false) ➞ 1
// 16 in bin: 10000, rotated 1 step to the left: 00001, in dec: 1

bitRotate(17, 2, false) ➞ 6
// 17 in bin: 10001, rotated 2 steps to the lefts: 000110, in dec:  6
```

### Notes

For parameters use unsigned integers only.
