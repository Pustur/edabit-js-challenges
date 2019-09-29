import stepsToConvert from './index';

test('stepsToConvert', () => {
  expect(stepsToConvert('')).toBe(0);
  expect(stepsToConvert('aba')).toBe(0);
  expect(stepsToConvert('ABA')).toBe(0);
  expect(stepsToConvert('abC')).toBe(1);
  expect(stepsToConvert('abCBA')).toBe(2);
  expect(stepsToConvert('abaCCC')).toBe(3);
  expect(stepsToConvert('abaaCCCDE')).toBe(4);
  expect(stepsToConvert('CCaaCCaaCa')).toBe(5);
});
