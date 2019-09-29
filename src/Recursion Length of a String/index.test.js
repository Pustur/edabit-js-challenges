import length from './index';

test('length', () => {
  expect(length('')).toBe(0);
  expect(length('a')).toBe(1);
  expect(length('make')).toBe(4);
  expect(length('apple')).toBe(5);
  expect(length('shipment')).toBe(8);
});
