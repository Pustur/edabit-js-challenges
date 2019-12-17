import numberGroups from './index';

test('numberGroups', () => {
  expect(
    numberGroups([4, 8, 9, 8, 4], [10, 2, 5, 7, 2], [1, 1, 3, 6, 6]),
  ).toEqual([]);
  expect(
    numberGroups([5, 9, 9, 9, 5], [8, 6, 1, 1, 1], [3, 7, 2, 2, 6]),
  ).toEqual([6]);
  expect(
    numberGroups([8, 8, 9, 3, 8], [5, 1, 10, 6, 1], [2, 7, 7, 4, 2]),
  ).toEqual([]);
  expect(
    numberGroups([4, 4, 4, 5, 1], [8, 2, 8, 9, 4], [7, 4, 3, 10, 4]),
  ).toEqual([4]);
  expect(
    numberGroups([7, 10, 7, 1, 4], [6, 2, 1, 8, 5], [9, 4, 9, 9, 3]),
  ).toEqual([1, 4]);
  expect(
    numberGroups([4, 3, 3, 5, 9], [6, 9, 6, 6, 1], [10, 5, 7, 10, 7]),
  ).toEqual([5, 9]);
  expect(
    numberGroups([4, 7, 2, 5, 9], [6, 10, 2, 2, 10], [9, 9, 2, 9, 9]),
  ).toEqual([2, 9]);
  expect(
    numberGroups([3, 1, 7, 6, 4], [6, 10, 2, 2, 6], [1, 1, 2, 5, 5]),
  ).toEqual([1, 2, 6]);
  expect(
    numberGroups([7, 10, 4, 8, 2], [3, 8, 1, 9, 4], [6, 1, 5, 8, 6]),
  ).toEqual([1, 4, 8]);
  expect(
    numberGroups([10, 1, 10, 10, 3], [7, 6, 8, 7, 4], [7, 7, 7, 2, 10]),
  ).toEqual([7, 10]);
  expect(
    numberGroups([1, 10, 6, 10, 3], [9, 3, 9, 6, 8], [7, 8, 5, 3, 6]),
  ).toEqual([3, 6, 8]);
  expect(
    numberGroups([7, 6, 9, 2, 6], [8, 5, 6, 8, 3], [5, 8, 6, 8, 3]),
  ).toEqual([3, 5, 6, 8]);
  expect(
    numberGroups([2, 6, 5, 4, 4], [8, 4, 8, 7, 8], [6, 8, 8, 3, 5]),
  ).toEqual([4, 5, 6, 8]);
  expect(
    numberGroups([6, 3, 7, 3, 1], [4, 6, 5, 9, 2], [10, 7, 8, 1, 2]),
  ).toEqual([1, 2, 6, 7]);
  expect(
    numberGroups([4, 6, 3, 9, 9], [4, 7, 10, 6, 9], [7, 9, 1, 1, 5]),
  ).toEqual([4, 6, 7, 9]);
  expect(
    numberGroups([7, 7, 6, 8, 3], [3, 3, 10, 3, 10], [5, 7, 2, 2, 10]),
  ).toEqual([3, 7, 10]);
  expect(
    numberGroups([1, 5, 3, 3, 5], [9, 5, 10, 8, 10], [4, 6, 1, 6, 10]),
  ).toEqual([1, 5, 10]);
  expect(
    numberGroups([9, 8, 2, 9, 1], [10, 3, 2, 5, 6], [1, 7, 8, 3, 7]),
  ).toEqual([1, 2, 3, 8]);
  expect(
    numberGroups([3, 4, 9, 1, 10], [2, 9, 6, 8, 5], [6, 9, 10, 1, 7]),
  ).toEqual([1, 6, 9, 10]);
  expect(
    numberGroups([2, 8, 10, 2, 10], [8, 9, 4, 6, 8], [6, 5, 4, 1, 10]),
  ).toEqual([4, 6, 8, 10]);
});
