import isLeap from './index';

test('isLeap', () => {
  expect(isLeap(1452)).toBe(true);
  expect(isLeap(1600)).toBe(true);
  expect(isLeap(1800)).toBe(false);
  expect(isLeap(1904)).toBe(true);
  expect(isLeap(1985)).toBe(false);
  expect(isLeap(1998)).toBe(false);
  expect(isLeap(2000)).toBe(true);
  expect(isLeap(2019)).toBe(false);
  expect(isLeap(2020)).toBe(true);
  expect(isLeap(2048)).toBe(true);
});
