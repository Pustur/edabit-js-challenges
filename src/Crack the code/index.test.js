import decode from './index';

test('decode', () => {
  expect(decode('hello')).toEqual([5, 2, 9, 9, 3]);
  expect(decode('River')).toEqual([10, 6, 10, 2, 6]);
  expect(decode('wonderful')).toEqual([11, 3, 2, 1, 2, 6, 3, 9, 9]);
  expect(decode('all my friends')).toEqual([
    16, 9, 9, 5, 10, 4, 5, 3, 6, 6, 2, 2, 1, 7,
  ]);
});
