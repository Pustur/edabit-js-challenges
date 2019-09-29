import deepCount from './index';

test('Deep Array Count', () => {
  expect(deepCount([1, 2, 3])).toBe(3);
  expect(deepCount(['x', 'y', ['z']])).toBe(4);
  expect(deepCount(['a', 'b', ['c', 'd', ['e']]])).toBe(7);
  expect(deepCount([[1], [2], [3]])).toBe(6);
  expect(deepCount([[[[[[[[[]]]]]]]]])).toBe(8);
  expect(deepCount([null])).toBe(1);
  expect(deepCount([[]])).toBe(1);
  expect(deepCount([[undefined], [null, ['edabit']], [0]])).toBe(8);
});
