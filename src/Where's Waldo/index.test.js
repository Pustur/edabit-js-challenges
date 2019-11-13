import whereIsWaldo from './index';

test('whereIsWaldo', () => {
  expect(
    whereIsWaldo([
      ['A', 'A', 'A'],
      ['A', 'A', 'A'],
      ['A', 'B', 'A'],
    ]),
  ).toEqual([3, 2]);
  expect(
    whereIsWaldo([
      ['c', 'c', 'c', 'c'],
      ['c', 'c', 'c', 'd'],
    ]),
  ).toEqual([2, 4]);
  expect(
    whereIsWaldo([
      ['X', 'X', 'Y', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
    ]),
  ).toEqual([1, 3]);
  expect(
    whereIsWaldo([
      ['O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O'],
      ['P', 'O', 'O', 'O'],
      ['O', 'O', 'O', 'O'],
    ]),
  ).toEqual([5, 1]);
});
