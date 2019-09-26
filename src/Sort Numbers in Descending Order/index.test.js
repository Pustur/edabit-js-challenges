import test from 'ava';
import sortDecending from './index';

test('Sort Numbers in Descending Order', t => {
  t.is(sortDecending(0), 0);
  t.is(sortDecending(123), 321);
  t.is(sortDecending(321), 321);
  t.is(sortDecending(6456), 6654);
  t.is(sortDecending(81294), 98421);
  t.is(sortDecending(628904), 986420);
  t.is(sortDecending(2619805), 9865210);
  t.is(sortDecending(670276097), 977766200);
  t.is(sortDecending(289327560), 987653220);
  t.is(sortDecending(444111888555333), 888555444333111);
});
