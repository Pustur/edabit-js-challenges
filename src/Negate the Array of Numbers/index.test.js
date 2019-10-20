import negate from './index';

test('negate', () => {
  expect(negate([])).toEqual([]);
  expect(negate([1, 2, 3, 4])).toEqual([-1, -2, -3, -4]);
  expect(negate([-1, -2, -3, -4])).toEqual([1, 2, 3, 4]);
});
