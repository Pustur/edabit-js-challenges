import median from './index';

test('median', () => {
  expect(median([2, 3, 3, 3, 3, 5])).toBe(3);
  expect(median([3, 4, 4, 5, 7, 8])).toBe(4.5);
  expect(median([1, 4, 4, 5, 8, 9])).toBe(4.5);
  expect(median([1, 1, 2, 2, 10, 10])).toBe(2);
  expect(median([3, 4, 4, 5, 6, 8])).toBe(4.5);
  expect(median([3, 4, 4, 6, 9, 9, 9])).toBe(6);
  expect(median([1, 4, 4, 9, 9, 10])).toBe(6.5);
  expect(median([4, 5, 5, 6, 8, 10])).toBe(5.5);
  expect(median([3, 4, 4, 5, 7, 8, 9])).toBe(5);
  expect(median([1, 3, 4, 8, 8, 10, 10])).toBe(8);
  expect(median([1, 7, 8, 8, 10, 10, 10])).toBe(8);
  expect(median([1, 4, 8, 8, 8, 8, 9, 10])).toBe(8);
  expect(median([1, 1, 4, 5, 5, 9, 9, 10])).toBe(5);
  expect(median([2, 4, 5, 5, 7, 7, 9, 10])).toBe(6);
  expect(median([3, 3, 4, 5, 6, 6, 7, 9])).toBe(5.5);
  expect(median([1, 1, 2, 2, 2, 4, 5, 6, 8])).toBe(2);
  expect(median([1, 1, 3, 4, 6, 6, 6, 7, 10])).toBe(6);
  expect(median([1, 2, 4, 4, 4, 7, 7, 9, 10])).toBe(4);
  expect(median([2, 4, 4, 5, 5, 8, 8, 9, 10])).toBe(5);
  expect(median([3, 4, 6, 6, 6, 7, 9, 10, 10])).toBe(6);
});
