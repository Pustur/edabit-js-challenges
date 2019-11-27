import lcmOfArray from './index';

test('lcmOfArray', () => {
  expect(lcmOfArray([44, 64, 12, 17, 65])).toBe(2333760);
  expect(lcmOfArray([13, 6, 17, 18, 19, 20, 37])).toBe(27965340);
  expect(lcmOfArray([200, 30, 18, 11, 8, 64, 34])).toBe(2692800);
  expect(lcmOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(2520);
});
