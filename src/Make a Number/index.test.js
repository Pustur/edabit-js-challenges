import makeNumber from './index';

test('makeNumber', () => {
  expect(makeNumber(1)).toEqual([]);
  expect(makeNumber(2)).toEqual([]);
  expect(makeNumber(3)).toEqual([[1, 2]]);
  expect(makeNumber(4)).toEqual([]);
  expect(makeNumber(5)).toEqual([[2, 3]]);
  expect(makeNumber(6)).toEqual([[1, 2, 3]]);
  expect(makeNumber(7)).toEqual([[3, 4]]);
  expect(makeNumber(8)).toEqual([]);
  expect(makeNumber(9)).toEqual([
    [2, 3, 4],
    [4, 5],
  ]);
  expect(makeNumber(18)).toEqual([
    [3, 4, 5, 6],
    [5, 6, 7],
  ]);
  expect(makeNumber(40)).toEqual([[6, 7, 8, 9, 10]]);
  expect(makeNumber(100)).toEqual([
    [9, 10, 11, 12, 13, 14, 15, 16],
    [18, 19, 20, 21, 22],
  ]);
  expect(makeNumber(333)).toEqual([
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    [33, 34, 35, 36, 37, 38, 39, 40, 41],
    [53, 54, 55, 56, 57, 58],
    [110, 111, 112],
    [166, 167],
  ]);
});
