# Epidemiology: the Chi-Squared Test

`Algorithms` `Data Structures` `Math` `Objects`

[View on Edabit](https://edabit.com/challenge/69t9okDM6RqXmK33F)

The Edabit Medical Industries are developing a new drug, the _Edabitin™_, which will (hopefully) increase the programming skills of patients. Various tests are carried out on different programmers: for a week some are given the _Edabitin™_, while others are supplied simple _generic Tutorial powder_. After a week, the number of programmers able to solve ten exercises of an average level in half an hour and the number of those that instead take two hours is recorded for both control groups.

You are asked to establish if _Edabitin™_ has a statistical influence over performances with a **Chi-Squared Test**.

Look at the table below:

| Treatment | 2 Hours | ½ Hour |
| --------- | ------- | ------ |
| Edabitin  | 207     | 282    |
| Tutorial  | 231     | 242    |

The first thing to do is to calculate the total population of programmers involved in the test, so you have to sum all the four cells' values. Then you must calculate the totals of the rows: the _Edabitin™_ total treatments and the Tutorial total treatments. Calculate the totals also for the columns: normal programmers that spent 2 hours solving the exercises and improved programmers that spent just 1/2 hour. The new table now is:

| Treatment | 2 Hours | ½ Hour | Row Tot |
| --------- | ------- | ------ | ------- |
| Edabitin  | 207     | 282    | 489     |
| Tutorial  | 231     | 242    | 473     |
| Col Tot   | 438     | 524    | 962     |

The value in the lower-right corner is the overall total. Each cell now has to be transformed into the corresponding expected result: multiply the row total for the column total (crossing them), and divide the result by the overall total. The table now is:

| Treatment | 2 Hours            | ½ Hour             | Row Tot |
| --------- | ------------------ | ------------------ | ------- |
| Edabitin  | (489 \* 438) / 962 | (489 \* 524) / 962 | 489     |
| Tutorial  | (473 \* 438) / 962 | (473 \* 524) / 962 | 473     |
| Col Tot   | 438                | 524                | 962     |

Now for each cell you have to subtract the obtained expected value from the original cell value, square the result, and divide it by the expected value: The table now is:

| Treatment | 2 Hours                  | ½ Hour                   |
| --------- | ------------------------ | ------------------------ |
| Edabitin  | (207 - 222.64)² / 222.64 | (282 - 266.36)² / 266.36 |
| Tutorial  | (231 - 215.36)² / 215.36 | (242 - 257.64)² / 257.64 |

Finally, you can sum all cell values and get the Chi-Squared value (**χ²**) rounded to the nearest tenth:

**χ²** = 1.099 + 0.918 + 1.136 + 0.949 = **4.1**

To establish if the effect of Edabitin is statistically significant, you must confront the Chi-Squared value with two different alpha values (or levels of confidence): **alpha1** and **alpha5**.

If the Chi-Squared value is greater than **6.635 (alpha1)**, than there is the 1% of possibilities that the _Edabitin™_ effect is a false positive, but the **99%** of possibilities that it actually works; if it is lower than alpha1 but greater than **3.841 (alpha5)**, then the possibilities of an effective improvement are equals to the **95%** (with the 5% of false positives possibilities). If the Chi-Squared value is lower than alpha5 than the effect of _Edabitin™_ is not statistically relevant for the programming performances.

For the example table above, the Chi-Squared value is lower than alpha1 and greater than alpha5, so we can assert that: _improvements in programmers treated with Edabitin™ are caused by 95% by the drug effectiveness_.

Given an object `data` being the table containing the results to analyze ("E" is the Edabitin's row, "T" is the Tutorial's row) implement a function that returns an array containing two elements:

- The **Chi-Squared value** rounded to the nearest tent.
- A string with the final analysis being:
  - `"Edabitin effectiveness = 99%"` if the Chi-Squared value is greater than alpha1.
  - `"Edabitin effectiveness = 95%"` if the Chi-Squared value is lower than alpha1 and greater than alpha5.
  - `"Edabitin is ininfluent"` if the Chi-Squared value is lower than alpha5.

### Examples

```js
chiSquaredTest({"E": [207, 282], "T": [231, 242]}) ➞ [4.1, "Edabitin effectiveness = 95%"]

chiSquaredTest({"E": [100, 50], "T": [100, 20]}) ➞ [9.6, "Edabitin effectiveness = 99%"]

chiSquaredTest({"E": [90, 50], "T": [80, 40]}) ➞ [0.2, "Edabitin is ininfluent"]
```

### Notes

- Round just the final result to the nearest tenth, values of the example are actually rounded for readability scopes.
- Besides epidemiology, the Chi-Squared Test is used also in agriculture, surveys, economics and in cases where "categorical" data is implied instead of "numerical" data. This test is used for medium-to-large recorded cases: for smaller numbers, other tests are used. The alpha1 and alpha5 values are constants related to this specific exercise's tables with two rows and two columns (_1 degree of freedom_ results), so they change for different sized tables. For more info look at the specific links in the **Resources** tab.
- _No programmers were harmed in the making of this challenge!_
