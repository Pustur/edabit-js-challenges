import everySome from './index';

test('everySome', () => {
  expect(everySome('>= 1', 'everybody', 1, 1, -1, 1, 1)).toBe(false);
  expect(everySome('>= 1', 'somebody', -1, -1, -1, -1, 1)).toBe(true);
  expect(everySome('<= 10 * 2', 'somebody', 21, 68, 104, 20, 3)).toBe(true);
  expect(everySome('=== 9 % 9', 'somebody', 9, 1, 81, 218, 33)).toBe(false);
  expect(everySome('< 4 / 2', 'everybody', 1, 2, 1, 2, 1, 0, -10)).toBe(false);
  expect(everySome('!== 1', 'everybody', true, true, true, true, true)).toBe(
    true,
  );
  expect(
    everySome('!= 0', 'everybody', false, false, false, false, false),
  ).toBe(false);
});
