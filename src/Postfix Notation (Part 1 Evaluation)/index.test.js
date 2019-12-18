import postfix from './index';

test('postfix', () => {
  expect(postfix('8 1 +')).toBe(9);
  expect(postfix('9 3 /')).toBe(3);
  expect(postfix('8 2 5 * +')).toBe(18);
  expect(postfix('8 2 + 5 *')).toBe(50);
  expect(postfix('3 10 5 + *')).toBe(45);
  expect(postfix('3 4 + 2 * 7 /')).toBe(2);
  expect(postfix('2 3 1 * + 9 -')).toBe(-4);
  expect(postfix('9 2 * 3 + 12 -')).toBe(9);
  expect(postfix('3 12 32 8 / / *')).toBe(9);
  expect(postfix('4 5 7 2 + - *')).toBe(-16);
  expect(postfix('5 7 - 6 9 + *')).toBe(-30);
  expect(postfix('1 2 3 4 5 + + + +')).toBe(15);
  expect(postfix('10 8 + 3 4 * - 6 /')).toBe(1);
  expect(postfix('6 2 + 5 * 8 4 / -')).toBe(38);
  expect(postfix('6 4 18 2 7 + / + -')).toBe(0);
  expect(postfix('8 1 3 + 7 * + 6 -')).toBe(30);
  expect(postfix('3 2 + 15 3 / 8 - *')).toBe(-15);
  expect(postfix('13 6 7 8 4 / 9 * - + +')).toBe(8);
  expect(postfix('6 45 - 3 12 6 2 / * + /')).toBe(-1);
  expect(postfix('10 7 1 1 + - / 6 * 3 5 4 + - +')).toBe(6);
});
