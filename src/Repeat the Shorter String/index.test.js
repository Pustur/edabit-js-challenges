import lengthen from './index';

test('lengthen', () => {
  expect(lengthen('abcdefg', 'ab')).toBe('abababa');
  expect(lengthen('k', 'champagne')).toBe('kkkkkkkkk');
  expect(lengthen('skipping', 'clap')).toBe('clapclap');
  expect(lengthen('DUH', 'champagne')).toBe('DUHDUHDUH');
  expect(lengthen('ingenius', 'forest')).toBe('forestfo');
});
