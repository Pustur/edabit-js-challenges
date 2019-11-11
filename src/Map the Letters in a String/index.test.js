import mapLetters from './index';

test('mapLetters', () => {
  expect(mapLetters('')).toEqual({});
  expect(mapLetters('a')).toEqual({ a: [0] });
  expect(mapLetters('mummy')).toEqual({ m: [0, 2, 3], u: [1], y: [4] });
  expect(mapLetters('balloon')).toEqual({
    b: [0],
    a: [1],
    l: [2, 3],
    o: [4, 5],
    n: [6],
  });
  expect(mapLetters('imagining')).toEqual({
    i: [0, 4, 6],
    m: [1],
    a: [2],
    g: [3, 8],
    n: [5, 7],
  });
  expect(mapLetters('abcdefg')).toEqual({
    a: [0],
    b: [1],
    c: [2],
    d: [3],
    e: [4],
    f: [5],
    g: [6],
  });
  expect(mapLetters('aaaaaaabaaabaaabbb')).toEqual({
    a: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14],
    b: [7, 11, 15, 16, 17],
  });
});
