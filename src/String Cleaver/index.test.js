import cleave from './index';

// prettier-ignore
const words1 = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing'];

// prettier-ignore
const words2 = ['about', 'be', 'hell', 'if', 'is', 'it', 'me', 'other', 'outer', 'people', 'the', 'to', 'up', 'where'];

test('cleave', () => {
  expect(cleave('solongandthanksforalllthefish', words1)).toBe(
    'Cleaving stalled: Word not found',
  );
  expect(cleave('solongandthanksforallthefish', words1)).toBe(
    'so long and thanks for all the fish',
  );
  expect(cleave('timeisanillusionlunchtimedoublyso', words1)).toBe(
    'time is an illusion lunchtime doubly so',
  );
  expect(
    cleave('ilovedeadlinesilovethewheezingnoisetheymakeastheygoby', words1),
  ).toBe('Cleaving stalled: Word not found');
  expect(
    cleave('tosummarizethesummaryofthesummarypeopleareaproblem', words1),
  ).toBe('to summarize the summary of the summary people are a problem');
  expect(
    cleave('ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby', words1),
  ).toBe('i love deadlines i love the whooshing noise they make as they go by');
  expect(
    cleave(
      'foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen',
      words1,
    ),
  ).toBe(
    'for a moment nothing happened then after a second or so nothing continued to happen',
  );

  // Additional tests from instructions
  expect(cleave('hellisotherpeople', words2)).toBe('hell is other people');
  expect(cleave('hellisotterpeople', words2)).toBe(
    'Cleaving stalled: Word not found',
  );
  expect(cleave('ifitistobeitisuptome', words2)).toBe(
    'if it is to be it is up to me',
  );
});
