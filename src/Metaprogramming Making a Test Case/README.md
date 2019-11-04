# Metaprogramming: Making a Test Case

`Higher Order Functions` `Scope` `Strings` `Validation`

[View on Edabit](https://edabit.com/challenge/9tJ97HK3c4Koy3KsF)

You are given two values `a` and `b` of identical type: numbers, strings or arrays. The result will be:

- The **sum** of `a` and `b` if the parameters are numbers.
  - a = 1 | b = 1 ➞ Result = 2
- The **join** in a single string of `a` and `b` if the parameters are strings.
  - a = "1" | b = "1" ➞ Result = "11"
- The **concatenation** of the values of `a` and `b` in a single array if the parameters are arrays.
  - a = ["String"] | b = ["String"] ➞ Result = ["String", "String"]

In any case, you don't have to simply return the result. This challenge will be a little different from usual because your function is going to return the same Test Case that verifies the correctness of your function!

When you try to solve a challenge your function is passed to a Test function, that accepts three parameters: your function with its related parameters, the expected result, and an optional comment (not used in this exercise).

There are two different types for a Test function:

```js
Test.assertEquals(yourFunctionName(firstParameter, ..., lastParameter), result)
```

This is used when the value type of the expected result is primitive (numbers, strings, booleans or special values like `undefined`, `null` and `NaN`).

```js
Test.assertSimilar(yourFunctionName(firstParameter, ..., lastParameter), result)
```

This is used when the value type of the expected result is an object (arrays or object literals).

You must return a string containing the Test function that verifies the correctness of the result that you got. See the examples below for a better explanation.

### Examples

```js
createTest(1, 1) ➞ 'Test.assertEquals(createTest(1, 1), 2)'
// Parameters are numbers, so result will be their sum: Test function verifies equality.

createTest("a", "b") ➞ 'Test.assertEquals(createTest("a", "b"), "ab")'
// Parameters are strings, so result will be their join: Test function verifies equality.

createTest(["String"], ["String"]) ➞ 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])'
// Parameters are arrays, so result will be the concatenation of the values inside the arrays: Test function verifies similarity.
```

### Notes

- When parameters, results or values inside arrays are strings, they need the double quotation marks `"` around them in the returned string.
- Look at **Tests** tab if you need help!
