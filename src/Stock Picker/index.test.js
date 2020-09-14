import stockPicker from './index';

test('stockPicker', () => {
  expect(stockPicker([100, 10, 8, 5])).toBe(-1);
  expect(stockPicker([7, 1, 5, 5, 2, 1, 3])).toBe(4);
  expect(stockPicker([1, 2, 4, 10, 100, 2, 3])).toBe(99);
  expect(stockPicker([90, 100, 111, 0, 1, 2, 3])).toBe(21);
  expect(stockPicker([10, 1000, 1, 1, 1, 2000, 3])).toBe(1999);
});
