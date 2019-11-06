import mathExpr from './index';

test('mathExpr', () => {
  expect(mathExpr('5+4')).toBe(true);
  expect(mathExpr('3*6')).toBe(true);
  expect(mathExpr('4 * 5')).toBe(true);
  expect(mathExpr('4 - 5')).toBe(true);
  expect(mathExpr('6 % 7')).toBe(true);
  expect(mathExpr('nope')).toBe(false);
  expect(mathExpr('a - b')).toBe(false);
  expect(mathExpr('a - 2')).toBe(false);
});
