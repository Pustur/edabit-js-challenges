import dartsSolver from './index';

test('dartsSolver', () => {
  expect(dartsSolver([3, 7, 11, 14, 18, 20, 25], 3, 8)).toEqual([]);
  expect(dartsSolver([3, 6, 8, 11, 15, 19, 22], 3, 35)).toEqual(['8-8-19']);
  expect(dartsSolver([2, 4, 7, 10, 13, 18, 24], 3, 29)).toEqual(['4-7-18']);
  expect(dartsSolver([3, 7, 11, 14, 18, 20, 25], 3, 40)).toEqual(['11-11-18']);
  expect(dartsSolver([3, 7, 11, 14, 18, 20, 25], 4, 23)).toEqual(['3-3-3-14']);
  expect(dartsSolver([3, 7, 11, 14, 18, 20, 25, 29, 34], 3, 67)).toEqual([
    '18-20-29',
  ]);
  expect(dartsSolver([3, 7, 11, 14, 18, 20, 25], 3, 32)).toEqual([
    '3-11-18',
    '7-7-18',
    '7-11-14',
  ]);
});
