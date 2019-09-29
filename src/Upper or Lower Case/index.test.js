import stepsToConvert from './index';

test('Upper or Lower Case', t => {
  t.is(stepsToConvert(''), 0, 'Rewturn 0 if empty string.');
  t.is(stepsToConvert('aba'), 0);
  t.is(stepsToConvert('ABA'), 0);
  t.is(stepsToConvert('abC'), 1);
  t.is(stepsToConvert('abCBA'), 2);
  t.is(stepsToConvert('abaCCC'), 3);
  t.is(stepsToConvert('abaaCCCDE'), 4);
  t.is(stepsToConvert('CCaaCCaaCa'), 5);
});
