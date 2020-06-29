import sameUpsidedown from './index';

test('sameUpsidedown', () => {
  expect(sameUpsidedown('9')).toBe(false);
  expect(sameUpsidedown('0')).toBe(true);
  expect(sameUpsidedown('6090609')).toBe(true);
  expect(sameUpsidedown('9669')).toBe(false);
  expect(sameUpsidedown('69069069')).toBe(true);
  expect(sameUpsidedown('60906096090609')).toBe(true);
  expect(sameUpsidedown('966909669')).toBe(false);
  expect(sameUpsidedown('6000000009')).toBe(true);
  expect(sameUpsidedown('6666660999999')).toBe(true);
  expect(sameUpsidedown('96666660999999')).toBe(false);
});
