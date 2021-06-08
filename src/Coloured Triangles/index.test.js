import colouredTriangle from './index';

test('colouredTriangle', () => {
  expect(colouredTriangle('GB')).toBe('R');
  expect(colouredTriangle('RRR')).toBe('R');
  expect(colouredTriangle('RGBG')).toBe('B');
  expect(colouredTriangle('RBRGBRB')).toBe('G');
  expect(colouredTriangle('RBRGBRBGGRRRBGBBBGG')).toBe('G');
  expect(colouredTriangle('B')).toBe('B');
});
