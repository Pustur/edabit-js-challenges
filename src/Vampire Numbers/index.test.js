import isVampire from './index';

test('isVampire', () => {
  expect(isVampire(1)).toBe('Normal Number');
  expect(isVampire(67)).toBe('Normal Number');
  expect(isVampire(126)).toBe('Pseudovampire');
  expect(isVampire(645)).toBe('Normal Number');
  expect(isVampire(688)).toBe('Pseudovampire');
  expect(isVampire(1260)).toBe('True Vampire');
  expect(isVampire(1345)).toBe('Normal Number');
  expect(isVampire(1395)).toBe('True Vampire');
  expect(isVampire(12964)).toBe('Pseudovampire');
  expect(isVampire(98765)).toBe('Normal Number');
  expect(isVampire(124421)).toBe('Normal Number');
  expect(isVampire(125460)).toBe('True Vampire');
});
