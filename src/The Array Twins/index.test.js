import twins from './index';

test('twins', () => {
  expect(twins([3, 3])).toBe(1);
  expect(twins([3, 4, 6, 7, 6])).toBe(3);
  expect(twins([1, 2, 3, 4, 5, 5])).toBe(4);
  expect(twins([10, 20, 30, 5, 40, 50, 40, 15])).toBe(5);
});
