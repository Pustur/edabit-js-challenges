import reverseCapitalize from './index';

test('reverseCapitalize', () => {
  expect(reverseCapitalize('abc')).toBe('CBA');
  expect(reverseCapitalize('input')).toBe('TUPNI');
  expect(reverseCapitalize('edabit')).toBe('TIBADE');
  expect(reverseCapitalize('hellothere')).toBe('EREHTOLLEH');
  expect(reverseCapitalize('indubitably')).toBe('YLBATIBUDNI');
});
