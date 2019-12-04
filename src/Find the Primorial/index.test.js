import primorial from './index';

test('primorial', () => {
  expect(primorial(1)).toBe(2);
  expect(primorial(2)).toBe(6);
  expect(primorial(3)).toBe(30);
  expect(primorial(8)).toBe(9699690);
});
