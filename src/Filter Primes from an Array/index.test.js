import filterPrimes from './index';

test('filterPrimes', () => {
  expect(filterPrimes([7, 9, 3, 9, 10, 11, 27])).toEqual([7, 3, 11]);
  expect(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70])).toEqual([
    10007,
    1009,
  ]);
  expect(
    filterPrimes([
      1009,
      10,
      10,
      10,
      3,
      33,
      9,
      4,
      1,
      61,
      63,
      69,
      1087,
      1091,
      1093,
      1097,
    ]),
  ).toEqual([1009, 3, 61, 1087, 1091, 1093, 1097]);
  expect(
    filterPrimes([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ]),
  ).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
});
