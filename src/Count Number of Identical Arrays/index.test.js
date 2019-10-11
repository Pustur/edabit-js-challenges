import countIdenticalArrays from './index';

test('countIdenticalArrays', () => {
  expect(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])).toBe(
    2,
  );
  expect(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])).toBe(
    0,
  );
  expect(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])).toBe(
    3,
  );
});
