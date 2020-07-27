# Verbos Regulares

`Arrays` `Formatting` `Logic`

[View on Edabit](https://edabit.com/challenge/QGvL9nFnn2PJwRgyp)

The conjugations for all Spanish regular verbs can be built by using the 3 forms for verbs ending in -ar, -er and -ir.

Create a function that takes a verb as string, and returns a string with the 6 conjugations like in the examples, watch out for verbs ending in -ir, check the notes. Try programming the construction rather than forming structures with arrays.

### Examples

```js
espVerb("pasar") ➞ "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."

espVerb("unir") ➞ "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."

espVerb("correr") ➞ "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
```

### Notes

The smallest category of regular Spanish verbs is those that end in -ir. To conjugate them, remove the infinitive ending and then add one of the following verb endings:

|            | Singular | Plural         |
| ---------- | -------- | -------------- |
| 1st person | yo -o    | nosotros -imos |
| 2nd person | tú -es   | vosotros -ís   |
| 3rd person | él -e    | ellos -en      |
