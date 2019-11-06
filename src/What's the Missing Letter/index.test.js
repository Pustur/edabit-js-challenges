import missingLetter from './index';

test('missingLetter', () => {
  expect(missingLetter('jlm')).toBe('k');
  expect(missingLetter('rsu')).toBe('t');
  expect(missingLetter('eghij')).toBe('f');
  expect(missingLetter('qrtuv')).toBe('s');
  expect(missingLetter('abdefg')).toBe('c');
  expect(missingLetter('mnopqs')).toBe('r');
  expect(missingLetter('tuvxyz')).toBe('w');
  expect(missingLetter('xyz')).toBe('No Missing Letter');
  expect(missingLetter('ghijklmno')).toBe('No Missing Letter');
});
