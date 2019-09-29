import isTruthy from './index';

test('isTruthy', () => {
  expect(isTruthy(0)).toBe(0);
  expect(isTruthy(1)).toBe(1);
  expect(isTruthy('')).toBe(0);
  expect(isTruthy([])).toBe(1);
  expect(isTruthy({})).toBe(1);
  expect(isTruthy(-1)).toBe(1);
  expect(isTruthy(NaN)).toBe(0);
  expect(isTruthy(true)).toBe(1);
  expect(isTruthy(null)).toBe(0);
  expect(isTruthy(false)).toBe(0);
  expect(isTruthy('false')).toBe(1);
  expect(isTruthy(undefined)).toBe(0);
  expect(isTruthy(function() {})).toBe(1); // eslint-disable-line func-names
});
