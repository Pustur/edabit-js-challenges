# Mubashir Cipher

`Algorithms` `Cryptography` `Logic` `Loops` `Strings`

[View on Edabit](https://edabit.com/challenge/J4idWvahCYHPGnsMT)

In **Mubashir Cipher**, encoding is done by simply replacing paired letters from the provided key.

Create a function that takes a string containing the `message` to be encoded with a fixed given 2D array of letters `key`.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

```js
key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
    ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
    ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']]

message = "edabit is amazing !"

mubashirCipher(message) ➞ "uqkgzf zv kckizlb !"
```

**Step 1:** Search letter in the given key and replace it with **paired letter**:

```js
e = u
d = q
a = k
b = g
.
.
.
g = b
```

**Step 2:** Keep all characters (including spaces) other than letters in their original positions:

```js
'uqkgzf zv kckizlb !';
```

See the below examples for a better understanding:

### Examples

```js
mubashirCipher("mubashir is not amazing") ➞ "cegkvxzy zv ljf kckizlb"

mubashirCipher("%$ &%") ➞ "%$ &%"

mubashirCipher("evgeny sh is amazing") ➞ "usbulr vx zv kckizlb"
```

### Notes

N/A
