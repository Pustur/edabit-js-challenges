import stemPlot from './index';

test('stemPlot', () => {
  expect(stemPlot([4, 8, 75])).toEqual(['0 | 4 8', '7 | 5']);
  expect(stemPlot([555, 555, 555, 555])).toEqual(['55 | 5 5 5 5']);
  expect(stemPlot([111, 11, 1])).toEqual(['0 | 1', '1 | 1', '11 | 1']);
  expect(stemPlot([22, 22, 38, 22, 19])).toEqual([
    '1 | 9',
    '2 | 2 2 2',
    '3 | 8',
  ]);
  expect(stemPlot([48, 125, 48, 48, 20, 21, 22, 125, 48, 20])).toEqual([
    '2 | 0 0 1 2',
    '4 | 8 8 8 8',
    '12 | 5 5',
  ]);
  expect(stemPlot([10, 20, 30, 1, 2, 3])).toEqual([
    '0 | 1 2 3',
    '1 | 0',
    '2 | 0',
    '3 | 0',
  ]);
  expect(stemPlot([1062, 310, 89, 9, 16])).toEqual([
    '0 | 9',
    '1 | 6',
    '8 | 9',
    '31 | 0',
    '106 | 2',
  ]);
  expect(stemPlot([36, 12, 2, 4, 1062, 1062, 2, 36, 234])).toEqual([
    '0 | 2 2 4',
    '1 | 2',
    '3 | 6 6',
    '23 | 4',
    '106 | 2 2',
  ]);
});
