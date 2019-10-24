import squareAreasDifference from './index';

test('squareAreasDifference', () => {
  expect(squareAreasDifference(5)).toBe(50);
  expect(squareAreasDifference(6)).toBe(72);
  expect(squareAreasDifference(7)).toBe(98);
  expect(squareAreasDifference(17)).toBe(578);
});
