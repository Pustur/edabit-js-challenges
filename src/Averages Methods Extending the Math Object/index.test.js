import Math from './index';

test('Math.avg', () => {
  expect(Math.avg([3, 5, 7])).toBe(5);
  expect(Math.avg([1, 4, 4])).toBe(3);
  expect(Math.avg([0.11, 0.22, 0.33], 1)).toBe(0.2);
  expect(Math.avg([1, 23, 456, 7890])).toBe(2092.5);
});

test('Math.qAvg', () => {
  expect(Math.qAvg([3, 5, 7], 1)).toBe(5.3);
  expect(Math.qAvg([1, 4, 4], 3)).toBe(3.317);
  expect(Math.qAvg([0.11, 0.22, 0.33], 6)).toBe(0.237627);
  expect(Math.qAvg([1, 23, 456, 7890])).toBe(3951.599865877111);
});

test('Math.hAvg', () => {
  expect(Math.hAvg([3, 5, 7], 1)).toBe(4.4);
  expect(Math.hAvg([1, 4, 4], 5)).toBe(2);
  expect(Math.hAvg([0.11, 0.22, 0.33], 4)).toBe(0.18);
  expect(Math.hAvg([1, 23, 456, 7890])).toBe(3.8248304676450755);
});

test('Math.gAvg', () => {
  expect(Math.gAvg([3, 5, 7], 1)).toBe(4.7);
  expect(Math.gAvg([1, 4, 4], 7)).toBe(2.5198421);
  expect(Math.gAvg([0.11, 0.22, 0.33], 2)).toBe(0.2);
  expect(Math.gAvg([1, 23, 456, 7890])).toBe(95.37672823128206);
});
