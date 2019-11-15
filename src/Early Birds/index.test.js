import isEarlyBird from './index';

test('isEarlyBird', () => {
  expect(isEarlyBird(20, 14)).toEqual([[18, 19]]);
  expect(isEarlyBird(212, 156)).toEqual([[358, 359, 360]]);
  expect(isEarlyBird(400, 240)).toEqual([[610, 611, 612]]);
  expect(isEarlyBird(20, 12)).toEqual([[1, 2], [14, 15], 'Early Bird!']);
  expect(isEarlyBird(50, 34)).toEqual([
    [3, 4],
    [58, 59],
    [77, 78],
    'Early Bird!',
  ]);
  expect(isEarlyBird(101, 101)).toEqual([
    [10, 11, 12],
    [193, 194, 195],
    'Early Bird!',
  ]);
  expect(isEarlyBird(1200, 745)).toEqual([
    [1263, 1264, 1265],
    [1613, 1614, 1615],
    [2125, 2126, 2127],
    'Early Bird!',
  ]);
  expect(isEarlyBird(900, 888)).toEqual([
    [166, 167, 168],
    [2554, 2555, 2556],
    [2555, 2556, 2557],
    [2556, 2557, 2558],
    'Early Bird!',
  ]);
  expect(isEarlyBird(2000, 666)).toEqual([
    [122, 123, 124],
    [1888, 1889, 1890],
    [1889, 1890, 1891],
    [1890, 1891, 1892],
    [5555, 5556, 5557],
    'Early Bird!',
  ]);
});
