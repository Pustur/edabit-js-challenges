import kempner from './index';

test('kempner', () => {
  expect(kempner(1)).toBe(1);
  expect(kempner(2)).toBe(2);
  expect(kempner(4)).toBe(4);
  expect(kempner(6)).toBe(3);
  expect(kempner(10)).toBe(5);
  expect(kempner(13)).toBe(13);
  expect(kempner(21)).toBe(7);
  expect(kempner(29)).toBe(29);
  expect(kempner(68)).toBe(17);
  expect(kempner(71)).toBe(71);
  expect(kempner(100)).toBe(10);
});
