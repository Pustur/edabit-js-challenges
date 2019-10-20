import hasKey from './index';

test('hasKey', () => {
  expect(hasKey({ a: 44, b: 45, c: 46 }, 'd')).toBe(false);
  expect(hasKey({ a: 'z', b: 'y', c: 'x' }, 'c')).toBe(true);
  expect(hasKey({ pot: 1, tot: 2, not: 3 }, 'not')).toBe(true);
  expect(hasKey({ craves: true, midnight: true, snack: true }, 'morning')).toBe(
    false,
  );
});
