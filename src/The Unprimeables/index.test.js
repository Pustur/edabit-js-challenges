import isUnprimeable from './index';

test('isUnprimeable', () => {
  expect(isUnprimeable(1)).toEqual([2, 3, 5, 7]);
  expect(isUnprimeable(2)).toBe('Prime Input');
  expect(isUnprimeable(14)).toEqual([11, 13, 17, 19]);
  expect(isUnprimeable(200)).toBe('Unprimeable');
  expect(isUnprimeable(666)).toEqual([661]);
  expect(isUnprimeable(839)).toBe('Prime Input');
  expect(isUnprimeable(4065)).toBe('Unprimeable');
  expect(isUnprimeable(5042)).toBe('Unprimeable');
  expect(isUnprimeable(5137)).toEqual([
    137,
    2137,
    3137,
    5107,
    5147,
    5167,
    5197,
    5237,
    5437,
    5737,
    9137,
  ]);
  expect(isUnprimeable(13490)).toEqual([13499]);
  expect(isUnprimeable(294001)).toBe('Prime Input');
});
