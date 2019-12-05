import iqr from './index';

test('iqr', () => {
  expect(iqr([-12, 0, 0, 0, 3])).toBe(7.5);
  expect(iqr([0, 0, 0, 0, 0, 0])).toBe(0.0);
  expect(iqr([-3, 0, 0, 0, 0, 4.7])).toBe(0.0);
  expect(iqr([0, 0, 0, 0, 0, 0, 0])).toBe(0.0);
  expect(iqr([6, 4, 4, 4, 3, 3, 2, 1])).toBe(1.5);
  expect(iqr([-3.1, -3.8, -14, 23, 0])).toBe(20.4);
  expect(iqr([14, 28, 0, 15, 12, 15, 15, 15])).toBe(2.0);
  expect(iqr([1, 1, 3, 4, 4, 5, 5, 5, 6, 7, 9])).toBe(3.0);
  expect(iqr([8.2, 3, 6, 6, 5, 2.6, 8, 4.9, 5, 7.9])).toBe(3.0);
});
