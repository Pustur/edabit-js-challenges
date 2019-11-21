import warpTunnel from './index';

test('warpTunnel', () => {
  expect(
    warpTunnel(
      [
        [12, 36],
        [18, 27],
      ],
      149,
    ),
  ).toEqual([
    [27, 12],
    [36, 18],
  ]);
  expect(
    warpTunnel(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      2,
    ),
  ).toEqual([
    [8, 9, 1],
    [2, 3, 4],
    [5, 6, 7],
  ]);
  expect(
    warpTunnel(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      8,
    ),
  ).toEqual([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1],
  ]);
  expect(
    warpTunnel(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      9,
    ),
  ).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  expect(
    warpTunnel(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      18,
    ),
  ).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  expect(
    warpTunnel(
      [
        ['a', 'b'],
        ['c', 'd'],
        ['e', 'f'],
      ],
      4,
    ),
  ).toEqual([
    ['c', 'd'],
    ['e', 'f'],
    ['a', 'b'],
  ]);
  expect(
    warpTunnel(
      [
        [1, 'x', 3],
        [4, 'w', 6],
        [7, 'y', 9],
      ],
      19,
    ),
  ).toEqual([
    [9, 1, 'x'],
    [3, 4, 'w'],
    [6, 7, 'y'],
  ]);
  expect(
    warpTunnel(
      [
        ['12', 36, 24, 'j'],
        ['18', '!', 27, '9'],
      ],
      19,
    ),
  ).toEqual([
    ['!', 27, '9', '12'],
    [36, 24, 'j', '18'],
  ]);
  expect(
    warpTunnel(
      [
        ['t', 'i', 's'],
        ['g', 'r', 'e'],
        ['a', 't', '!'],
        ['!', 'e', 'd'],
        ['a', 'b', 'i'],
      ],
      5,
    ),
  ).toEqual([
    ['e', 'd', 'a'],
    ['b', 'i', 't'],
    ['i', 's', 'g'],
    ['r', 'e', 'a'],
    ['t', '!', '!'],
  ]);
});
