import digitaldrome from './index';

test('digitaldrome', () => {
  expect(digitaldrome(1)).toBe('Repdrome');
  expect(digitaldrome(23)).toBe('Metadrome');
  expect(digitaldrome(269)).toBe('Metadrome');
  expect(digitaldrome(666)).toBe('Repdrome');
  expect(digitaldrome(1357)).toBe('Metadrome');
  expect(digitaldrome(1985)).toBe('Nondrome');
  expect(digitaldrome(2340)).toBe('Nondrome');
  expect(digitaldrome(4899)).toBe('Plaindrome');
  expect(digitaldrome(7521)).toBe('Katadrome');
  expect(digitaldrome(7531)).toBe('Katadrome');
  expect(digitaldrome(12344)).toBe('Plaindrome');
  expect(digitaldrome(33333)).toBe('Repdrome');
  expect(digitaldrome(1000000)).toBe('Nialpdrome');
  expect(digitaldrome(9874441)).toBe('Nialpdrome');
});
