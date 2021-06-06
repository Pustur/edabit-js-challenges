import digitalDecipher from './index';

test('digitalDecipher', () => {
  expect(digitalDecipher([6, 4, 1, 3, 9, 20], 100)).toBe('edabit');
  expect(digitalDecipher([20, 12, 18, 30, 21], 1939)).toBe('scout');
  expect(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)).toBe(
    'mubashir',
  );
  expect(digitalDecipher([17, 10, 15, 16, 20, 29, 5, 21], 1947)).toBe(
    'pakistan',
  );
  expect(digitalDecipher([15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20], 12)).toBe(
    'nomoretears',
  );
  expect(digitalDecipher([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)).toBe(
    'masterpiece',
  );
  expect(
    digitalDecipher(
      [17, 10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10],
      1965,
    ),
  ).toBe('pakistanairforce');
});
