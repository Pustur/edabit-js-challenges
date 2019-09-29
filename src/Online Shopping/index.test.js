import freeShipping from './index';

test('Online Shopping', t => {
  t.is(freeShipping({ Shampoo: 5.99, 'Rubber Ducks': 15.99 }), false);
  t.is(freeShipping({ 'Flatscreen TV': 399.99 }), true);
  t.is(freeShipping({ Scrabble: 12.32, Jenga: 5.55, Clue: 20.0 }), false);
  t.is(
    freeShipping({
      Monopoly: 11.99,
      'Secret Hitler': 35.99,
      Bananagrams: 13.99,
    }),
    true,
  );
  t.is(
    freeShipping({
      'Elephant Plushie': 40.55,
      'Octopus Plushie': 20.33,
      'Spongebob Plushie': 20.0,
    }),
    true,
  );
});
