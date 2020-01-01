import capitalLetters from './index';

test('capitalLetters', () => {
  expect(capitalLetters('hvbHKuFxMORMuBYRsgNF')).toBe(12);
  expect(capitalLetters('nrrvrXlmfwjwlbcjwrzt')).toBe(1);
  expect(capitalLetters('VdefGMkIeTUipnLhnIfe')).toBe(8);
  expect(capitalLetters('ShwvYyeQdGsJYRBhoihI')).toBe(9);
  expect(capitalLetters('ykEblUluPthiCMhxQFlz')).toBe(7);
  expect(capitalLetters('NCdLUzNdihwUumkqfJqN')).toBe(8);
  expect(capitalLetters('sdbMinvzxxulkzyzhfWe')).toBe(2);
  expect(capitalLetters('NEcLjmRMJEXwnBkiPpCO')).toBe(12);
  expect(capitalLetters('KVFifdDbnuWdkDdmDAkO')).toBe(9);
  expect(capitalLetters('pkgUmnquvzIueBlLbtYu')).toBe(5);
  expect(capitalLetters('xbbpykGhycjVEvCdaMew')).toBe(5);
  expect(capitalLetters('YVgbDlgZDDaGkOymseSP')).toBe(10);
  expect(capitalLetters('miuyhtTofqSuoCrgyhtc')).toBe(3);
  expect(capitalLetters('YYoNuXdYJhHIPFZZndya')).toBe(12);
  expect(capitalLetters('LRuGZepMZYIwQWXJpoTB')).toBe(14);
  expect(capitalLetters('gmEosHVTLNEsYOFLCrRR')).toBe(14);
  expect(capitalLetters('dPiadMjurjCjrgYbceuK')).toBe(5);
  expect(capitalLetters('PQgSxLADOswVPWoDBgCD')).toBe(14);
  expect(capitalLetters('odoaxlnmuyixnpthidus')).toBe(0);
  expect(capitalLetters('XcqykqdmvtuMynFhnayf')).toBe(3);
});
