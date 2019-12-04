import triangle from './index';

test('triangle', () => {
  expect(triangle(1)).toBe(1);
  expect(triangle(2)).toBe(3);
  expect(triangle(3)).toBe(6);
  expect(triangle(8)).toBe(36);
  expect(triangle(2153)).toBe(2318781);
});
