import castOutNines from './index';

test('castOutNines', () => {
  expect(castOutNines(9, 9, 51)).toBe('9,9,6,9 = Wrong!');
  expect(castOutNines(9, 9, 81)).toBe('9,9,9,9 = Correct!');
  expect(castOutNines(123, 456, 789)).toBe('6,6,6,9 = Wrong!');
  expect(castOutNines(467, 78, 36425)).toBe('8,6,2,3 = Wrong!');
  expect(castOutNines(467, 78, 36426)).toBe('8,6,3,3 = Correct!');
  expect(castOutNines(9, 9, 666)).toBe('9,9,9,9 = False positive!');
  expect(castOutNines(467, 78, 129)).toBe('8,6,3,3 = False positive!');
  expect(castOutNines(12986, 4320, 56099521)).toBe('8,9,1,9 = Wrong!');
  expect(castOutNines(123, 456, 999)).toBe('6,6,9,9 = False positive!');
  expect(castOutNines(12986, 4320, 56099520)).toBe('8,9,9,9 = Correct!');
  expect(castOutNines(59714, 24339, 153379046)).toBe('8,3,2,6 = Wrong!');
  expect(castOutNines(59714, 24339, 1453379046)).toBe('8,3,6,6 = Correct!');
  expect(castOutNines(1902, 1964, 3735519)).toBe('3,2,6,6 = False positive!');
  expect(castOutNines(12986, 4320, 56099529)).toBe('8,9,9,9 = False positive!');
});
