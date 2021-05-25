import antipodesAverage from './index';

test('antipodesAverage', () => {
  expect(antipodesAverage([-1, 0, 1])).toEqual([0]);
  expect(antipodesAverage([-1, -2])).toEqual([-1.5]);
  expect(antipodesAverage([1, 2, 3, 4, 5])).toEqual([3, 3]);
  expect(antipodesAverage([1, 2, 3, 4])).toEqual([2.5, 2.5]);
  expect(antipodesAverage([1, 2, 5, 10])).toEqual([5.5, 3.5]);
  expect(antipodesAverage([1, 2, 3, 5, 7, 9])).toEqual([5, 4.5, 4]);
  expect(antipodesAverage([5, -80, 66, -8, -6])).toEqual([-0.5, -44]);
  expect(antipodesAverage([-1, -4, -12, -2, -11, -6])).toEqual([
    -3.5, -7.5, -7,
  ]);
});
