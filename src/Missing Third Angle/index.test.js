import missingAngle from './index';

test('missingAngle', () => {
  expect(missingAngle(35, 55)).toBe('right');
  expect(missingAngle(45, 45)).toBe('right');
  expect(missingAngle(27, 59)).toBe('obtuse');
  expect(missingAngle(45, 15)).toBe('obtuse');
  expect(missingAngle(31, 100)).toBe('acute');
  expect(missingAngle(135, 11)).toBe('acute');
});
