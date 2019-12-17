# Message Screen Glitch

`Strings`

[View on Edabit](https://edabit.com/challenge/eqAbW3AJz7de6gTjr)

Your open-plan office building has a scrolling message screen on the far wall. One day, you notice that the messages are starting to glitch. Some of the lower case letters are being replaced by their position in the alphabet ("a" = 1, "b" = 2, ..., "z" = 26). Given the glitched text, return the corrected message.

### Examples

```js
messageGlitch("T21e19d1y's m1r11e20i14g m5e20i14g w9l12 14o23 2e i14 20h5 3o14f5r5n3e r15o13.")
➞ "Tuesday's marketing meeting will now be in the conference room."

messageGlitch("A s9l22e18 Pr9u19 9s d15u2l5-16a18k5d o21t19i4e. Wi12l t8e o23n5r p12e1s5 13o22e i20.")
➞ "A silver Prius is double-parked outside. Will the owner please move it."

messageGlitch("P12e1s5 4o14'20 13i3r15w1v5 6i19h i14 20h5 20h9r4 6l15o18 11i20c8e14!")
➞ "Please don't microwave fish in the third floor kitchen!"
```

### Notes

Each group of numbers will always refer to one letter only (e.g. 14 = "n", not "ad").
