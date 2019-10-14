# Caesar's Cipher

`Algorithms` `Cryptography` `Strings`

[View on Edabit](https://edabit.com/challenge/a33jdGXkaQRtK9ZTs)

Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check **Resources** tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by `3`, _w, x, y_ and _z_ would map to _z, a, b_ and _c_.

Create a function that takes a string `s` (text to be encrypted) and an integer `k` (the rotation factor). It should return an encrypted string.

### Examples

```js
caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
```

### Notes

Test input will be a valid ASCII string without any spaces.
