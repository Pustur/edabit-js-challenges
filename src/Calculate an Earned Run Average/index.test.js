import era from './index';

test('era', () => {
  expect(era(22, 99)).toBe('2.00');
  expect(era(23, 99.1)).toBe('2.08');
  expect(era(24, 99.2)).toBe('2.17');
});
