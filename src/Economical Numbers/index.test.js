import isEconomical from './index';

test('isEconomical', () => {
  expect(isEconomical(5)).toBe('Equidigital');
  expect(isEconomical(6)).toBe('Wasteful');
  expect(isEconomical(14)).toBe('Equidigital');
  expect(isEconomical(30)).toBe('Wasteful');
  expect(isEconomical(81)).toBe('Equidigital');
  expect(isEconomical(125)).toBe('Frugal');
  expect(isEconomical(243)).toBe('Frugal');
  expect(isEconomical(1024)).toBe('Frugal');
  expect(isEconomical(1267)).toBe('Equidigital');
  expect(isEconomical(1701)).toBe('Frugal');
  expect(isEconomical(12871)).toBe('Equidigital');
  expect(isEconomical(88632)).toBe('Wasteful');
});
