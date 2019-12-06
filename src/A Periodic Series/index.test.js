import periodic from './index';

test('periodic', () => {
  expect(periodic('2')).toBe(1);
  expect(periodic('22')).toBe(13);
  expect(periodic('124')).toBe(6);
  expect(periodic('157')).toBe(4);
  expect(periodic('1818')).toBe(1);
  expect(periodic('0000001')).toBe(778);
  expect(periodic('1234567')).toBe(943);
});
