import isUntouchable from './index';

test('isUntouchable', () => {
  expect(isUntouchable(-1)).toBe('Invalid Input');
  expect(isUntouchable(0)).toBe('Invalid Input');
  expect(isUntouchable(1)).toBe('Invalid Input');
  expect(isUntouchable(2)).toBe(true);
  expect(isUntouchable(3)).toEqual([4]);
  expect(isUntouchable(5)).toBe(true);
  expect(isUntouchable(6)).toEqual([6, 25]);
  expect(isUntouchable(8)).toEqual([10, 49]);
  expect(isUntouchable(30)).toEqual([841]);
  expect(isUntouchable(52)).toBe(true);
  expect(isUntouchable(60)).toEqual([3481]);
  expect(isUntouchable(100)).toEqual([124, 194]);
  expect(isUntouchable(120)).toBe(true);
  expect(isUntouchable(121)).toEqual([
    243,
    791,
    1199,
    1391,
    1751,
    1919,
    2231,
    2759,
    3071,
    3239,
    3431,
    3551,
    3599,
  ]);
  expect(isUntouchable(188)).toBe(true);
});
