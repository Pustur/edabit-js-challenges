import mostFrequentChar from './index';

test('mostFrequentChar', () => {
  expect(mostFrequentChar(['let', 'them', 'eat', 'cake'])).toEqual(['e']);
  expect(mostFrequentChar(['music', 'madness', 'maniac', 'motion'])).toEqual([
    'm',
  ]);
  expect(mostFrequentChar(['apple', 'bandage', 'yodel', 'make'])).toEqual([
    'a',
    'e',
  ]);
  expect(mostFrequentChar(['potion', 'master', 'professor', 'snape'])).toEqual([
    'o',
    's',
  ]);
  expect(
    mostFrequentChar([
      'the',
      'hills',
      'are',
      'alive',
      'with',
      'the',
      'sound',
      'of',
      'music',
    ]),
  ).toEqual(['e', 'h', 'i']);
});
