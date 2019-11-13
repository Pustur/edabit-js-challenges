import tournamentScores from './index';

test('tournamentScores', () => {
  expect(
    tournamentScores([
      'A 0 - 0 B',
      'C 3 - 5 D',
      'B 1 - 0 C',
      'D 1 - 1 A',
      'A 2 - 2 C',
      'B 1 - 0 D',
    ]),
  ).toEqual([
    ['B', 7, 2, 2],
    ['D', 4, 6, 1],
    ['A', 3, 3, 0],
    ['C', 1, 5, -3],
  ]);
  expect(
    tournamentScores([
      'A 3 - 3 B',
      'C 0 - 6 D',
      'B 4 - 2 C',
      'D 0 - 1 A',
      'A 1 - 2 C',
      'B 2 - 1 D',
    ]),
  ).toEqual([
    ['B', 7, 9, 3],
    ['A', 4, 5, 0],
    ['D', 3, 7, 4],
    ['C', 3, 4, -7],
  ]);
  expect(
    tournamentScores([
      'A 2 - 1 B',
      'C 3 - 0 D',
      'B 1 - 1 C',
      'D 1 - 0 A',
      'A 3 - 0 C',
      'B 2 - 4 D',
    ]),
  ).toEqual([
    ['A', 6, 5, 3],
    ['D', 6, 5, 0],
    ['C', 4, 4, 0],
    ['B', 1, 4, -3],
  ]);
  expect(
    tournamentScores([
      'A 0 - 1 B',
      'C 2 - 0 D',
      'B 2 - 2 C',
      'D 3 - 1 A',
      'A 2 - 2 C',
      'B 2 - 0 D',
    ]),
  ).toEqual([
    ['B', 7, 5, 3],
    ['C', 5, 6, 2],
    ['D', 3, 3, -2],
    ['A', 1, 3, -3],
  ]);
  expect(
    tournamentScores([
      'A 4 - 0 B',
      'C 2 - 1 D',
      'B 1 - 0 C',
      'D 3 - 2 A',
      'A 1 - 3 C',
      'B 2 - 1 D',
    ]),
  ).toEqual([
    ['C', 6, 5, 2],
    ['B', 6, 3, -2],
    ['A', 3, 7, 1],
    ['D', 3, 5, -1],
  ]);
  expect(
    tournamentScores([
      'A 0 - 1 B',
      'C 2 - 0 D',
      'B 0 - 0 C',
      'D 0 - 1 A',
      'A 0 - 2 C',
      'B 3 - 1 D',
    ]),
  ).toEqual([
    ['C', 7, 4, 4],
    ['B', 7, 4, 3],
    ['A', 3, 1, -2],
    ['D', 0, 1, -5],
  ]);
});
