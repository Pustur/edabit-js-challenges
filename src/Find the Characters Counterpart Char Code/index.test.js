import counterpartCharCode from './index';

describe('counterpartCharCode', () => {
  test('normal letters', () => {
    expect(counterpartCharCode('a')).toBe(65);
    expect(counterpartCharCode('A')).toBe(97);
    expect(counterpartCharCode('l')).toBe(76);
    expect(counterpartCharCode('L')).toBe(108);
    expect(counterpartCharCode('z')).toBe(90);
    expect(counterpartCharCode('Z')).toBe(122);
  });

  test('accented / weird letters', () => {
    expect(counterpartCharCode('è')).toBe(200);
    expect(counterpartCharCode('È')).toBe(232);
    expect(counterpartCharCode('Œ')).toBe(339);
    expect(counterpartCharCode('œ')).toBe(338);
    expect(counterpartCharCode('Ⱥ')).toBe(11365);
    expect(counterpartCharCode('ⱥ')).toBe(570);
  });

  test('no counterpart', () => {
    expect(counterpartCharCode('5')).toBe(53);
    expect(counterpartCharCode('$')).toBe(36);
  });
});
