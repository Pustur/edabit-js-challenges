import sumEveryNth from './index';

test('sumEveryNth', () => {
  expect(sumEveryNth([8, 2, 2, 7, 10, 6, 3, 5, 4, 4], 12)).toBe(0);
  expect(sumEveryNth([3, 10, 3, 8, 10, 9, 1, 3, 7, 2], 2)).toBe(32);
  expect(sumEveryNth([2, 5, 3, 9, 5, 7, 10, 7, 3, 3, 3], 9)).toBe(3);
  expect(sumEveryNth([10, 9, 7, 8, 5, 7, 9, 5, 3, 3, 1], 7)).toBe(9);
  expect(sumEveryNth([9, 3, 7, 10, 3, 10, 2, 8, 8, 7, 1], 11)).toBe(1);
  expect(sumEveryNth([6, 5, 7, 9, 4, 2, 2, 9, 8, 10, 5, 2, 8], 7)).toBe(2);
  expect(sumEveryNth([3, 3, 2, 6, 4, 4, 10, 2, 10, 5, 5, 8, 6], 1)).toBe(68);
  expect(sumEveryNth([2, 1, 7, 4, 2, 6, 2, 4, 6, 1, 2, 2, 10, 10], 2)).toBe(28);
  expect(sumEveryNth([7, 2, 9, 6, 1, 8, 8, 10, 2, 5, 5, 7, 3, 10, 1], 2)).toBe(
    48,
  );
  expect(sumEveryNth([10, 1, 10, 8, 3, 2, 10, 8, 2, 3, 8, 7, 6, 4, 8], 6)).toBe(
    9,
  );
  expect(
    sumEveryNth([8, 9, 4, 8, 7, 5, 2, 9, 1, 8, 3, 8, 4, 9, 9, 6], 11),
  ).toBe(3);
  expect(
    sumEveryNth([10, 9, 2, 5, 9, 6, 4, 6, 7, 10, 9, 9, 9, 9, 2, 1, 2], 7),
  ).toBe(13);
  expect(
    sumEveryNth([10, 4, 8, 4, 3, 9, 1, 1, 10, 7, 1, 4, 5, 5, 6, 1, 9], 6),
  ).toBe(13);
  expect(
    sumEveryNth([5, 1, 4, 7, 3, 9, 4, 5, 9, 6, 1, 6, 9, 6, 7, 6, 8, 1], 14),
  ).toBe(6);
  expect(
    sumEveryNth([4, 5, 8, 7, 8, 1, 7, 9, 7, 4, 6, 2, 8, 8, 9, 9, 1, 7, 4], 6),
  ).toBe(10);
  expect(
    sumEveryNth([8, 3, 5, 2, 6, 1, 5, 4, 3, 6, 6, 8, 5, 10, 7, 3, 7, 3, 5], 11),
  ).toBe(6);
  expect(
    sumEveryNth([2, 6, 3, 10, 6, 5, 4, 7, 9, 4, 1, 8, 9, 10, 8, 7, 2, 3, 6], 8),
  ).toBe(14);
  expect(
    sumEveryNth(
      [7, 4, 4, 10, 2, 6, 1, 9, 5, 10, 6, 4, 6, 6, 5, 9, 4, 10, 9],
      8,
    ),
  ).toBe(18);
  expect(
    sumEveryNth(
      [4, 6, 10, 8, 4, 7, 10, 10, 4, 4, 9, 2, 1, 9, 9, 8, 6, 6, 10],
      7,
    ),
  ).toBe(19);
  expect(
    sumEveryNth(
      [5, 10, 10, 9, 10, 3, 5, 6, 6, 2, 10, 2, 9, 6, 8, 9, 10, 9, 4],
      16,
    ),
  ).toBe(9);
});
