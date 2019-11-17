# What's the Closest Major Event?

`Arrays` `Dates` `Objects`

[View on Edabit](https://edabit.com/challenge/HmXdhA9WA9uLnsuiB)

Given an _array of objects_ containing some of the major historical events and a _date object_, you should return the _name_ of the historical event that is closest to that date.

An historical event object contains 2 properties, this is an example:

```js
{
  date: '2005-08-23',
  name: 'Hurricane Katrina'
}
```

⚠️ You can see the full array in the **Tests** tab.

### Examples

```js
closestEvent(events, new Date(1990, 0, 1)) ➞ Fall of the Berlin Wall

closestEvent(events, new Date(2005, 0, 1)) ➞ Indian Ocean Earthquake and Tsunami Disaster

closestEvent(events, new Date()) ➞ Fukushima Nuclear Disaster
```

### Notes

N/A
