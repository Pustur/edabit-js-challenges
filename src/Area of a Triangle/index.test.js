import triArea from './index';

test('triArea', () => {
  expect(triArea(3, 2)).toBe(3);
  expect(triArea(5, 4)).toBe(10);
  expect(triArea(0, 60)).toBe(0);
  expect(triArea(10, 10)).toBe(50);
  expect(triArea(12, 11)).toBe(66);
});
