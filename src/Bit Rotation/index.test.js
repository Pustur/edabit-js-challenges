import test from 'ava';
import bitRotate from './index';

test('Bit Rotation', t => {
  t.is(bitRotate(8, 1, true), 4);
  t.is(bitRotate(16, 2, true), 4);
  t.is(bitRotate(33, 6, true), 33);
  t.is(bitRotate(125, 10, true), 95);
  t.is(bitRotate(283, 7, true), 110);

  t.is(bitRotate(16, 1, false), 1);
  t.is(bitRotate(17, 2, false), 6);
  t.is(bitRotate(122, 7, false), 122);
  t.is(bitRotate(1022, 8, false), 767);
});
