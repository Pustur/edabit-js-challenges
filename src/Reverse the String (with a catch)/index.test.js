import specialReverseString from './index';

test('specialReverseString', () => {
  expect(specialReverseString('Edabit')).toBe('Tibade');
  expect(specialReverseString('1 23 456')).toBe('6 54 321');
  expect(specialReverseString('UPPER lower')).toBe('REWOL reppu');
  expect(specialReverseString('Hello World!')).toBe('!dlro Wolleh');
  expect(specialReverseString('addition(3, 2) ➞ 5')).toBe('5➞)2,3(noit id d a');
  expect(specialReverseString("Where's your dog Daisy?")).toBe(
    "?ysiadg odru oys 'erehw",
  );
  expect(
    specialReverseString("It's known that CSS means Cascading Style Sheets"),
  ).toBe("Stee hsely tsgn IDA csacs Naemsscta Htnwo Nks'ti");
});
