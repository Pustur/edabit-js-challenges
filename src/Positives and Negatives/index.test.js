import alternatePosNeg from './index';

test('alternatePosNeg', () => {
  expect(alternatePosNeg([22])).toBe(true);
  expect(alternatePosNeg([40])).toBe(true);
  expect(alternatePosNeg([30])).toBe(true);
  expect(alternatePosNeg([0])).toBe(false);
  expect(alternatePosNeg([24, -10])).toBe(true);
  expect(alternatePosNeg([0, 0, 0, 0])).toBe(false);
  expect(alternatePosNeg([9, -4, 8, -16])).toBe(true);
  expect(alternatePosNeg([3, -7, 15, 18])).toBe(false);
  expect(alternatePosNeg([3, -7, 15, -18])).toBe(true);
  expect(alternatePosNeg([-6, 1, -1, 4, -3])).toBe(true);
  expect(alternatePosNeg([0, 2, -5, 8, -12])).toBe(false);
  expect(alternatePosNeg([3, -7, 15, -18, 0])).toBe(false);
  expect(alternatePosNeg([3, -2, 5, -5, 2, -8])).toBe(true);
  expect(alternatePosNeg([40, 50, -7, 45, -7])).toBe(false);
  expect(alternatePosNeg([4, 4, -2, 3, -6, 10])).toBe(false);
  expect(alternatePosNeg([34, 49, 33, 17, -47])).toBe(false);
  expect(alternatePosNeg([40, 27, -44, -13, -31])).toBe(false);
  expect(alternatePosNeg([-23, -16, -9, -15, 16])).toBe(false);
  expect(alternatePosNeg([-2, 4, 16, -15, 24, 2])).toBe(false);
  expect(alternatePosNeg([19, -12, -37, 44, -43, 44, 47])).toBe(false);
  expect(alternatePosNeg([-21, 42, -11, 27, -16, 36, 37])).toBe(false);
  expect(alternatePosNeg([50, 28, -5, 25, -14, -2, 20, 26, -32])).toBe(false);
  expect(alternatePosNeg([41, 11, 37, -30, -29, 39, -45, 15, -41, 7])).toBe(
    false,
  );
});
