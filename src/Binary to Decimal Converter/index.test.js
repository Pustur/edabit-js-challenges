import binaryToDecimal from './index';

test('binaryToDecimal', () => {
  expect(binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  expect(binaryToDecimal([1, 0, 1, 1, 0, 1, 0, 1])).toBe(181);
  expect(binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0])).toBe(188);
  expect(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1])).toBe(255);
});
