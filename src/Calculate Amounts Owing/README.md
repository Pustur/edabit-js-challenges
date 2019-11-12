# Calculate Amounts Owing

`Algorithms` `Data Structures`

[View on Edabit](https://edabit.com/challenge/GfL6945KHznmKaef9)

Calculate the amounts owing for each customer of a device rental shop.

### Example Data

```js
{
  // [id, rate( $/hour )]
  deviceLevels: [
    [0, 1.00],
    [1, 1.50]
  ],
  // [id, level]
  devices: [
    [0, 0],
    [1, 1]
  ],
  // [id, name, percentage discount (%), flat rate discount($)]
  customers: [
    [0, 'John', 10, 5],
    [1, 'Sara', 5, 7]
  ],
  // [id, device, customers, hours]
  rentals: [
    [0, 1, [0], 10],
    [1, 0, [1], 20],
    [2, 1, [1,0], 20],
  ]
}
```

**Device cost per hour**

Each device has a level and each level has a per hour cost. These values are stored in `devices` and `deviceLevels` (e.g. device 1 has a level of 1 so it's cost is 1.50/hour).

**Device cost per hour per customer**

Multiple customers can share a rental for a single device. All costs will be shared equally (e.g. if 2 customers share a 10 hour rental of a device that costs $1/hour each will owe $5).

**Customer discounts**

Each customer will have both a percentage discount and a flat rate discount. To calculate an after discount amount owing, subtract the customer's percentage discount from the customer's total amount owing then subtract the flat rate. If the after discount amount is less than the `minimumCharge` the `minimumCharge` will be taken as the amount owing.

**Inputs**

- `data`: See examples.
- `minimumCharge`: Minimum charge amount (see "customer discounts" above).

**Return value**

The function will return an object indexed by customer name and will include the total amount owing for each customer rounded to two decimal places.

### Examples

```js
const minimumCharge = 10
const data = {
  // [id, rate( per/hour )]
  deviceLevels: [
    [0, 1.00],
    [1, 1.50]
  ],
  // [id, level]
  devices: [
    [0, 0],
    [1, 1]
  ],
  // [id, name, percentage discount (%), flat rate discount($)]
  customers: [
    [0, 'John', 10, 5],
    [1, 'Sara', 5, 7]
  ],
  // [id, device, customers, hours]
  rentals: [
    [0, 1, [0], 10],
    [1, 0, [1], 20],
    [2, 1, [1,0], 20],
  ]
}

data,  minimumCharge ➞ { John: 22, Sara: 26.25 }
```

### Example Breakdown

John rented device 1 for 10 hours according to the `rentals` data. device 1 is price level 1 and costs \$1.50/h according to the `deviceLevels` data so the charge for this device is `1.50 * 10` or `$15`

Sara rented device 0 for 20 hours according to the `rentals` data. Device 0 is price level 0 and costs \$1.00/h according to the `deviceLevels` data so the charge for this device is `1.00 * 20` or `$20`

John and Sara shared a rental of device 1 for 20 hours according to the `rentals` data. Device 1 is price level 1 and costs \$1.50/h according to the `deviceLevels` data so the charge for this device is `1.50 * 20` or `$30`. John and Sara will split that charge so they will owe `$15` each.

Johns owes 15 + 15 or $30. According to the `customers` table, John receives a 10% discount and a further flat rate discount of $5. John owes 30 - (30 \* 0.10) - 5 or \$22

Sara owes 20 + 15 or $35. According to the `customers` data Sara receives a 5% discount and a further flat rate discount of $7. Sara owes 35 - (35 \* 0.05) - 7 or 26.25.

### Notes

- There could be any number of devices, device levels, customers, and rentals.
- Code readability is important; it won’t be directly tested but choose readability over achieving the goal with the least amount of code possible.
