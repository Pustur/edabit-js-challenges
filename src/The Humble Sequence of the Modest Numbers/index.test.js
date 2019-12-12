import isModest from './index';

test('isModest', () => {
  expect(isModest(8)).toBe(false);
  expect(isModest(13)).toBe(true);
  expect(isModest(329)).toBe(false);
  expect(isModest(433)).toBe(true);
  expect(isModest(2036)).toBe(true);
  expect(isModest(2037)).toBe(true);
  expect(isModest(2038)).toBe(false);
  expect(isModest(3412)).toBe(false);
  expect(isModest(12036)).toBe(true);
  expect(isModest(20010)).toBe(false);
  expect(isModest(21333)).toBe(true);
  expect(isModest(450810)).toBe(true);
  expect(isModest(4221344)).toBe(false);
  expect(isModest(9111111)).toBe(true);
});
