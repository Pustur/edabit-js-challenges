import nearestElement from './index';

test('nearestElement', () => {
  expect(nearestElement(50, [100, 49, 51])).toBe(2);
  expect(nearestElement(100, [80, 60, 40])).toBe(0);
  expect(nearestElement(10, [1, 100, 1000])).toBe(0);
  expect(nearestElement(-20, [-50, -10, -30])).toBe(1);
  expect(nearestElement(1, [0, -2, 3, 2, -1])).toBe(3);
  expect(nearestElement(48, [47, 49, 73, 51, 44, 41])).toBe(1);
  expect(nearestElement(-50, [13, 86, -49, -51, 8, 0])).toBe(2);
  expect(nearestElement(100, [88, 99, 101, 108, 97, 98, 36])).toBe(2);
});
