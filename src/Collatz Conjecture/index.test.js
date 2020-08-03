import collatz from './index';

test('collatz', () => {
  expect(collatz(3)).toEqual([8, 16]);
  expect(collatz(7)).toEqual([17, 52]);
  expect(collatz(17)).toEqual([13, 52]);
  expect(collatz(33)).toEqual([27, 100]);
  expect(collatz(42)).toEqual([9, 64]);
});
