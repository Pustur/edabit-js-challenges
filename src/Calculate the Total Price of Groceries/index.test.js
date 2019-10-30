import getTotalPrice from './index';

test('getTotalPrice', () => {
  expect(getTotalPrice([{ product: 'Milk', quantity: 1, price: 1.5 }])).toBe(
    1.5,
  );
  expect(getTotalPrice([{ product: 'Milk', quantity: 3, price: 1.5 }])).toBe(
    4.5,
  );
  expect(
    getTotalPrice([
      { product: 'Milk', quantity: 1, price: 1.5 },
      { product: 'Cereals', quantity: 1, price: 2.5 },
    ]),
  ).toBe(4);
  expect(
    getTotalPrice([
      { product: 'Chocolate', quantity: 1, price: 0.1 },
      { product: 'Lollipop', quantity: 1, price: 0.2 },
    ]),
  ).toBe(0.3);
  expect(
    getTotalPrice([
      { product: 'Milk', quantity: 1, price: 1.5 },
      { product: 'Eggs', quantity: 12, price: 0.1 },
      { product: 'Bread', quantity: 2, price: 1.6 },
      { product: 'Cheese', quantity: 1, price: 4.5 },
    ]),
  ).toBe(10.4);
});
