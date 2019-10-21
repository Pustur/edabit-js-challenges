import easterDate from './index';

test('easterDate', () => {
  expect(easterDate(1715)).toBe('April 21');
  expect(easterDate(1758)).toBe('March 26');
  expect(easterDate(1872)).toBe('March 31');
  expect(easterDate(1899)).toBe('April 2');
  expect(easterDate(1900)).toBe('April 15');
  expect(easterDate(1944)).toBe('April 9');
  expect(easterDate(1989)).toBe('March 26');
  expect(easterDate(2000)).toBe('April 23');
  expect(easterDate(2070)).toBe('March 30');
  expect(easterDate(2099)).toBe('April 12');
  expect(easterDate(6009)).toBe('April 12');
  expect(easterDate(9999)).toBe('March 28');
});
