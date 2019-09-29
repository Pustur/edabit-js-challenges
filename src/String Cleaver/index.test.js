import cleave from './index';

const words1 = [
  'a',
  'after',
  'all',
  'an',
  'and',
  'are',
  'as',
  'by',
  'continued',
  'deadlines',
  'doubly',
  'fish',
  'for',
  'go',
  'happen',
  'happened',
  'i',
  'illusion',
  'is',
  'long',
  'love',
  'lunchtime',
  'make',
  'moment',
  'noise',
  'nothing',
  'of',
  'or',
  'people',
  'problem',
  'second',
  'so',
  'summarize',
  'summary',
  'thanks',
  'the',
  'then',
  'they',
  'time',
  'to',
  'whooshing',
];
const words2 = [
  'about',
  'be',
  'hell',
  'if',
  'is',
  'it',
  'me',
  'other',
  'outer',
  'people',
  'the',
  'to',
  'up',
  'where',
];

const testData = [
  [
    ['solongandthanksforallthefish', words1],
    'so long and thanks for all the fish',
  ],
  [
    ['solongandthanksforalllthefish', words1],
    'Cleaving stalled: Word not found',
  ],
  [
    ['timeisanillusionlunchtimedoublyso', words1],
    'time is an illusion lunchtime doubly so',
  ],
  [
    ['ilovedeadlinesilovethewheezingnoisetheymakeastheygoby', words1],
    'Cleaving stalled: Word not found',
  ],
  [
    ['ilovedeadlinesilovethewhooshingnoisetheymakeastheygoby', words1],
    'i love deadlines i love the whooshing noise they make as they go by',
  ],
  [
    ['tosummarizethesummaryofthesummarypeopleareaproblem', words1],
    'to summarize the summary of the summary people are a problem',
  ],
  [
    [
      'foramomentnothinghappenedthenafterasecondorsonothingcontinuedtohappen',
      words1,
    ],
    'for a moment nothing happened then after a second or so nothing continued to happen',
  ],

  // Additional tests from instructions
  [['ifitistobeitisuptome', words2], 'if it is to be it is up to me'],
  [['hellisotherpeople', words2], 'hell is other people'],
  [['hellisotterpeople', words2], 'Cleaving stalled: Word not found'],
];

test('String Cleaver', () => {
  testData.forEach(([[input, words], output]) =>
    expect(cleave(input, words)).toBe(output),
  );
});
