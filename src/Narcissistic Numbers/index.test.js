import isNarcissistic from './index';

test('isNarcissistic', () => {
  expect(isNarcissistic(6)).toBe(true);
  expect(isNarcissistic(66)).toBe(false);
  expect(isNarcissistic(65239)).toBe(false);
  expect(isNarcissistic(92727)).toBe(true);
  expect(isNarcissistic(548834)).toBe(true);
  expect(isNarcissistic(886243)).toBe(false);
  expect(isNarcissistic(1741725)).toBe(true);
  expect(isNarcissistic(42300981)).toBe(false);
  expect(isNarcissistic(472335975)).toBe(true);
});
