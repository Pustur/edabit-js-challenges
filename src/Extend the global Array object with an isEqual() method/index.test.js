import isEqual from './index';

Array.prototype.isEqual = isEqual;

test('isEqual', () => {
  expect([1, 2, 3].isEqual([1, 2, 3])).toBe(true);
  expect([1, 2, 3].isEqual([1, 3, 2])).toBe(false);
  expect([7, 45, 'hello'].isEqual(['hello', 45, 7], true)).toBe(true);
});
