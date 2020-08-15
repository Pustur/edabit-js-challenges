import padMatrix from './index';

test('padMatrix', () => {
  expect(padMatrix([[]])).toEqual([
    [0, 0],
    [0, 0],
    [0, 0],
  ]);
  expect(padMatrix([['hi'], ['downstairs']])).toEqual([
    [0, 0, 0],
    [0, 'hi', 0],
    [0, 'downstairs', 0],
    [0, 0, 0],
  ]);
  expect(
    padMatrix([
      [1, 'beep', true],
      ['oink', 99, 1.1],
      [[1, 1], 'e', 99],
    ]),
  ).toEqual([
    [0, 0, 0, 0, 0],
    [0, 1, 'beep', true, 0],
    [0, 'oink', 99, 1.1, 0],
    [0, [1, 1], 'e', 99, 0],
    [0, 0, 0, 0, 0],
  ]);
});
