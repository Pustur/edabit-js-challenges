import digitalCipher from './index';

test('digitalCipher', () => {
  expect(digitalCipher('edabit', 100)).toEqual([6, 4, 1, 3, 9, 20]);
  expect(digitalCipher('scout', 1939)).toEqual([20, 12, 18, 30, 21]);
  expect(digitalCipher('mubashir', 1990)).toEqual([
    14, 30, 11, 1, 20, 17, 18, 18,
  ]);
  expect(digitalCipher('pakistan', 1947)).toEqual([
    17, 10, 15, 16, 20, 29, 5, 21,
  ]);
  expect(digitalCipher('nomoretears', 12)).toEqual([
    15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20,
  ]);
  expect(digitalCipher('masterpiece', 1939)).toEqual([
    14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8,
  ]);
  expect(digitalCipher('pakistanairforce', 1965)).toEqual([
    17, 10, 17, 14, 20, 29, 7, 19, 2, 18, 24, 11, 16, 27, 9, 10,
  ]);
});
