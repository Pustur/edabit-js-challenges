import test from 'ava';
import numOfSubbarrays from './index';

test('Number of Arrays in an Array', t => {
  t.is(numOfSubbarrays([1, 2, 3]), 0);
  t.is(numOfSubbarrays([[1, 2, 3]]), 1);
  t.is(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), 3);
  t.is(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]), 4);
});
