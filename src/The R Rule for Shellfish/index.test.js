import shellFish from './index';

test('shellFish', () => {
  expect(shellFish(new Date(2001, 2, 9))).toBe('safe');
  expect(shellFish(new Date(1901, 8, 18))).toBe('safe');
  expect(shellFish(new Date(1934, 3, 18))).toBe('safe');
  expect(shellFish(new Date(1958, 0, 11))).toBe('safe');
  expect(shellFish(new Date(1963, 10, 3))).toBe('safe');
  expect(shellFish(new Date(1986, 1, 22))).toBe('safe');
  expect(shellFish(new Date(2059, 9, 6))).toBe('safe');
  expect(shellFish(new Date(1937, 5, 2))).toBe('unsafe');
  expect(shellFish(new Date(2009, 5, 9))).toBe('unsafe');
  expect(shellFish(new Date(2019, 9, 10))).toBe('safe');
  expect(shellFish(new Date(2020, 11, 28))).toBe('safe');
  expect(shellFish(new Date(1945, 4, 19))).toBe('unsafe');
  expect(shellFish(new Date(1991, 7, 30))).toBe('unsafe');
  expect(shellFish(new Date(2000, 6, 10))).toBe('unsafe');
});
