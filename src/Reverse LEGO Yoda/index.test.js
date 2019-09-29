import reverseLegoYoda from './index';

test('reverseLegoYoda', () => {
  expect(reverseLegoYoda('Hit you with my stick, I shall.')).toBe(
    'I shall hit you with my stick.',
  );
  expect(reverseLegoYoda('Rejected me, my crush has. Ketamine, I need.')).toBe(
    'My crush has rejected me. I need ketamine.',
  );
  expect(
    reverseLegoYoda(
      'An alien, I am. Holding me captive in Area 51, the government is.',
    ),
  ).toBe('I am an alien. The government is holding me captive in Area 51.');
});
