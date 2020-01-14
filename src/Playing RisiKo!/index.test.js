import risiko from './index';

test('risiko', () => {
  expect(risiko([3, 1], [1])).toBe(1);
  expect(risiko([3], [2, 1])).toBe(1);
  expect(risiko([5], [3, 1, 4])).toBe(1);
  expect(risiko([3, 5], [3, 5])).toBe(0);
  expect(risiko([3, 6, 6], [6])).toBe(0);
  expect(risiko([3, 6], [6, 4, 4])).toBe(0);
  expect(risiko([4, 4, 3], [3, 2])).toBe(2);
  expect(risiko([5, 4], [3, 4, 3])).toBe(2);
  expect(risiko([3, 6, 4], [2, 5, 3])).toBe(3);
  expect(risiko([3, 3, 3], [2, 1, 2])).toBe(3);
});
