import arrayOfMultiples from './index';

test('arrayOfMultiples', () => {
  expect(arrayOfMultiples(140, 3)).toEqual([140, 280, 420]);
  expect(arrayOfMultiples(7, 5)).toEqual([7, 14, 21, 28, 35]);
  expect(arrayOfMultiples(17, 7)).toEqual([17, 34, 51, 68, 85, 102, 119]);
  expect(arrayOfMultiples(7, 8)).toEqual([7, 14, 21, 28, 35, 42, 49, 56]);
  expect(arrayOfMultiples(12, 10)).toEqual([
    12,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    108,
    120,
  ]);
  expect(arrayOfMultiples(630, 14)).toEqual([
    630,
    1260,
    1890,
    2520,
    3150,
    3780,
    4410,
    5040,
    5670,
    6300,
    6930,
    7560,
    8190,
    8820,
  ]);
  expect(arrayOfMultiples(11, 21)).toEqual([
    11,
    22,
    33,
    44,
    55,
    66,
    77,
    88,
    99,
    110,
    121,
    132,
    143,
    154,
    165,
    176,
    187,
    198,
    209,
    220,
    231,
  ]);
});
