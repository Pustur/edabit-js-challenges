import getMayanDate from './index';

test('getMayanDate', () => {
  expect(getMayanDate('1776, 7, 4')).toBe('12.8.0.1.13');
  expect(getMayanDate('348, 3, 8')).toBe('8.15.10.17.8');
  expect(getMayanDate('2012, 12, 21')).toBe('13.0.0.0.0');
  expect(getMayanDate('1200, 1, 1')).toBe('10.18.15.3.8');
  expect(getMayanDate('1985, 8, 20')).toBe('12.18.12.4.15');
  expect(getMayanDate('1945, 6, 12')).toBe('12.16.11.8.16');
  expect(getMayanDate('2407, 3, 25')).toBe('13.19.19.17.19');
});
