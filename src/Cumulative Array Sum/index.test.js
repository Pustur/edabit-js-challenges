import cumulativeSum from './index';

test('cumulativeSum', () => {
  expect(cumulativeSum([])).toEqual([]);
  expect(cumulativeSum([1])).toEqual([1]);
  expect(cumulativeSum([1, 2, 3])).toEqual([1, 3, 6]);
  expect(cumulativeSum([1, -2, 3])).toEqual([1, -1, 2]);
  expect(cumulativeSum([-1, -2, -3])).toEqual([-1, -3, -6]);
  expect(
    cumulativeSum([
      3,
      3,
      -2,
      408,
      3,
      3,
      0,
      66,
      2,
      -2,
      2,
      3,
      4,
      2,
      -47,
      3,
      3,
      2,
    ]),
  ).toEqual([
    3,
    6,
    4,
    412,
    415,
    418,
    418,
    484,
    486,
    484,
    486,
    489,
    493,
    495,
    448,
    451,
    454,
    456,
  ]);
});
