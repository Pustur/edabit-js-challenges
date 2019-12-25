import isUndulating from './index';

test('isUndulating', () => {
  expect(isUndulating(121)).toBe(true);
  expect(isUndulating(12)).toBe(false);
  expect(isUndulating(494)).toBe(true);
  expect(isUndulating(3663)).toBe(false);
  expect(isUndulating(373737)).toBe(true);
  expect(isUndulating(12122)).toBe(false);
  expect(isUndulating(85856)).toBe(false);
  expect(isUndulating(949494)).toBe(true);
  expect(isUndulating(363738)).toBe(false);
  expect(isUndulating(81818181)).toBe(true);
});
