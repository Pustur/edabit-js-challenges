import checkEquality from './index';

test('checkEquality', () => {
  expect(checkEquality(0, '')).toBe(false);
  expect(checkEquality(1, '1')).toBe(false);
  expect(checkEquality(true, 1)).toBe(false);
  expect(checkEquality(0, false)).toBe(false);
  expect(checkEquality(null, undefined)).toBe(false);
});
