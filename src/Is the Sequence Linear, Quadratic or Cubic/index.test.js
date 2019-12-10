import seqLevel from './index';

test('seqLevel', () => {
  expect(seqLevel([1, 2, 3, 4, 5])).toBe('Linear');
  expect(seqLevel([2, 1, 0, -1, -2])).toBe('Linear');
  expect(seqLevel([3, 6, 10, 15, 21])).toBe('Quadratic');
  expect(seqLevel([4, 9, 16, 25, 36])).toBe('Quadratic');
  expect(seqLevel([7, 17, 31, 49, 71])).toBe('Quadratic');
  expect(seqLevel([2, 10, 26, 50, 82])).toBe('Quadratic');
  expect(seqLevel([-6, -4, 10, 42, 98, 184])).toBe('Cubic');
  expect(seqLevel([17, 59, 143, 287, 509, 827])).toBe('Cubic');
});
