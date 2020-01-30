import getEquivalent from './index';

test('getEquivalent', () => {
  expect(getEquivalent('A#')).toBe('Bb');
  expect(getEquivalent('Ab')).toBe('G#');
  expect(getEquivalent('Bb')).toBe('A#');
  expect(getEquivalent('C#')).toBe('Db');
  expect(getEquivalent('D#')).toBe('Eb');
  expect(getEquivalent('Db')).toBe('C#');
  expect(getEquivalent('Eb')).toBe('D#');
  expect(getEquivalent('F#')).toBe('Gb');
  expect(getEquivalent('G#')).toBe('Ab');
  expect(getEquivalent('Gb')).toBe('F#');
});
