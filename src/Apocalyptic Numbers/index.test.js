import isApocalyptic from './index';

test('isApocalyptic', () => {
  expect(isApocalyptic(66)).toBe('Safe');
  expect(isApocalyptic(157)).toBe('Single');
  expect(isApocalyptic(166)).toBe('Safe');
  expect(isApocalyptic(220)).toBe('Double');
  expect(isApocalyptic(443)).toBe('Single');
  expect(isApocalyptic(528)).toBe('Single');
  expect(isApocalyptic(529)).toBe('Double');
  expect(isApocalyptic(648)).toBe('Double');
  expect(isApocalyptic(703)).toBe('Safe');
  expect(isApocalyptic(931)).toBe('Triple');
});
