import test from 'ava';
import largestSwap from './index';

test('Largest Swap', t => {
  t.is(largestSwap(27), false, '27 < 72, so not largest swap.');
  t.is(largestSwap(14), false, '14 < 41, so not largest swap.');
  t.is(largestSwap(43), true, '43 > 34, so largest swap.');
  t.is(largestSwap(53), true, '53 > 35, so largest swap.');
  t.is(largestSwap(99), true, 'Cannot do better, so largest swap.');
});
