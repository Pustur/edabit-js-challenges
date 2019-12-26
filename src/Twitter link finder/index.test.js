import regex from './index';

const tweet = str => str.match(regex).join(' ');

test('tweet', () => {
  expect(tweet('#Finally, a test!')).toBe('#Finally');
  expect(tweet('Visit us at @edabit')).toBe('@edabit');
  expect(tweet('Follow @JavaScript')).toBe('@JavaScript');
  expect(tweet('#Honesty is the best @policy!!')).toBe('#Honesty @policy');
  expect(tweet('#Paris is the capital of #France.')).toBe('#Paris #France');
  expect(tweet('This is #definitely, the @second test')).toBe(
    '#definitely @second',
  );
  expect(tweet('The @committee consists of #eminent #jurists.')).toBe(
    '@committee #eminent #jurists',
  );
  expect(
    tweet(
      '@RonaldRoss was awarded the Nobel Prize for his work on the transmission of #malaria.',
    ),
  ).toBe('@RonaldRoss #malaria');
});
