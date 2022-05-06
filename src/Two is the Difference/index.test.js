import differenceTwo from './index';

test('differenceTwo', () => {
  expect(differenceTwo([1, 23, 3, 4, 7])).toEqual([[1, 3]]);
  expect(differenceTwo([1, 2, 3, 4])).toEqual([
    [1, 3],
    [2, 4],
  ]);
  expect(differenceTwo([4, 3, 1, 5, 6])).toEqual([
    [1, 3],
    [3, 5],
    [4, 6],
  ]);
});
