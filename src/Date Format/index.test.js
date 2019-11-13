import formatDate from './index';

test('formatDate', () => {
  expect(formatDate('11/12/2019')).toBe('20191211');
  expect(formatDate('12/31/2019')).toBe('20193112');
  expect(formatDate('01/15/2019')).toBe('20191501');
});
