import antiDivisors from './index';

test('antiDivisors', () => {
  expect(antiDivisors(1)).toEqual([]);
  expect(antiDivisors(0)).toEqual([]);
  expect(antiDivisors(-33)).toEqual([]);
  expect(antiDivisors(12)).toEqual([5, 8]);
  expect(antiDivisors(10)).toEqual([3, 4, 7]);
  expect(antiDivisors(20)).toEqual([3, 8, 13]);
  expect(antiDivisors(31)).toEqual([2, 3, 7, 9, 21]);
  expect(antiDivisors(55)).toEqual([2, 3, 10, 22, 37]);
  expect(antiDivisors(105)).toEqual([2, 6, 10, 11, 14, 19, 30, 42, 70]);
  expect(antiDivisors(666)).toEqual([4, 11, 12, 31, 36, 43, 121, 148, 444]);
  expect(antiDivisors(9999)).toEqual([
    2,
    6,
    7,
    18,
    22,
    66,
    198,
    202,
    606,
    1818,
    2222,
    2857,
    6666,
  ]);
});
