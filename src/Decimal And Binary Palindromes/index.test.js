import palindromeType from './index';

test('palindromeType', () => {
  expect(palindromeType(1)).toBe('Decimal and binary.');
  expect(palindromeType(4)).toBe('Decimal only.');
  expect(palindromeType(7)).toBe('Decimal and binary.');
  expect(palindromeType(101)).toBe('Decimal only.');
  expect(palindromeType(313)).toBe('Decimal and binary.');
  expect(palindromeType(456)).toBe('Neither!');
  expect(palindromeType(932)).toBe('Neither!');
  expect(palindromeType(7447)).toBe('Decimal and binary.');
  expect(palindromeType(14441)).toBe('Decimal only.');
  expect(palindromeType(18985)).toBe('Binary only.');
  expect(palindromeType(48084)).toBe('Decimal only.');
  expect(palindromeType(427787)).toBe('Binary only.');
  expect(palindromeType(585585)).toBe('Decimal and binary.');
  expect(palindromeType(1306031)).toBe('Decimal only.');
  expect(palindromeType(1903127)).toBe('Binary only.');
  expect(palindromeType(1934391)).toBe('Decimal and binary.');
  expect(palindromeType(3664663)).toBe('Decimal only.');
  expect(palindromeType(5841485)).toBe('Decimal and binary.');
  expect(palindromeType(6286333)).toBe('Binary only.');
  expect(palindromeType(7115931)).toBe('Binary only.');
  expect(palindromeType(8337738)).toBe('Neither!');
  expect(palindromeType(8494948)).toBe('Decimal only.');
  expect(palindromeType(9994521)).toBe('Binary only.');
});
