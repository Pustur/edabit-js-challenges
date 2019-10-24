import depth from './index';

test('depth', () => {
  expect(depth([1, 2, 3, 4])).toBe(1);
  expect(depth([1, [2, 3, 4]])).toBe(2);
  expect(depth([1, [2, [3, 4]]])).toBe(3);
  expect(depth([1, [2, [3, [4]]]])).toBe(4);
  expect(depth([1, [2, [3, [4]]], 4])).toBe(4);
  expect(depth([1, [2], 3, [4], 5, [6]])).toBe(2);
  expect(depth([1, 2, 3, 4, [[5]], [6], 7])).toBe(3);
});
