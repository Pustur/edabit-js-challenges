import transposeMatrix from './index';

test('transposeMatrix', () => {
  expect(transposeMatrix([['Enter'], ['the'], ['Matrix.']])).toBe(
    'Enter the Matrix.',
  );
  expect(
    transposeMatrix([
      ['If', 'killed', 'you'],
      ['you', 'in', 'die'],
      ['are', 'Matrix', 'here?'],
    ]),
  ).toBe('If you are killed in Matrix you die here?');
  expect(
    transposeMatrix([
      ['Matrix', 'that'],
      ['is', 'system'],
      ['a', 'is'],
      ['system', 'our'],
      ['Neo,', 'enemy.'],
    ]),
  ).toBe('Matrix is a system Neo, that system is our enemy.');
  expect(
    transposeMatrix([
      ['As', 'human'],
      ['long', 'race'],
      ['as', 'will'],
      ['Matrix', 'never'],
      ['exists,', 'be'],
      ['the', 'free.'],
    ]),
  ).toBe('As long as Matrix exists, the human race will never be free.');
  expect(
    transposeMatrix([
      ['Unfortunately,', 'be', 'is.', 'see'],
      ['no', 'told', "You'll", 'it'],
      ['one', 'what', 'have', 'for'],
      ['can', 'Matrix', 'to', 'yourself.'],
    ]),
  ).toBe(
    "Unfortunately, no one can be told what Matrix is. You'll have to see it for yourself.",
  );
});
