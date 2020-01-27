import variableValid from './index';

test('variableValid', () => {
  expect(variableValid('result')).toBe(true);
  expect(variableValid('nTimes2')).toBe(true);
  expect(variableValid('odd_nums')).toBe(true);
  expect(variableValid('2TimesN')).toBe(false);
  expect(variableValid('count spaces')).toBe(false);
  expect(variableValid('rather_long_variable_name')).toBe(true);
});
