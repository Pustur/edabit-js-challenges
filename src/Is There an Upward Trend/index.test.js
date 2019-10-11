import upwardTrend from './index';

test('upwardTrend', () => {
  expect(upwardTrend([1, 3, 5, 7, 9])).toBe(true);
  expect(upwardTrend([1, 2, 3, 4, 5, 6])).toBe(true);
  expect(upwardTrend([6, 9, 11, 15, 12])).toBe(false);
  expect(upwardTrend([1, 3, 2, 5, 6, 7])).toBe(false);
  expect(upwardTrend([10, 12, 13, 15, 20])).toBe(true);
  expect(upwardTrend([1, 2, 3, 4, 5, '6', 7, 8, 9])).toBe(
    'Strings not permitted!',
  );
});
