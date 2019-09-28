import test from 'ava';
import deepCount from './index';

test('Deep Array Count', t => {
  t.is(deepCount([1, 2, 3]), 3);
  t.is(deepCount(['x', 'y', ['z']]), 4);
  t.is(deepCount(['a', 'b', ['c', 'd', ['e']]]), 7);
  t.is(deepCount([[1], [2], [3]]), 6);
  t.is(deepCount([[[[[[[[[]]]]]]]]]), 8);
  t.is(deepCount([null]), 1);
  t.is(deepCount([[]]), 1);
  t.is(deepCount([[undefined], [null, ['edabit']], [0]]), 8);
});
