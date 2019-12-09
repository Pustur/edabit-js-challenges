import straightDigital from './index';

test('straightDigital', () => {
  expect(straightDigital(-123456789)).toBe('Not Straight');
  expect(straightDigital(99)).toBe('Not Straight');
  expect(straightDigital(123)).toBe(1);
  expect(straightDigital(124)).toBe('Not Straight');
  expect(straightDigital(147)).toBe(3);
  expect(straightDigital(666)).toBe('Trivial Straight');
  expect(straightDigital(753)).toBe(-2);
  expect(straightDigital(951)).toBe(-4);
  expect(straightDigital(1313)).toBe('Not Straight');
  expect(straightDigital(9630)).toBe(-3);
  expect(straightDigital(13579)).toBe(2);
  expect(straightDigital(24642)).toBe('Not Straight');
  expect(straightDigital(111111)).toBe('Trivial Straight');
  expect(straightDigital(9876543210)).toBe(-1);
});
