import sumFractions from './index';

test('sumFractions', () => {
  expect(
    sumFractions([
      [18, 13],
      [4, 5],
    ]),
  ).toBe(2);
  expect(
    sumFractions([
      [36, 4],
      [22, 60],
    ]),
  ).toBe(9);
  expect(
    sumFractions([
      [41, 14],
      [10, 91],
    ]),
  ).toBe(3);
  expect(
    sumFractions([
      [11, 12],
      [18, 13],
      [4, 5],
    ]),
  ).toBe(3);
  expect(
    sumFractions([
      [-11, 12],
      [18, 13],
      [4, 5],
    ]),
  ).toBe(1);
  expect(
    sumFractions([
      [11, 2],
      [3, 4],
      [5, 4],
      [21, 11],
      [12, 6],
    ]),
  ).toBe(11);
});
