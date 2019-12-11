import emisphereSeason from './index';

test('emisphereSeason', () => {
  expect(emisphereSeason('S', 'May, 8')).toBe('Autumn');
  expect(emisphereSeason('N', 'June, 30')).toBe('Summer');
  expect(emisphereSeason('N', 'March, 1')).toBe('Spring');
  expect(emisphereSeason('N', 'July, 28')).toBe('Summer');
  expect(emisphereSeason('S', 'April, 20')).toBe('Autumn');
  expect(emisphereSeason('S', 'August, 6')).toBe('Winter');
  expect(emisphereSeason('S', 'January, 2')).toBe('Summer');
  expect(emisphereSeason('S', 'October, 12')).toBe('Spring');
  expect(emisphereSeason('N', 'November, 20')).toBe('Autumn');
  expect(emisphereSeason('N', 'February, 29')).toBe('Spring');
  expect(emisphereSeason('N', 'December, 31')).toBe('Winter');
  expect(emisphereSeason('S', 'September, 22')).toBe('Spring');
});
