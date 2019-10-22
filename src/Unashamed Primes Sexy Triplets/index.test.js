import sexyTriplets from './index';

test('sexyTriplets', () => {
  expect(sexyTriplets(1, 17)).toEqual([]);
  expect(sexyTriplets(1000, 1080)).toEqual([]);
  expect(sexyTriplets(1, 19)).toEqual([[7, 13, 19]]);
  expect(sexyTriplets(64, 88)).toEqual([[67, 73, 79]]);
  expect(sexyTriplets(17, 29)).toEqual([[17, 23, 29]]);
  expect(sexyTriplets(11, 59)).toEqual([
    [17, 23, 29],
    [31, 37, 43],
    [47, 53, 59],
  ]);
  expect(sexyTriplets(5842, 6333)).toEqual([
    [6067, 6073, 6079],
    [6257, 6263, 6269],
    [6317, 6323, 6329],
  ]);
  expect(sexyTriplets(109, 275)).toEqual([
    [151, 157, 163],
    [167, 173, 179],
    [227, 233, 239],
    [257, 263, 269],
  ]);
  expect(sexyTriplets(45000, 45777)).toEqual([
    [45427, 45433, 45439],
    [45491, 45497, 45503],
    [45751, 45757, 45763],
  ]);
});
