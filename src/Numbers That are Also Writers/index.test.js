import isAutobiographical from './index';

test('isAutobiographical', () => {
  expect(isAutobiographical(0)).toBe(false);
  expect(isAutobiographical(1210)).toBe(true);
  expect(isAutobiographical(638)).toBe(false);
  expect(isAutobiographical(2020)).toBe(true);
  expect(isAutobiographical(2100)).toBe(false);
  expect(isAutobiographical(12345)).toBe(false);
  expect(isAutobiographical(3211000)).toBe(true);
  expect(isAutobiographical(3434343)).toBe(false);
  expect(isAutobiographical(10 ** 10)).toBe(false);
  expect(isAutobiographical(6210001000)).toBe(true);
});
