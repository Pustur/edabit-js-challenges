import convert from './index';

test('convert', () => {
  expect(convert(1, 0)).toBe(3600);
  expect(convert(1, 3)).toBe(3780);
  expect(convert(0, 30)).toBe(1800);
});
