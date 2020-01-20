import timeAdjust from './index';

test('timeAdjust', () => {
  expect(timeAdjust('12:17:43', 0, 0, 0)).toBe('12:17:43');
  expect(timeAdjust('23:59:59', 0, 0, 1)).toBe('00:00:00');
  expect(timeAdjust('01:00:00', 1, 30, 10)).toBe('02:30:10');
  expect(timeAdjust('18:22:30', 4, 60, 30)).toBe('23:23:00');
  expect(timeAdjust('00:00:00', 72, 120, 120)).toBe('02:02:00');
  expect(timeAdjust('21:02:55', 39, 62525, 332)).toBe('22:13:27');
  expect(timeAdjust('14:11:29', 1000, 23466, 171626)).toBe('12:57:55');
});
