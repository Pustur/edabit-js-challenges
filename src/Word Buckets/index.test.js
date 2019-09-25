import test from 'ava';
import bucketize from './index';

test('Word Buckets', t => {
  t.deepEqual(bucketize('ab bc cd', 1), []);
  t.deepEqual(bucketize('the mouse jumped over the cheese', 7), [
    'the',
    'mouse',
    'jumped',
    'over',
    'the',
    'cheese',
  ]);
  t.deepEqual(bucketize('fairy dust coated the air', 20), [
    'fairy dust coated',
    'the air',
  ]);

  t.deepEqual(bucketize('she sells sea shells by the sea', 2), []);
  t.deepEqual(bucketize('she sells sea shells by the sea', 10), [
    'she sells',
    'sea shells',
    'by the sea',
  ]);

  t.deepEqual(bucketize('do the hokey pokey', 6), ['do the', 'hokey', 'pokey']);
  t.deepEqual(bucketize('do the hokey pokey', 12), ['do the hokey', 'pokey']);

  t.deepEqual(bucketize('beep bo bee bop bee bo bo bop', 6), [
    'beep',
    'bo bee',
    'bop',
    'bee bo',
    'bo bop',
  ]);
  t.deepEqual(bucketize('beep bo bee bop bee bo bo bop', 10), [
    'beep bo',
    'bee bop',
    'bee bo bo',
    'bop',
  ]);

  t.deepEqual(bucketize('rich magnificent trees dotted the landscape', 12), [
    'rich',
    'magnificent',
    'trees dotted',
    'the',
    'landscape',
  ]);
  t.deepEqual(bucketize('rich magnificent trees dotted the landscape', 15), [
    'rich',
    'magnificent',
    'trees dotted',
    'the landscape',
  ]);
  t.deepEqual(bucketize('rich magnificent trees dotted the landscape', 18), [
    'rich magnificent',
    'trees dotted the',
    'landscape',
  ]);
  t.deepEqual(bucketize('rich magnificent trees dotted the landscape', 22), [
    'rich magnificent trees',
    'dotted the landscape',
  ]);
  t.deepEqual(bucketize('rich magnificent trees dotted the landscape', 40), [
    'rich magnificent trees dotted the',
    'landscape',
  ]);
  t.deepEqual(bucketize('rich magnificent trees dotted the landscape', 43), [
    'rich magnificent trees dotted the landscape',
  ]);

  t.deepEqual(bucketize('a b c d e', 1), ['a', 'b', 'c', 'd', 'e']);
  t.deepEqual(bucketize('a b c d e', 2), ['a', 'b', 'c', 'd', 'e']);
  t.deepEqual(bucketize('a b c d e', 3), ['a b', 'c d', 'e']);
});
