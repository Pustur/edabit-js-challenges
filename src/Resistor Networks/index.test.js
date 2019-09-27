import test from 'ava';
import resist from './index';

test('Resistor Networks', t => {
  t.is(resist('(2, 3, 6)'), 11);
  t.is(resist('[2, 3, 6]'), 1);
  t.is(resist('[10, 20, [30, (40, 50), 60, (70, 80)], 90]'), 4.4);
  t.is(resist('(1, [12, 4, (1, [10, (2, 8)])])'), 3);
  t.is(resist('([10, 15], (5, 6, 5))'), 22);
  t.is(resist('[22, 6, (10, 18, [33, 15]), (10, [63, 50], 45)]'), 4);
  t.is(resist('[([(470, 1000), 330], 470), 680]'), 354.3);
  t.is(resist('([([(470, 680), 330], 1000), 470], 680)'), 1022);
  t.is(resist('(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])'), 10);
});