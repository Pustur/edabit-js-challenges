import reverseLegoYoda from './index';

const testData = [
  ['Hit you with my stick, I shall.', 'I shall hit you with my stick.'],
  [
    'Rejected me, my crush has. Ketamine, I need.',
    'My crush has rejected me. I need ketamine.',
  ],
  [
    'An alien, I am. Holding me captive in Area 51, the government is.',
    'I am an alien. The government is holding me captive in Area 51.',
  ],
];

test('Reverse LEGO Yoda', t => {
  testData.forEach(([input, output]) => t.is(reverseLegoYoda(input), output));
});
