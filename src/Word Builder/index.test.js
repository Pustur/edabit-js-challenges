import wordBuilder from './index';

test('wordBuilder', () => {
  expect(wordBuilder(['g', 'e', 'o'], [1, 0, 2])).toBe('ego');
  expect(wordBuilder(['e', 't', 's', 't'], [1, 3, 2, 0])).toBe('test');
  expect(wordBuilder(['b', 'e', 't', 'i', 'd', 'a'], [3, 0, 5, 4, 1, 2])).toBe(
    'edabit',
  );
  expect(wordBuilder(['s', 'o', 'r', 't', 'e', 'd'], [0, 1, 2, 3, 4, 5])).toBe(
    'sorted',
  );
  expect(
    wordBuilder(
      ['l', 'e', 'h', 'n', 'l', 'c', 'a', 'e', 'g'],
      [3, 5, 1, 6, 4, 0, 2, 8, 7],
    ),
  ).toBe('challenge');
  expect(
    wordBuilder(
      ['e', 'i', 'l', 'g', 'x', 'h', 'p', 'o', 'c', 'r', 'i', 'a', 'c'],
      [1, 3, 0, 6, 2, 10, 9, 5, 4, 7, 11, 8, 12],
    ),
  ).toBe('lexicographic');
});
