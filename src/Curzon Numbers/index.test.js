import isCurzon from './index';

test('isCurzon', () => {
  expect(isCurzon(5)).toBe(true);
  expect(isCurzon(10)).toBe(false);
  expect(isCurzon(14)).toBe(true);
  expect(isCurzon(86)).toBe(true);
  expect(isCurzon(90)).toBe(true);
  expect(isCurzon(115)).toBe(false);
  expect(isCurzon(120)).toBe(false);
  expect(isCurzon(194)).toBe(true);
  expect(isCurzon(293)).toBe(true);
});
