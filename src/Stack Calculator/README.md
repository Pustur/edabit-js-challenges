# Stack Calculator

`Algorithms` `Math` `Numbers`

[View on Edabit](https://edabit.com/challenge/WyuiphFcBXZSoKpEt)

A stack machine processes instructions by pushing and popping values to an internal stack. A simple example of this is a calculator.

The argument passed to `run(instructions)` will always be a string containing a series of instructions.  
The instruction set of the calculator will be this:

- `+`: Pop the last 2 values from the stack, add them, and push the result onto the stack.
- `-`: Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
- `*`: Pop the last 2 values, multiply, and push the result.
- `/`: Pop the last 2 values, divide the topmost one by the lower one, and push the result.
- `DUP`: Duplicate (not double) the top value on the stack.
- `POP`: Pop the last value from the stack and discard it.
- `PSH`: Performed whenever a number appears as an instruction. Push the number to the stack.
- Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]"

### Examples

```js
StackCalc("") ➞ 0

StackCalc("5 6 +") ➞ 11

StackCalc("3 DUP +") ➞ 6

StackCalc("6 5 5 7 * - /") ➞ 5

StackCalc("x y +") ➞ Invalid instruction: x
```

### Notes

- If there are no instructions, the value should remain 0.
- The return value of `get value()` should be the topmost value on the stack.
