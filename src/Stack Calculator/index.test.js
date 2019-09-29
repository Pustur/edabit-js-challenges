import StackCalc from './index';

const testData = [
  ['12', 12],
  ['5 6 +', 11],
  ['3 6 -', 3],
  ['3 DUP +', 6],
  ['2 5 - 5 + DUP +', 16],
  ['9 14 DUP + - 3 POP', 19],
  ['1 2 3 4 5 POP POP POP', 2],
  ['13 DUP 4 POP 5 DUP + DUP + -', 7],
  ['6 5 5 7 * - /', 5],
  ['4 2 4 * 3 + 5 + / 5 -', 1],
  ['5 8 + 4 5 1 + POP 13 +', 17],
  ['x', 'Invalid instruction: x'],
  ['4 6 + x', 'Invalid instruction: x'],
  ['y x *', 'Invalid instruction: y'],
  ['', 0],
  ['4 POP', 0],

  // Additional test
  ['-5.5 -6 +', -11.5],
];

test('Stack Calculator', () => {
  testData.forEach(([input, output]) => {
    const machine = new StackCalc();
    machine.run(input);
    expect(machine.value).toBe(output);
  });
});
