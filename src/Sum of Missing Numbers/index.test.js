import sumOfMissingNums from './index';

test('sumOfMissingNums', () => {
  expect(sumOfMissingNums(['45', 'EDABIT', '56'])).toBe(10);
  expect(sumOfMissingNums(['1', '3', '5', '7', '9'])).toBe(4);
  expect(sumOfMissingNums(['7', '3', '1', '9', '5'])).toBe(4);
  expect(sumOfMissingNums(['1', '78', 'B', '9', 'z'])).toBe(75);
  expect(sumOfMissingNums(['95', '96', '97', '98', '99'])).toBe(0);
  expect(sumOfMissingNums(['10', '20', '30', '40', '50'])).toBe(36);
});
