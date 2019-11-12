const applyDiscounts = (amount, percentage, flat) =>
  amount - amount * (percentage / 100) - flat;

const calculateAmountsOwing = (data, minimumCharge) => {
  const { deviceLevels, devices, customers, rentals } = data;
  const customerExpenses = rentals.reduce(
    (map, [, deviceId, customerIds, hours]) => {
      const [, deviceLevelId] = devices.find(([id]) => id === deviceId);
      const [, deviceRate] = deviceLevels.find(([id]) => id === deviceLevelId);
      const expense = (deviceRate * hours) / customerIds.length;

      customerIds.forEach(customerId => {
        map.set(customerId, map.get(customerId) + expense || expense);
      });

      return map;
    },
    new Map(),
  );

  return Object.fromEntries(
    Array.from(customerExpenses)
      .sort(([idA], [idB]) => idA - idB)
      .map(([customerId, expense]) => {
        const [, name, percentageDiscount, flatDiscount] = customers.find(
          ([id]) => id === customerId,
        );
        const owed = applyDiscounts(expense, percentageDiscount, flatDiscount);

        return [name, Number(Math.max(minimumCharge, owed).toFixed(2))];
      }),
  );
};

export default calculateAmountsOwing;
