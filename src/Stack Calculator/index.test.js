import StackCalc from './index';

const testData = [
  ['', 0],
  ['12', 12],
  ['3 6 -', 3],
  ['4 POP', 0],
  ['5 6 +', 11],
  ['3 DUP +', 6],
  ['6 5 5 7 * - /', 5],
  ['2 5 - 5 + DUP +', 16],
  ['9 14 DUP + - 3 POP', 19],
  ['4 2 4 * 3 + 5 + / 5 -', 1],
  ['1 2 3 4 5 POP POP POP', 2],
  ['5 8 + 4 5 1 + POP 13 +', 17],
  ['x', 'Invalid instruction: x'],
  ['13 DUP 4 POP 5 DUP + DUP + -', 7],
  ['y x *', 'Invalid instruction: y'],
  ['4 6 + x', 'Invalid instruction: x'],

  // Additional test
  ['-5.5 -6 +', -11.5],
];

test('StackCalc', () => {
  testData.forEach(([input, output]) => {
    const machine = new StackCalc();
    machine.run(input);
    expect(machine.value).toBe(output);
  });
});
