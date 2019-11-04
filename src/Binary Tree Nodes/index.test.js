import nodeType from './index';

test('nodeType', () => {
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 3)).toBe(
    'Leaf',
  );
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 5)).toBe(
    'Root',
  );
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 6)).toBe(
    'Leaf',
  );
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 9)).toBe(
    'Leaf',
  );
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 1)).toBe(
    'Leaf',
  );
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 8)).toBe(
    'Inner',
  );
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 2)).toBe(
    'Inner',
  );
  expect(nodeType([1, 3, 6, 9, 2, 8, 5], [2, 2, 8, 8, 5, 5, -1], 10)).toBe(
    'Not exist',
  );
  expect(
    nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 5),
  ).toBe('Leaf');
  expect(
    nodeType([6, 3, 1, 2, 5, 7, 4, 6, 8], [3, 1, 6, 1, 2, 3, 8, -1, 6], 8),
  ).toBe('Inner');
  expect(
    nodeType(
      [5, 6, 8, 7, 1, 9, 4, 11, 10, 2],
      [8, 8, -1, 8, 7, 4, 5, 4, 1, 1],
      8,
    ),
  ).toBe('Root');
  expect(
    nodeType(
      [5, 6, 8, 7, 1, 9, 4, 11, 10, 2],
      [8, 8, -1, 8, 7, 4, 5, 4, 1, 1],
      4,
    ),
  ).toBe('Inner');
  expect(
    nodeType(
      [3, 2, 4, 9, 11, 10, 8, 5, 6, 7],
      [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8],
      6,
    ),
  ).toBe('Leaf');
  expect(
    nodeType(
      [5, 6, 8, 7, 1, 9, 4, 11, 10, 2],
      [8, 8, -1, 8, 7, 4, 5, 4, 1, 1],
      11,
    ),
  ).toBe('Leaf');
  expect(
    nodeType(
      [3, 2, 4, 9, 11, 10, 8, 5, 6, 7],
      [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8],
      3,
    ),
  ).toBe('Root');
  expect(
    nodeType(
      [3, 2, 4, 9, 11, 10, 8, 5, 6, 7],
      [-1, 3, 3, 2, 3, 4, 4, 9, 10, 8],
      10,
    ),
  ).toBe('Inner');
});
