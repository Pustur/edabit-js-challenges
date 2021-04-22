import correctSentences from './index';

test('correctSentences', () => {
  expect(
    correctSentences('  mubashir loves  edabit  Matt  loves  edabit  '),
  ).toBe('Mubashir loves edabit. Matt loves edabit.');
  expect(correctSentences('  he is an engineer He sleeps a lot')).toBe(
    'He is an engineer. He sleeps a lot.',
  );
  expect(
    correctSentences(' his english is not good Help him     Thank you'),
  ).toBe('His english is not good. Help him. Thank you.');
  expect(
    correctSentences(
      ' he is ready to join   airforce  Waiting for the  final approval',
    ),
  ).toBe('He is ready to join airforce. Waiting for the final approval.');
});
