import sentencePrimeness from './index';

test('sentencePrimeness', () => {
  expect(sentencePrimeness('Help me!')).toBe('Prime Sentence');
  expect(sentencePrimeness('Did you Smoke?')).toBe('Composite Sentence');
  expect(sentencePrimeness("This is a 'Prime' Sentence")).toBe(
    'Composite Sentence',
  );
  expect(sentencePrimeness('Primes, PRIMES EVERYWHERE!')).toBe(
    'Composite Sentence',
  );
  expect(sentencePrimeness('42 is THE aNsWeR...')).toBe(
    'Almost Prime Sentence (aNsWeR)',
  );
  expect(sentencePrimeness('She SellS SeaShellS by the SeaShore')).toBe(
    'Prime Sentence',
  );
  expect(sentencePrimeness('this is a composite sentence')).toBe(
    'Almost Prime Sentence (this)',
  );
  expect(sentencePrimeness('Lorem. Ipsum. Dolor. Sit. Amet.')).toBe(
    'Almost Prime Sentence (Lorem)',
  );
  expect(
    sentencePrimeness('10 test cases are enough, this is the last one!'),
  ).toBe('Prime Sentence');
  expect(
    sentencePrimeness('three fASt hUNgry aniMALs -aNd- 3 slow faTTy kiDS'),
  ).toBe('Almost Prime Sentence (aniMALs)');
});
