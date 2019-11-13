import numOfSubbarrays from './index';

test('numOfSubbarrays', () => {
  expect(numOfSubbarrays([1, 2, 3])).toBe(0);
  expect(numOfSubbarrays([[1, 2, 3]])).toBe(1);
  expect(
    numOfSubbarrays([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ]),
  ).toBe(3);
  expect(
    numOfSubbarrays([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ]),
  ).toBe(4);
});
