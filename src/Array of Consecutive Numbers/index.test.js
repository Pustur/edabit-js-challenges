import getSequence from './index';

test('getSequence', () => {
  expect(getSequence(1000, 1000)).toEqual([1000]);
  expect(getSequence(0, 3)).toEqual([0, 1, 2, 3]);
  expect(getSequence(-100, -100)).toEqual([-100]);
  expect(getSequence(1, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(getSequence(98, 100)).toEqual([98, 99, 100]);
  expect(getSequence(-10, 1)).toEqual([
    -10,
    -9,
    -8,
    -7,
    -6,
    -5,
    -4,
    -3,
    -2,
    -1,
    0,
    1,
  ]);
  expect(getSequence(1450, 1460)).toEqual([
    1450,
    1451,
    1452,
    1453,
    1454,
    1455,
    1456,
    1457,
    1458,
    1459,
    1460,
  ]);
});
