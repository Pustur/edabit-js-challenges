import findShortestWords from './index';

const testData = [
  ['Strive not to be a success, but rather to be of value.', ['a']],
  ['You miss 100% of the shots you don’t take.', ['of']],
  [
    'Life is what happens to you while you’re busy making other plans.',
    ['is', 'to'],
  ],
  ['We become what we think about.', ['we', 'we']],
  [
    'The most common way people give up their power is by thinking they don’t have any.',
    ['by', 'is', 'up'],
  ],
  [
    'The best time to plant the tree was 20 years ago. The second best time is now.',
    ['is', 'to'],
  ],
  [
    'Your time is limited, so don’t waste it living someone else’s life.',
    ['is', 'it', 'so'],
  ],
  [
    'You can never cross the ocean until you have the courage to lose sight of the shore.',
    ['of', 'to'],
  ],
  [
    'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
    ['be', 'do', 'is', 'to'],
  ],
  [
    'The only person you are destined to become is the person you decide to be.',
    ['be', 'is', 'to', 'to'],
  ],
  [
    'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    ['to', 'us', 'us', 'us'],
  ],
  [
    'If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present.',
    ['at', 'if', 'if', 'if', 'in', 'in', 'in'],
  ],
  ['Happiness depends upon ourselves.', ['upon']],
  ['Chase two rabbits, catch none.', ['two']],
  [
    'Only the truth of who you are, if realized, will set you free.',
    ['if', 'of'],
  ],
  [
    'If you end up with a boring miserable life because you listened to your parents, your teacher, your priest, or some guy on television, then you deserve it.',
    ['a'],
  ],
  [
    'To accomplish great things, we must not only act, but also dream; not only plan, but also believe.',
    ['to', 'we'],
  ],
  ['A tiger doesn’t lose sleep over the opinion of sheep.', ['a']],
  [
    'Kindness is a language that the deaf can hear and the blind can see.',
    ['a'],
  ],
  ['Being realistic is the most common path to mediocrity.', ['is', 'to']],
  [
    'Bravery means finding something more important than fear.',
    ['fear', 'more', 'than'],
  ],
  ['Can you imagine what I would do if I could do all I can?', ['i', 'i', 'i']],
  ['Believe you can and you’re halfway there.', ['and', 'can', 'you']],
  [
    'Remember that happiness is a way of travel, not a destination.',
    ['a', 'a'],
  ],
  [
    'May the best day of your past be the worst day of your future.',
    ['be', 'of', 'of'],
  ],
  ['I think the solution is fairly obvious.', ['i']],
  [
    'The quick brown fox jumped over the lazy dogs back.',
    ['fox', 'the', 'the'],
  ],
];

test('Find the Shortest Word(s) in a Sentence', t => {
  testData.forEach(([input, output]) =>
    t.deepEqual(findShortestWords(input), output),
  );
});
