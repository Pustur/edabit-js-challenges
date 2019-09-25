import test from 'ava';
import maskify from './index';

test('Maskify the String', t => {
  t.is(maskify(''), '');
  t.is(maskify('1'), '1');
  t.is(maskify('12'), '12');
  t.is(maskify('123'), '123');
  t.is(maskify('1234'), '1234');
  t.is(maskify('2673951408'), '######1408');
  t.is(maskify('64607935616'), '#######5616');
  t.is(maskify('4556364607935616'), '############5616');
  t.is(maskify(')E$aCU=e"_'), '######=e"_');
  t.is(maskify('tBy>L/cMe+?<j:6n;C~H'), '################;C~H');
  t.is(
    maskify('8Ikhlf6yoxPOwi5cB014eWbRumj7vJ'),
    '##########################j7vJ',
  );
});
