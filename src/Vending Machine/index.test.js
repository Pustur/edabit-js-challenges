import vendingMachine from './index';

test('vendingMachine', () => {
  const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Condoms' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
  ];

  expect(vendingMachine(products, 0, 0)).toBe('Enter a valid product number');
  expect(vendingMachine(products, 500, 0)).toBe('Enter a valid product number');
  expect(vendingMachine(products, 90, 1)).toBe(
    'Not enough money for this product',
  );
  expect(vendingMachine(products, 250, 4)).toEqual({
    product: 'Cookies',
    change: [],
  });
  expect(vendingMachine(products, 1000, 6)).toEqual({
    product: 'Condoms',
    change: [500],
  });
  expect(vendingMachine(products, 100, 9)).toEqual({
    product: 'Small snack',
    change: [20],
  });
  expect(vendingMachine(products, 200, 7)).toEqual({
    product: 'Crackers',
    change: [50, 20, 10],
  });
  expect(vendingMachine(products, 500, 1)).toEqual({
    product: 'Orange juice',
    change: [200, 200],
  });
  expect(vendingMachine(products, 500, 8)).toEqual({
    product: 'Potato chips',
    change: [200, 50, 20, 10],
  });
});
