import chooseFuse from './index';

test('chooseFuse', () => {
  expect(chooseFuse(['1V', '2V', '3V'], '2.5V')).toBe('3V');
  expect(chooseFuse(['3V', '5V', '12V'], '4.5V')).toBe('5V');
  expect(chooseFuse(['3V', '5V', '12V'], '0.5V')).toBe('3V');
  expect(chooseFuse(['5V', '14V', '2V'], '5.5V')).toBe('14V');
  expect(chooseFuse(['17V', '15V', '12V'], '9V')).toBe('12V');
  expect(chooseFuse(['17V', '15V', '12V'], '1V')).toBe('12V');
  expect(chooseFuse(['17V', '15V', '12V'], '17V')).toBe('17V');
  expect(chooseFuse(['3V', '11V', '12V'], '4.5V')).toBe('11V');
  expect(chooseFuse(['7V', '135V', '12V'], '9.5V')).toBe('12V');
});
