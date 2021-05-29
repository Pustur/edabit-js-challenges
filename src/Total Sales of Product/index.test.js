import totalSales from './index';

const table1 = [
  ['A', 'B', 'C'],
  [2, 7, 1],
  [3, 6, 6],
  [4, 5, 5],
];

const table2 = [
  ['W', 'X', 'Y', 'Z'],
  [3, 5, 7, 1],
  [4, 5, 2, 3],
];

const table3 = [
  ['R', 'T', 'V', 'W', 'C'],
  [2, 3, 7, 7, 4],
  [8, 5, 2, 9, 0],
  [2, 5, 8, 7, 4],
  [5, 3, 7, 2, 3],
];

test('totalSales', () => {
  expect(totalSales(table1, 'A')).toBe(9);
  expect(totalSales(table1, 'B')).toBe(18);
  expect(totalSales(table1, 'C')).toBe(12);
  expect(totalSales(table1, 'D')).toBe('Product not found');

  expect(totalSales(table2, 'A')).toBe('Product not found');
  expect(totalSales(table2, 'W')).toBe(7);
  expect(totalSales(table2, 'Y')).toBe(9);
  expect(totalSales(table2, 'Z')).toBe(4);

  expect(totalSales(table3, 'A')).toBe('Product not found');
  expect(totalSales(table3, 'T')).toBe(16);
  expect(totalSales(table3, 'Y')).toBe('Product not found');
  expect(totalSales(table3, 'W')).toBe(25);
});
