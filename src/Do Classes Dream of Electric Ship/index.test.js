import Battleship from './index';

test('Battleship', () => {
  const scheme1 = ['A1', 'C1', 'B2', 'B3', 'D2', 'E2', 'E4', 'E5', 'A5'];
  const scheme2 = ['A1', 'B1', 'D1', 'E1', 'A3', 'A4', 'D3', 'E4', 'D5'];
  const scheme3 = ['A2', 'A4', 'C1', 'C2', 'E3', 'C4', 'C5', 'D3', 'E5'];

  const input1 = ['A1', 'B2', 'C3', 'D4', 'E5', 'E4'];
  const input2 = ['A2', 'B4', 'C1', 'D3', 'E5', 'A5'];
  const input3 = ['A1', 'B1', 'D1', 'E1', 'A3', 'A4'];

  const battleship1 = new Battleship(scheme1, input1);
  const battleship2 = new Battleship(scheme1, input2);
  const battleship3 = new Battleship(scheme2, input3);
  const battleship4 = new Battleship(scheme2, input2);
  const battleship5 = new Battleship(scheme3, input1);

  expect(battleship1.board()).toEqual([
    ['☀', '○', '○', '○', '●'],
    ['○', '☀', '●', '○', '○'],
    ['●', '○', '☼', '○', '○'],
    ['○', '●', '○', '☼', '○'],
    ['○', '●', '○', '☀', '☀'],
  ]);
  expect(battleship1.hits()).toBe(4);
  expect(battleship1.sunk()).toBe(1);
  expect(battleship1.points()).toBe(6);

  expect(battleship2.board()).toEqual([
    ['●', '☼', '○', '○', '☀'],
    ['○', '●', '●', '☼', '○'],
    ['☀', '○', '○', '○', '○'],
    ['○', '●', '☼', '○', '○'],
    ['○', '●', '○', '●', '☀'],
  ]);
  expect(battleship2.hits()).toBe(3);
  expect(battleship2.sunk()).toBe(0);
  expect(battleship2.points()).toBe(3);

  expect(battleship3.board()).toEqual([
    ['☀', '○', '☀', '☀', '○'],
    ['☀', '○', '○', '○', '○'],
    ['○', '○', '○', '○', '○'],
    ['☀', '○', '●', '○', '●'],
    ['☀', '○', '○', '●', '○'],
  ]);
  expect(battleship3.hits()).toBe(6);
  expect(battleship3.sunk()).toBe(3);
  expect(battleship3.points()).toBe(12);

  expect(battleship4.board()).toEqual([
    ['●', '☼', '●', '●', '☼'],
    ['●', '○', '○', '☼', '○'],
    ['☼', '○', '○', '○', '○'],
    ['●', '○', '☀', '○', '●'],
    ['●', '○', '○', '●', '☼'],
  ]);
  expect(battleship4.hits()).toBe(1);
  expect(battleship4.sunk()).toBe(0);
  expect(battleship4.points()).toBe(1);

  expect(battleship5.board()).toEqual([
    ['☼', '●', '○', '●', '○'],
    ['○', '☼', '○', '○', '○'],
    ['●', '●', '☼', '●', '●'],
    ['○', '○', '●', '☼', '○'],
    ['○', '○', '●', '☼', '☀'],
  ]);
  expect(battleship5.hits()).toBe(1);
  expect(battleship5.sunk()).toBe(0);
  expect(battleship5.points()).toBe(1);
});
