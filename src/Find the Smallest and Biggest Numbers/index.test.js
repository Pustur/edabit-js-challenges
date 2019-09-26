import test from 'ava';
import minMax from './index';

test('Find the Smallest and Biggest Numbers', t => {
  t.deepEqual(minMax([14, 35, 6, 1, 34, 54]), [1, 54]);
  t.deepEqual(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734]);
  t.deepEqual(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98]);
  t.deepEqual(minMax([-54, -23, -54, -21]), [-54, -21]);
  t.deepEqual(minMax([-0.473, -0.6834, -0.1287, 0.5632]), [-0.6834, 0.5632]);
  t.deepEqual(minMax([0, 0, 0, 0]), [0, 0]);
  t.deepEqual(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [
    0.2345,
    0.984,
  ]);
});
