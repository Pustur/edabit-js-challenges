import letters from './index';

test('Shared vs. Unique Letters', t => {
  t.deepEqual(letters('sharp', 'soap'), ['aps', 'hr', 'o']);
  t.deepEqual(letters('board', 'bored'), ['bdor', 'a', 'e']);
  t.deepEqual(letters('happiness', 'envelope'), ['enp', 'ahis', 'lov']);
  t.deepEqual(letters('match', 'ham'), ['ahm', 'ct', '']);
  t.deepEqual(letters('kerfuffle', 'fluffy'), ['flu', 'ekr', 'y']);
});
