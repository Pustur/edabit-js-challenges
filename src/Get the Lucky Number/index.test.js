import getLuckyNumber from './index';

test('getLuckyNumber', () => {
  expect(getLuckyNumber(3, 2)).toBe(3);
  expect(getLuckyNumber(25, 5)).toBe(13);
  expect(getLuckyNumber(120, 13)).toBe(49);
  expect(getLuckyNumber(350, 27)).toBe(127);
  expect(getLuckyNumber(700, 40)).toBe(201);
  expect(getLuckyNumber(1000, 57)).toBe(303);
  expect(getLuckyNumber(5000, 90)).toBe(535);
});
