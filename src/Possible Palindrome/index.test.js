import possiblePalindrome from './index';

test('possiblePalindrome', () => {
  expect(possiblePalindrome('abb')).toBe(true);
  expect(possiblePalindrome('bbb')).toBe(true);
  expect(possiblePalindrome('bbaa')).toBe(true);
  expect(possiblePalindrome('bbaacc')).toBe(true);
  expect(possiblePalindrome('acabbaa')).toBe(true);
  expect(possiblePalindrome('aacbdbc')).toBe(true);
  expect(possiblePalindrome('bbaaccd')).toBe(true);
  expect(possiblePalindrome('ab')).toBe(false);
  expect(possiblePalindrome('abc')).toBe(false);
  expect(possiblePalindrome('aacbdb')).toBe(false);
  expect(possiblePalindrome('abacbb')).toBe(false);
  expect(possiblePalindrome('bbaacd')).toBe(false);
  expect(possiblePalindrome('aabbccddef')).toBe(false);
});
