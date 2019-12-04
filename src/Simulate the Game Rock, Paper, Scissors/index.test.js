import rps from './index';

test('rps', () => {
  expect(rps('scissors', 'scissors')).toBe('TIE');
  expect(rps('rock', 'paper')).toBe('Player 2 wins');
  expect(rps('paper', 'rock')).toBe('Player 1 wins');
  expect(rps('paper', 'scissors')).toBe('Player 2 wins');
  expect(rps('scissors', 'paper')).toBe('Player 1 wins');
});
