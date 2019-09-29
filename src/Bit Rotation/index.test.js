import bitRotate from './index';

test('bitRotate', () => {
  expect(bitRotate(8, 1, true)).toBe(4);
  expect(bitRotate(16, 2, true)).toBe(4);
  expect(bitRotate(33, 6, true)).toBe(33);
  expect(bitRotate(16, 1, false)).toBe(1);
  expect(bitRotate(17, 2, false)).toBe(6);
  expect(bitRotate(125, 10, true)).toBe(95);
  expect(bitRotate(283, 7, true)).toBe(110);
  expect(bitRotate(122, 7, false)).toBe(122);
  expect(bitRotate(1022, 8, false)).toBe(767);
});
