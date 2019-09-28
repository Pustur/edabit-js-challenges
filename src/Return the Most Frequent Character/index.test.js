import test from 'ava';
import mostFrequentChar from './index';

test('Return the Most Frequent Character', t => {
  t.deepEqual(mostFrequentChar(['let', 'them', 'eat', 'cake']), ['e']);
  t.deepEqual(mostFrequentChar(['music', 'madness', 'maniac', 'motion']), [
    'm',
  ]);
  t.deepEqual(mostFrequentChar(['apple', 'bandage', 'yodel', 'make']), [
    'a',
    'e',
  ]);
  t.deepEqual(mostFrequentChar(['potion', 'master', 'professor', 'snape']), [
    'o',
    's',
  ]);
  t.deepEqual(
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
    ['e', 'h', 'i'],
  );
});
