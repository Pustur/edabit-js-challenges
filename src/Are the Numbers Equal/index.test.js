import isEqual from './index';

test('isEqual', () => {
  expect(isEqual(2, 2)).toBe(true);
  expect(isEqual(88, 88)).toBe(true);
  expect(isEqual('1', 5)).toBe(false);
  expect(isEqual(36, 35)).toBe(false);
});
