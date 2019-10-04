import convert from './index';

test('convert', () => {
  expect(convert(4)).toBe(240);
  expect(convert(6)).toBe(360);
  expect(convert(8)).toBe(480);
  expect(convert(60)).toBe(3600);
});
