import ticTacToe from './index';

test('ticTacToe', () => {
  expect(
    ticTacToe([
      ['O', 'O', 'O'],
      ['O', 'X', 'X'],
      ['E', 'X', 'X'],
    ]),
  ).toBe('O');
  expect(
    ticTacToe([
      ['X', 'O', 'E'],
      ['X', 'O', 'E'],
      ['E', 'O', 'X'],
    ]),
  ).toBe('O');
  expect(
    ticTacToe([
      ['X', 'O', 'O'],
      ['X', 'O', 'O'],
      ['X', 'X', 'X'],
    ]),
  ).toBe('X');
  expect(
    ticTacToe([
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['E', 'E', 'X'],
    ]),
  ).toBe('X');
  expect(
    ticTacToe([
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'X'],
    ]),
  ).toBe('X');
  expect(
    ticTacToe([
      ['X', 'X', 'O'],
      ['O', 'O', 'X'],
      ['X', 'X', 'O'],
    ]),
  ).toBe('Draw');
  expect(
    ticTacToe([
      ['X', 'X', 'O'],
      ['O', 'O', 'X'],
      ['X', 'X', 'O'],
    ]),
  ).toBe('Draw');
});
