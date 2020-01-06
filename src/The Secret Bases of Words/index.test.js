import wordToDecimal from './index';

test('wordToDecimal', () => {
  expect(wordToDecimal('oNe')).toBe(15589);
  expect(wordToDecimal('TwO')).toBe(32661);
  expect(wordToDecimal('SIx')).toBe(33013);
  expect(wordToDecimal('Four')).toBe(470886);
  expect(wordToDecimal('fIVe')).toBe(510958);
  expect(wordToDecimal('ZERO')).toBe(1652100);
  expect(wordToDecimal('THRee')).toBe(23973734);
  expect(wordToDecimal('seven')).toBe(29851095);
  expect(wordToDecimal('eigHt')).toBe(11840939);
  expect(wordToDecimal('Edabit')).toBe(351010469);
  expect(wordToDecimal('JavaScript')).toBe(680575028284221);
});
