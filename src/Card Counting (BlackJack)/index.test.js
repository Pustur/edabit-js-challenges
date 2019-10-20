import count from './index';

test('count', () => {
  expect(count([])).toBe(0);
  expect(count([2, 2, 2, 2, 2, 2, 2, 2])).toBe(8);
  expect(count(['A', 'A', 'K', 'Q', 'Q', 'J'])).toBe(-6);
  expect(count([5, 9, 10, 3, 'J', 'A', 4, 8, 5])).toBe(1);
  expect(count(['A', 5, 5, 2, 6, 2, 3, 8, 9, 7])).toBe(5);
  expect(count(['A', 'A', 'A', 'A', 'A', 'A', 'A'])).toBe(-7);
  expect(count(['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2])).toBe(0);
});
