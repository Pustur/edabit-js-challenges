import test from 'ava';
import missingAngle from './index';

test('Missing Third Angle', t => {
  t.is(missingAngle(27, 59), 'obtuse');
  t.is(missingAngle(135, 11), 'acute');
  t.is(missingAngle(45, 45), 'right');
  t.is(missingAngle(45, 15), 'obtuse');
  t.is(missingAngle(31, 100), 'acute');
  t.is(missingAngle(35, 55), 'right');
});
