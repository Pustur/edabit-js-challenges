import isDisarium from './index';

test('isDisarium', () => {
  expect(isDisarium(1)).toBe(true);
  expect(isDisarium(6)).toBe(true);
  expect(isDisarium(75)).toBe(false);
  expect(isDisarium(89)).toBe(true);
  expect(isDisarium(135)).toBe(true);
  expect(isDisarium(175)).toBe(true);
  expect(isDisarium(372)).toBe(false);
  expect(isDisarium(466)).toBe(false);
  expect(isDisarium(518)).toBe(true);
  expect(isDisarium(598)).toBe(true);
  expect(isDisarium(696)).toBe(false);
  expect(isDisarium(876)).toBe(false);
});
