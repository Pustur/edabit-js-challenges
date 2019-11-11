import mapping from './index';

test('mapping', () => {
  expect(mapping(['a', 'b', 'c'])).toEqual({ a: 'A', b: 'B', c: 'C' });
  expect(mapping(['p', 's', 't'])).toEqual({ p: 'P', s: 'S', t: 'T' });
  expect(mapping(['a', 'v', 'y', 'z'])).toEqual({
    a: 'A',
    v: 'V',
    y: 'Y',
    z: 'Z',
  });
});
