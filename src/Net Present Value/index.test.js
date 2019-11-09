import netPresentValue from './index';

test('netPresentValue', () => {
  expect(netPresentValue(100, 0.1, 1)).toBe('$91');
  expect(netPresentValue(100, 0.2, 1)).toBe('$83');
  expect(netPresentValue(15, 0.5, 100)).toBe('$30');
  expect(netPresentValue(100, 0.1, 20)).toBe('$851');
  expect(netPresentValue(250, 0.01, 1)).toBe('$248');
  expect(netPresentValue(250, 0.01, -1)).toBe(false);
  expect(netPresentValue(10000, 0.05, 20)).toBe('$124622');
});
