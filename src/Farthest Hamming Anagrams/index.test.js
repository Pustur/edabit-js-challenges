import maxHam from './index';

test('maxHam', () => {
  expect(maxHam('dear', 'read')).toBe(2);
  expect(maxHam('petal', 'leapt')).toBe(4);
  expect(maxHam('solemn', 'melons')).toBe(5);
  expect(maxHam('observe', 'verbose')).toBe(6);
  expect(maxHam('dare', 'read')).toBe(true);
  expect(maxHam('mister', 'remits')).toBe(true);
  expect(maxHam('solemn', 'lemons')).toBe(true);
  expect(maxHam('pirates', 'traipse')).toBe(true);
  expect(maxHam('emigrants', 'streaming')).toBe(true);
  expect(maxHam('naive', 'ravine')).toBe(false);
  expect(maxHam('solemn', 'molest')).toBe(false);
  expect(maxHam('teardrop', 'predated')).toBe(false);

  // Additional tests
  expect(maxHam('Solemn', 'Melons')).toBe(5);
  expect(maxHam('aab', 'abb')).toBe(false);
});
