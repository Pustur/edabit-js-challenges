import wordGame from './index';

test('wordGame', () => {
  expect(
    wordGame(['edabit', 'yellow', 'rowing'], ['tangy', 'wedding', 'ground']),
  ).toBe('Player 2 wins!');
  expect(
    wordGame(['edabit', 'yellow', 'growing'], ['tangy', 'wedding', 'round']),
  ).toBe('Player 1 wins!');
  expect(
    wordGame(['edabit', 'yellow', 'growing'], ['tangy', 'wedding', 'ground']),
  ).toBe('Game continues...');
  expect(
    wordGame(
      ['edabit', 'yellow', 'growing', 'dart'],
      ['tangy', 'wedding', 'ground', 'tangy'],
    ),
  ).toBe('Player 1 wins!');
  expect(
    wordGame(
      ['edabit', 'yellow', 'growing', 'dart', 'tangy'],
      ['tangy', 'wedding', 'ground', 'toast', 'yellow'],
    ),
  ).toBe('Player 2 wins!');
  expect(
    wordGame(
      [
        'banana',
        'elephant',
        'orange',
        'elope',
        'tiger',
        'elipse',
        'elevate',
        'trust',
        'time',
      ],
      [
        'apple',
        'tornado',
        'ewe',
        'event',
        'rose',
        'eradicate',
        'eat',
        'tonight',
        'love',
      ],
    ),
  ).toBe('Player 1 wins!');
});
