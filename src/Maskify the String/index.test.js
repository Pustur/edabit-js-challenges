import maskify from './index';

test('maskify', () => {
  expect(maskify('')).toBe('');
  expect(maskify('1')).toBe('1');
  expect(maskify('12')).toBe('12');
  expect(maskify('123')).toBe('123');
  expect(maskify('1234')).toBe('1234');
  expect(maskify(')E$aCU=e"_')).toBe('######=e"_');
  expect(maskify('2673951408')).toBe('######1408');
  expect(maskify('64607935616')).toBe('#######5616');
  expect(maskify('4556364607935616')).toBe('############5616');
  expect(maskify('tBy>L/cMe+?<j:6n;C~H')).toBe('################;C~H');
  expect(maskify('8Ikhlf6yoxPOwi5cB014eWbRumj7vJ')).toBe(
    '##########################j7vJ',
  );
});
