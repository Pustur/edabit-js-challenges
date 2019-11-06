import recamanIndex from './index';

test('recamanIndex', () => {
  expect(recamanIndex(2)).toBe(4);
  expect(recamanIndex(3)).toBe(2);
  expect(recamanIndex(7)).toBe(5);
  expect(recamanIndex(20)).toBe(7);
  expect(recamanIndex(56)).toBe(204);
  expect(recamanIndex(100)).toBe(387);
  expect(recamanIndex(666)).toBe(2292);
  expect(recamanIndex(1000)).toBe(4419);
  expect(recamanIndex(10000)).toBe(7215);
});
