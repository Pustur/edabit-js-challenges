import firstVowel from './index';

test('firstVowel', () => {
  expect(firstVowel('hello')).toBe(1);
  expect(firstVowel('apple')).toBe(0);
  expect(firstVowel('MELON')).toBe(1);
  expect(firstVowel('string')).toBe(3);
  expect(firstVowel('piNNEaPLE')).toBe(1);
  expect(firstVowel('STRAWBERRY')).toBe(3);
});
