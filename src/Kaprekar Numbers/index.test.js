import isKaprekar from './index';

test('isKaprekar', () => {
  expect(isKaprekar(1)).toBe(true);
  expect(isKaprekar(9)).toBe(true);
  expect(isKaprekar(3)).toBe(false);
  expect(isKaprekar(5)).toBe(false);
  expect(isKaprekar(99)).toBe(true);
  expect(isKaprekar(2)).toBe(false);
  expect(isKaprekar(297)).toBe(true);
  expect(isKaprekar(65)).toBe(false);
  expect(isKaprekar(348)).toBe(false);
  expect(isKaprekar(666)).toBe(false);
  expect(isKaprekar(1441)).toBe(false);
  expect(isKaprekar(77778)).toBe(true);
  expect(isKaprekar(533170)).toBe(true);
  expect(isKaprekar(102102)).toBe(false);
});
