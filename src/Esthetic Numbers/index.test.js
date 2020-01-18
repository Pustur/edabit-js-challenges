import esthetic from './index';

test('esthetic', () => {
  expect(esthetic(1)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(esthetic(9)).toEqual([4, 7, 9, 10]);
  expect(esthetic(10)).toEqual([2, 3, 8, 10]);
  expect(esthetic(13)).toEqual([5, 6]);
  expect(esthetic(23)).toEqual([3, 5, 7, 10]);
  expect(esthetic(74)).toBe('Anti-Esthetic');
  expect(esthetic(666)).toEqual([8]);
  expect(esthetic(740)).toEqual([4, 6, 9]);
  expect(esthetic(928)).toBe('Anti-Esthetic');
  expect(esthetic(259259)).toEqual([9]);
  expect(esthetic(883271)).toBe('Anti-Esthetic');
  expect(esthetic(1080898)).toEqual([7]);
  expect(esthetic(1080899)).toBe('Anti-Esthetic');
});
