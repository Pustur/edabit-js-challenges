import test from 'ava';
import isTruthy from './index';

test('Truthy or Falsy?', t => {
  t.is(isTruthy(1), 1);
  t.is(isTruthy(-1), 1);
  t.is(isTruthy('false'), 1);
  t.is(isTruthy([]), 1);
  t.is(isTruthy(true), 1);
  t.is(isTruthy({}), 1);
  t.is(isTruthy(function() {}), 1); // eslint-disable-line func-names

  t.is(isTruthy(0), 0);
  t.is(isTruthy(''), 0);
  t.is(isTruthy(null), 0);
  t.is(isTruthy(undefined), 0);
  t.is(isTruthy(false), 0);
  t.is(isTruthy(NaN), 0);
  t.is(isTruthy(''), 0);
});
