import test from 'ava';
import possiblePalindrome from './index';

test('Possible Palindrome', t => {
  t.is(possiblePalindrome('abb'), true);
  t.is(possiblePalindrome('bbb'), true);
  t.is(possiblePalindrome('bbaa'), true);
  t.is(possiblePalindrome('bbaacc'), true);
  t.is(possiblePalindrome('acabbaa'), true);
  t.is(possiblePalindrome('aacbdbc'), true);
  t.is(possiblePalindrome('bbaaccd'), true);

  t.is(possiblePalindrome('ab'), false);
  t.is(possiblePalindrome('abc'), false);
  t.is(possiblePalindrome('aacbdb'), false);
  t.is(possiblePalindrome('abacbb'), false);
  t.is(possiblePalindrome('bbaacd'), false);
  t.is(possiblePalindrome('aabbccddef'), false);
});
