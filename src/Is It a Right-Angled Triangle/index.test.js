import isRightAngle from './index';

test('isRightAngle', () => {
  expect(isRightAngle([], 'side')).toBe(true);
  expect(isRightAngle([], 'angle')).toBe(true);
  expect(isRightAngle([43], 'angle')).toBe(true);
  expect(isRightAngle([90], 'angle')).toBe(true);
  expect(isRightAngle([45, 46], 'side')).toBe(true);
  expect(isRightAngle([30, 60], 'angle')).toBe(true);
  expect(isRightAngle([3, 4, 5], 'side')).toBe(true);
  expect(isRightAngle([90, 90], 'angle')).toBe(false);
  expect(isRightAngle([45, 46], 'angle')).toBe(false);
  expect(isRightAngle([4, 5, 6], 'side')).toBe(false);
  expect(isRightAngle([30, 60, 90], 'angle')).toBe(true);
  expect(isRightAngle([177, 2, 1], 'angle')).toBe(false);
  expect(isRightAngle([90, 90, 90], 'angle')).toBe(false);
  expect(isRightAngle([60, 60, 60], 'angle')).toBe(false);
  expect(isRightAngle([20, 20, 20, 20], 'side')).toBe(false);
  expect(isRightAngle([20, 20, 20, 20], 'angle')).toBe(false);
});
