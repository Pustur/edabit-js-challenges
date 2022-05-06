import reversibleInclusiveList from './index';

test('reversibleInclusiveList', () => {
  expect(reversibleInclusiveList(5, 1)).toEqual([5, 4, 3, 2, 1]);
  expect(reversibleInclusiveList(6, 2)).toEqual([6, 5, 4, 3, 2]);
  expect(reversibleInclusiveList(9, 3)).toEqual([9, 8, 7, 6, 5, 4, 3]);
  expect(reversibleInclusiveList(24, 17)).toEqual([
    24, 23, 22, 21, 20, 19, 18, 17,
  ]);
  expect(reversibleInclusiveList(6, 16)).toEqual([
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);
  expect(reversibleInclusiveList(10, 20)).toEqual([
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  expect(reversibleInclusiveList(40, 50)).toEqual([
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);
  expect(reversibleInclusiveList(51, 41)).toEqual([
    51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41,
  ]);
  expect(reversibleInclusiveList(11, 66)).toEqual([
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
  ]);

  // Additional tests
  expect(reversibleInclusiveList(5, 5)).toEqual([5]);
});
