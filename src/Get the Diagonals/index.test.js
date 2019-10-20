import getDiagonals from './index';

test('getDiagonals', () => {
  expect(getDiagonals([])).toEqual([[], []]);
  expect(getDiagonals([['Trivial']])).toEqual([['Trivial'], ['Trivial']]);
  expect(getDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
    [1, 5, 9],
    [3, 5, 7],
  ]);
  expect(
    getDiagonals([
      [true, false, true, false],
      [false, true, false, true],
      [true, false, true, false],
      [false, false, false, true],
    ]),
  ).toEqual([[true, true, true, true], [false, false, false, false]]);
  expect(
    getDiagonals([
      ['e', 'z', 'y', 'o', 'p', 't'],
      ['b', 'd', 'a', 't', 'i', 'w'],
      ['u', 'l', 'a', 'n', 's', 'k'],
      ['s', 'v', 'k', 'b', 'r', 'z'],
      ['h', 'e', 'w', 'c', 'i', 'j'],
      ['r', 'p', 'y', 'd', 'x', 't'],
    ]),
  ).toEqual([['e', 'd', 'a', 'b', 'i', 't'], ['t', 'i', 'n', 'k', 'e', 'r']]);
  expect(
    getDiagonals([
      [0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ]),
  ).toEqual([[0, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 1, 1, 0, 0, 1, 1, 1, 1, 1]]);
});
