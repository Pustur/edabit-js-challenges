import dividesEvenly from './index';

test('dividesEvenly', () => {
  expect(dividesEvenly(98, 7)).toBe(true);
  expect(dividesEvenly(78, 6)).toBe(true);
  expect(dividesEvenly(64, 4)).toBe(true);
  expect(dividesEvenly(95, 1)).toBe(true);
  expect(dividesEvenly(58, 2)).toBe(true);
  expect(dividesEvenly(30, 4)).toBe(false);
  expect(dividesEvenly(74, 7)).toBe(false);
  expect(dividesEvenly(87, 29)).toBe(true);
  expect(dividesEvenly(48, 24)).toBe(true);
  expect(dividesEvenly(98, 49)).toBe(true);
  expect(dividesEvenly(70, 35)).toBe(true);
  expect(dividesEvenly(38, 38)).toBe(true);
  expect(dividesEvenly(29, 3)).toBe(false);
  expect(dividesEvenly(20, 8)).toBe(false);
  expect(dividesEvenly(87, 49)).toBe(false);
  expect(dividesEvenly(34, 14)).toBe(false);
  expect(dividesEvenly(87, 73)).toBe(false);
  expect(dividesEvenly(99, 20)).toBe(false);
  expect(dividesEvenly(100, 6)).toBe(false);
  expect(dividesEvenly(66, 50)).toBe(false);
});
