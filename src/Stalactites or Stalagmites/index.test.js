import mineralFormation from './index';

test('mineralFormation', () => {
  expect(mineralFormation([[1], [1], [0], [0]])).toBe('stalactites');
  expect(mineralFormation([[1], [1], [0], [1]])).toBe('both');
  expect(mineralFormation([[0], [1], [1], [1]])).toBe('stalagmites');
  expect(
    mineralFormation([
      [0, 0],
      [1, 1],
    ]),
  ).toBe('stalagmites');
  expect(
    mineralFormation([
      [1, 1],
      [0, 0],
    ]),
  ).toBe('stalactites');
  expect(
    mineralFormation([
      [0, 1],
      [1, 1],
      [1, 1],
      [1, 0],
    ]),
  ).toBe('both');
  expect(
    mineralFormation([
      [0, 1, 0, 1],
      [0, 1, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
    ]),
  ).toBe('stalactites');
  expect(
    mineralFormation([
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [0, 1, 1, 1],
      [0, 1, 1, 1],
    ]),
  ).toBe('stalagmites');
  expect(
    mineralFormation([
      [1, 0, 1, 0],
      [1, 1, 0, 1],
      [0, 1, 1, 1],
      [0, 1, 1, 1],
    ]),
  ).toBe('both');
});
