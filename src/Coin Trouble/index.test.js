import coinsDiv from './index';

test('coinsDiv', () => {
  expect(coinsDiv([9])).toBe(false);
  expect(coinsDiv([1, 1, 1])).toBe(true);
  expect(coinsDiv([1, 1, 1])).toBe(true);
  expect(coinsDiv([5, 3, 10, 1, 2])).toBe(false);
  expect(coinsDiv([80, 78, 79, 65, 61])).toBe(false);
  expect(coinsDiv([80, 78, 79, 65, 61])).toBe(false);
  expect(coinsDiv([1, 2, 3, 2, 2, 2, 3])).toBe(true);
  expect(coinsDiv([4, 7, 6, 8, 2, 1, 2])).toBe(true);
  expect(coinsDiv([3, 2, 2, 5, 9, 3, 3])).toBe(true);
  expect(coinsDiv([4, 14, 12, 21, 3, 1, 18, 5])).toBe(true);
  expect(coinsDiv([2, 4, 3, 2, 4, 9, 7, 8, 6, 9])).toBe(true);
  expect(coinsDiv([1, 13, 10, 6, 24, 16, 22, 4])).toBe(false);
  expect(coinsDiv([11, 9, 3, 22, 6, 2, 4, 10, 1])).toBe(false);
  expect(coinsDiv([3, 6, 2, 2, 2, 2, 1, 3, 2, 1, 3])).toBe(true);
  expect(coinsDiv([13, 6, 12, 23, 2, 8, 15, 31, 16])).toBe(false);
  expect(coinsDiv([10, 5, 20, 27, 17, 4, 3, 15, 0, 25])).toBe(true);
  expect(coinsDiv([246, 96, 129, 220, 203, 75, 200, 77, 114, 91])).toBe(false);
  expect(
    coinsDiv([
      7,
      3,
      3,
      4,
      5,
      4,
      1,
      1,
      1,
      1,
      1,
      8,
      7,
      3,
      3,
      4,
      5,
      4,
      1,
      1,
      1,
      1,
      1,
      8,
    ]),
  ).toBe(true);
});
