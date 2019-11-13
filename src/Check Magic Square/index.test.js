import isMagicSquare from './index';

test('isMagicSquare', () => {
  expect(
    isMagicSquare([
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ]),
  ).toBe(true);
  expect(
    isMagicSquare([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toBe(false);
  expect(
    isMagicSquare([
      [16, 3, 2, 13],
      [5, 10, 11, 8],
      [9, 6, 7, 12],
      [4, 15, 14, 1],
    ]),
  ).toBe(true);
});
