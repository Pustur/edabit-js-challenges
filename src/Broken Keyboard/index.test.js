import findBrokenKeys from './index';

test('Broken Keyboard', t => {
  t.deepEqual(findBrokenKeys('happy birthday', 'hawwy birthday'), ['p']);
  t.deepEqual(findBrokenKeys('starry night', 'starrq light'), ['y', 'n']);
  t.deepEqual(findBrokenKeys('beethoven', 'affthoif5'), ['b', 'e', 'v', 'n']);
  t.deepEqual(findBrokenKeys('mozart', 'aiwgvx'), [
    'm',
    'o',
    'z',
    'a',
    'r',
    't',
  ]);
  t.deepEqual(
    findBrokenKeys('5678', '4678'),
    ['5'],
    'It should work for numbers.',
  );
  t.deepEqual(
    findBrokenKeys('!!??$$', '$$!!??'),
    ['!', '?', '$'],
    'It should work for punctuation.',
  );
});
