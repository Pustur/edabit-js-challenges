import test from 'ava';
import sumOfHoles from './index';

test('Hole Number Sequence', t => {
  t.is(sumOfHoles(1), 0);
  t.is(sumOfHoles(4), 1);
  t.is(sumOfHoles(6), 2);
  t.is(sumOfHoles(8), 4);
  t.is(sumOfHoles(9), 5);
  t.is(sumOfHoles(10), 6);
  t.is(sumOfHoles(88), 90);
  t.is(sumOfHoles(10000), 22893);
  t.is(sumOfHoles(12345), 27991);
});
