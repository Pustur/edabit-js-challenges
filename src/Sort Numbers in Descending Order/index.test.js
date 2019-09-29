import sortDecending from './index';

test('sortDecending', () => {
  expect(sortDecending(0)).toBe(0);
  expect(sortDecending(123)).toBe(321);
  expect(sortDecending(321)).toBe(321);
  expect(sortDecending(6456)).toBe(6654);
  expect(sortDecending(81294)).toBe(98421);
  expect(sortDecending(628904)).toBe(986420);
  expect(sortDecending(2619805)).toBe(9865210);
  expect(sortDecending(670276097)).toBe(977766200);
  expect(sortDecending(289327560)).toBe(987653220);
  expect(sortDecending(444111888555333)).toBe(888555444333111);
});
