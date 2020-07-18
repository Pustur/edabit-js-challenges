# Imaginary coding interview

`Arrays` `Conditions`

[View on Edabit](https://edabit.com/challenge/QfYTCdtcZ4TST4JTx)

Create a function to check if a candidate is qualifed in an imaginary coding interview of an imaginary tech startup.

The criteria for a candidate to be qualified in the coding interview is:

1. Candidate should have completed all the questions.
2. Maximum time given to complete the interview - 120min.
3. Maximum time given for very easy questions - 5min each.
4. Maximum time given for easy questions - 10min each.
5. Maximum time given for medium questions - 15min each.
6. Maximum time given for hard questions - 20min each.

If all the above conditions are satisfied return `"qualified"`, else return `"disqualified"`.

You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.

Given array, in a true condition will always be in the format `[very easy, very easy, easy, easy, medium, medium, hard, hard]`

The max time to complete the interview includes a buffertime of 20min.

### Examples

```js
interview([5,5,10,10,15,15,20,20], 120) ➞ "qualified"

interview([2,3,8,6,5,12,10,18], 64) ➞  "qualified"

interview([5,5,10,10,25,15,20,20], 120) ➞ "disqualified"
//Exceeded the time limit  for a medium question.

interview([5,5,10,10,15,15,20], 120) ➞ "disqualified"
//Did not complete all the questions.

interview([5,5,10,10,15,15,20,20], 130) ➞ "disqualified"
//Solved all the questions in their respected time limits, but exceeded the total time limit of the interview.
```

### Notes

Try to solve the problem using only array methods.
