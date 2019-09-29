import letters from './index';

test('letters', () => {
  expect(letters('match', 'ham')).toEqual(['ahm', 'ct', '']);
  expect(letters('sharp', 'soap')).toEqual(['aps', 'hr', 'o']);
  expect(letters('board', 'bored')).toEqual(['bdor', 'a', 'e']);
  expect(letters('kerfuffle', 'fluffy')).toEqual(['flu', 'ekr', 'y']);
  expect(letters('happiness', 'envelope')).toEqual(['enp', 'ahis', 'lov']);
});
