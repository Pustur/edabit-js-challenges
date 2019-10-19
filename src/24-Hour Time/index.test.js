import convertTime from './index';

test('convertTime', () => {
  expect(convertTime('05:32:33PM')).toBe('17:32:33');
  expect(convertTime('06:00:19AM')).toBe('06:00:19');
  expect(convertTime('07:05:45PM')).toBe('19:05:45');
  expect(convertTime('11:59:59AM')).toBe('11:59:59');
  expect(convertTime('11:59:59PM')).toBe('23:59:59');
  expect(convertTime('12:40:22AM')).toBe('00:40:22');
  expect(convertTime('12:45:54PM')).toBe('12:45:54');
});
