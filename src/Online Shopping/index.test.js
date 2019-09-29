import freeShipping from './index';

test('freeShipping', () => {
  expect(freeShipping({ Shampoo: 5.99, 'Rubber Ducks': 15.99 })).toBe(false);
  expect(freeShipping({ 'Flatscreen TV': 399.99 })).toBe(true);
  expect(freeShipping({ Scrabble: 12.32, Jenga: 5.55, Clue: 20.0 })).toBe(
    false,
  );
  expect(
    freeShipping({
      Monopoly: 11.99,
      'Secret Hitler': 35.99,
      Bananagrams: 13.99,
    }),
  ).toBe(true);
  expect(
    freeShipping({
      'Elephant Plushie': 40.55,
      'Octopus Plushie': 20.33,
      'Spongebob Plushie': 20.0,
    }),
  ).toBe(true);
});
