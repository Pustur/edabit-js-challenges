import phi from './index';

test('phi', () => {
  expect(phi(1)).toBe(1);
  expect(phi(3)).toBe(2);
  expect(phi(9)).toBe(6);
  expect(phi(19)).toBe(18);
  expect(phi(33)).toBe(20);
  expect(phi(51)).toBe(32);
  expect(phi(54)).toBe(18);
  expect(phi(86)).toBe(42);
  expect(phi(144)).toBe(48);
  expect(phi(209)).toBe(180);
  expect(phi(666)).toBe(216);
  expect(phi(1000)).toBe(400);
});
