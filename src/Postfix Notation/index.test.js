import postfix from './index';

test('postfix', () => {
  expect(postfix('5')).toBe(5);
  expect(postfix('2 2 +')).toBe(4);
  expect(postfix('2 3 * 1 - 5 /')).toBe(1);
  expect(postfix('10 10 * 10 /')).toBe(10);
  expect(postfix('5 6 * 2 1 + /')).toBe(10);
  expect(postfix('1 1 + 2 2 + -')).toBe(-2);
  expect(postfix('8 4 / 9 * 3 1 * /')).toBe(6);
});
