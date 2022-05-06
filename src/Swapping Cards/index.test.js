import swapCards from './index';

test('swapCards', () => {
  expect(swapCards(12, 28)).toBe(true);
  expect(swapCards(13, 12)).toBe(true);
  expect(swapCards(21, 25)).toBe(true);
  expect(swapCards(22, 34)).toBe(true);
  expect(swapCards(25, 41)).toBe(true);
  expect(swapCards(41, 98)).toBe(true);
  expect(swapCards(48, 54)).toBe(true);
  expect(swapCards(52, 46)).toBe(true);
  expect(swapCards(74, 81)).toBe(true);
  expect(swapCards(75, 35)).toBe(true);
  expect(swapCards(75, 87)).toBe(true);
  expect(swapCards(24, 12)).toBe(false);
  expect(swapCards(45, 23)).toBe(false);
  expect(swapCards(48, 14)).toBe(false);
  expect(swapCards(67, 53)).toBe(false);
  expect(swapCards(77, 54)).toBe(false);
  expect(swapCards(88, 45)).toBe(false);
});
