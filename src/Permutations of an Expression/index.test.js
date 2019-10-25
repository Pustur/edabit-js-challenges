import greaterPermutation from './index';

test('greaterPermutation', () => {
  expect(greaterPermutation('a ** b - c', [2, 3, 1])).toBe('3 ** 2 - 1 = 8');
  expect(greaterPermutation('a ** b % c', [3, 7, 5])).toBe('5 ** 3 % 7 = 6');
  expect(greaterPermutation('(a - b) * c', [1, 2, 3])).toBe('(3 - 1) * 2 = 4');
  expect(greaterPermutation('(a / b) ** c', [6, 2, 4])).toBe(
    '(6 / 2) ** 4 = 81',
  );
  expect(greaterPermutation('a % b + (c * 2)', [3, 1, 2])).toBe(
    '1 % 2 + (3 * 2) = 7',
  );
  expect(greaterPermutation('a % b - (c - 4)', [9, 6, 8])).toBe(
    '8 % 9 - (6 - 4) = 6',
  );
  expect(greaterPermutation('((a * 2) % b) + 4 - (c + 6)', [11, 20, 5])).toBe(
    '((20 * 2) % 11) + 4 - (5 + 6) = 0',
  );
  expect(greaterPermutation('(a / 10) + (b ** 2) - (c / 3)', [7, 67, 19])).toBe(
    '(19 / 10) + (67 ** 2) - (7 / 3) = 4488.57',
  );
  expect(
    greaterPermutation('(a ** 4) / (b ** 3) + (c * 10)', [60, 12, 3]),
  ).toBe('(60 ** 4) / (3 ** 3) + (12 * 10) = 480120');
});
