import floatSum from './index';

test('floatSum', () => {
  expect(floatSum(5.7, 4.3)).toBe(10);
  expect(floatSum(0.1, 0.2)).toBe(0.3);
  expect(floatSum(0.2, 0.3)).toBe(0.5);
  expect(floatSum(5, 0.81)).toBe(5.81);
  expect(floatSum(8.4, 8.8)).toBe(17.2);
  expect(floatSum(0.81, 99)).toBe(99.81);
  expect(floatSum(99.1, 0.109)).toBe(99.209);
  expect(floatSum(3.4444, 3.5555)).toBe(6.9999);
  expect(floatSum(50.1234, 11.5678)).toBe(61.6912);
  expect(floatSum(2.12022, 1.110001)).toBe(3.230221);
});
