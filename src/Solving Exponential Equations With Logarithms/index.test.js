import solveForExp from './index';

test('solveForExp', () => {
  expect(solveForExp(4, 1024)).toBe(5);
  expect(solveForExp(2, 1024)).toBe(10);
  expect(solveForExp(8, 134217728)).toBe(9);
  expect(solveForExp(19, 47045881)).toBe(6);
  expect(solveForExp(10, 100000000)).toBe(8);
  expect(solveForExp(9, 3486784401)).toBe(10);
  expect(solveForExp(4, 4294967296)).toBe(16);
});
