import persistence from './index';

test('persistence', () => {
  expect(persistence(0)).toBe(0);
  expect(persistence(10)).toBe(1);
  expect(persistence(25)).toBe(2);
  expect(persistence(39)).toBe(3);
  expect(persistence(77)).toBe(4);
  expect(persistence(679)).toBe(5);
  expect(persistence(6788)).toBe(6);
  expect(persistence(68889)).toBe(7);
  expect(persistence(2677889)).toBe(8);
  expect(persistence(26888999)).toBe(9);
  expect(persistence(3778888999)).toBe(10);
  expect(persistence(277777788888899)).toBe(11);

  // Additional tests from instructions
  expect(persistence(9)).toBe(0);
  expect(persistence(12)).toBe(1);
  expect(persistence(678852)).toBe(2);
});
