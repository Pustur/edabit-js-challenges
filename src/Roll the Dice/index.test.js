import diceRoll from './index';

test('diceRoll', () => {
  expect(diceRoll(1, 6)).toBe(1);
  expect(diceRoll(2, 2)).toBe(1);
  expect(diceRoll(2, 9)).toBe(4);
  expect(diceRoll(5, 6)).toBe(5);
  expect(diceRoll(6, 6)).toBe(1);
  expect(diceRoll(3, 7)).toBe(15);
  expect(diceRoll(3, 18)).toBe(1);
  expect(diceRoll(4, 21)).toBe(20);
  expect(diceRoll(5, 26)).toBe(70);
  expect(diceRoll(4, 11)).toBe(104);
  expect(diceRoll(6, 31)).toBe(252);
  expect(diceRoll(6, 21)).toBe(4332);
});
