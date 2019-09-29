import maxHam from './index';

test('Farthest Hamming Anagrams', t => {
  t.is(maxHam('dear', 'read'), 2);
  t.is(maxHam('petal', 'leapt'), 4);
  t.is(maxHam('solemn', 'melons'), 5);
  t.is(maxHam('observe', 'verbose'), 6);
  t.is(maxHam('dare', 'read'), true);
  t.is(maxHam('mister', 'remits'), true);
  t.is(maxHam('pirates', 'traipse'), true);
  t.is(maxHam('solemn', 'lemons'), true);
  t.is(maxHam('emigrants', 'streaming'), true);
  t.is(maxHam('naive', 'ravine'), false);
  t.is(maxHam('solemn', 'molest'), false);
  t.is(maxHam('teardrop', 'predated'), false);

  // Custom test
  t.is(maxHam('aab', 'abb'), false);
  t.is(maxHam('Solemn', 'Melons'), 5);
});
