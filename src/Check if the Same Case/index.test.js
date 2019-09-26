import test from 'ava';
import sameCase from './index';

test('Check if the Same Case', t => {
  t.is(sameCase('HELLO'), true);
  t.is(sameCase('pickle'), true);
  t.is(sameCase('MUSTARD'), true);
  t.is(sameCase('marmalade'), true);
  t.is(sameCase('MARMALADE'), true);

  t.is(sameCase('HEllo'), false);
  t.is(sameCase('ketchUP'), false);
  t.is(sameCase('mArmALadE'), false);
});
