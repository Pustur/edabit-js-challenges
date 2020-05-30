import add from './index';

test('add', () => {
  expect(add('91', '19')).toBe('110');
  expect(add('-100', '100')).toBe('0');
  expect(add('-10', '-20')).toBe('-30');
  expect(add('0', '6200')).toBe('6200');
  expect(add('300', '3000')).toBe('3300');
  expect(add('1000', '6200')).toBe('7200');
  expect(add('9999999', '1')).toBe('10000000');
  expect(add('', '6')).toBe('Invalid Operation');
  expect(add(null, '23')).toBe('Invalid Operation');
  expect(add('', undefined)).toBe('Invalid Operation');
  expect(add('123456789', '987654322')).toBe('1111111111');
});
