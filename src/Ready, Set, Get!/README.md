# Ready, Set... Get!

`Classes` `Data Structures` `Functional Programming`

[View on Edabit](https://edabit.com/challenge/2FF7RKw9RLwc3EBY9)

You have to build a rudimentary architecture that will simulate a system of XP points distribution among two students that solve a series of given challenges on Edabit.

**Step 1: Build a class** `Challenge`

The constructor parameters are `id` and `level`. The `id` will be the numerical identifier of the challenge, and `level` will be a code made of two uppercased letters:

- `"VE"` = "Very Easy"
- `"EA"` = "Easy"
- `"ME"` = "Medium"
- `"HA"` = "Hard"
- `"VH"` = "Very Hard"
- `"EX"` = "Expert"

**Step 2: Build a method for the class** `Challenge`

The name of the method inside the class `Challenge` is `points()`.

The method must return the amount of points earned solving a challenge, based on the level of the challenge:

- `VE` = 5 points
- `EA` = 10 points.
- `ME`= 20 points
- `HA`= 40 points
- `VH` = 80 points
- `EX` = 120 points

**Step 3: Build a class** `User`

The constructor parameters are `name`, `xp` and `log`. The `name` will be, trivially, the username. The `xp` is the accumulator that stores the XP points earned. The `log` is a sort of _diary_ of the user: is an array that will store the `id` of the challenges solved by the user.

**Step 4: Build a method for the class** `User`

The name of the method to implement inside the class `User` is `newSolvedChallenge()` and as parameter it will accept an object of the `Challenge` class.

The method must increment the `xp` of the user and store the challenge `id` into the array `log`.

**Step 5: Declare the instances needed for the tests**

Now that everything is ready, you have to set the exercise and declare the instances of the created classes, for sustaining the tests that are made. Start with the users declarations, they are two:

- `user1` ➞ `name` = "Madam" | `xp` = 0 | `log` = []
- `user2` ➞ `name` = "Steve" | `xp` = 0 | `log` = []

Now, declare the challenges, they are six:

- `challenge1` ➞ `id` = 1 | `level` = "VE";
- `challenge2` ➞ `id` = 2 | `level` = "EA";
- `challenge3` ➞ `id` = 3 | `level` = "ME";
- `challenge4` ➞ `id` = 4 | `level` = "HA";
- `challenge5` ➞ `id` = 5 | `level` = "VH";
- `challenge6` ➞ `id` = 6 | `level` = "EX";

Finally, you have to declare which are the challenges solved by the users, using the _setter_ that you have implemented before:

- Madam solves the following challenges, in the order:

  - `challenge1` , `challenge4` , `challenge6`

- Steve solves the,following challenges, in the order:

  - `challenge5` , `challenge3`, `challenge2`

**Step 6: The testing mechanics**

Tests will verify if after calling the properties and methods of the instance created by you, an expected result is returned. So, **you don't have to return a result**, but just being sure that everything is setted accordingly to Instructions.

### Examples

```js
user1.name ➞ "Madam"

user2.xp ➞ 110
// Steve has solved challenges 5, 3 and 2 (80 + 20 + 10 points)

user1.log ➞ [1, 4, 6]
// Remember to respect the order given in Instructions for to store data into the log

challenge4.level ➞ "HA"

challenge3.id ➞ 3

challenge1.points ➞ 5
```

### Notes

- When implementing methods you can use normal functions, or a _set/get_ combination. See the **Resources** for having an overall idea about the difference between these two procedures, and if you wish leave your opinion the **Comments** tab. If you want to deepen more, see [a negative point of view](https://nemisj.com/why-getterssetters-is-a-bad-idea-in-javascript/) about _setters & getters_.

**BETA PHASE NOTE**:

**edit1** ➞ Instructions and notes modified. Solutions pre-edit will be actually compatible. Thank you **@Pustur** .
