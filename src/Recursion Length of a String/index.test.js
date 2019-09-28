import test from 'ava';
import length from './index';

test('Recursion: Length of a String', t => {
  t.is(length(''), 0);
  t.is(length('a'), 1);
  t.is(length('make'), 4);
  t.is(length('apple'), 5);
  t.is(length('shipment'), 8);
});
