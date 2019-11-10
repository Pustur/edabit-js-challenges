import missing from './index';

test('missing', () => {
  expect(missing([1, 3, 4, 5])).toBe(2);
  expect(missing([1, 19, 28])).toBe(10);
  expect(missing([1.5, 2, 3])).toBe(2.5);
  expect(missing([0, 60, 180])).toBe(120);
  expect(missing([-1.25, 1.25, 2.5])).toBe(0);
  expect(missing([2, 4, 6, 8, 10, 14, 16])).toBe(12);
  expect(missing([12, 15, 18, 21, 24, 30, 33])).toBe(27);
  expect(missing([100, 500, 900, 1300, 2100, 2500, 2900])).toBe(1700);
});
