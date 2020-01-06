import inatorInator from './index';

test('inatorInator', () => {
  expect(inatorInator('a')).toBe('a-inator 1000');
  expect(inatorInator('bEE')).toBe('bEE-inator 3000');
  expect(inatorInator('Doom')).toBe('Doominator 4000');
  expect(inatorInator('Shrek')).toBe('Shrekinator 5000');
  expect(inatorInator('Shrink')).toBe('Shrinkinator 6000');
  expect(inatorInator('Destroy')).toBe('Destroyinator 7000');
  expect(inatorInator('EvilClone')).toBe('EvilClone-inator 9000');
  expect(inatorInator('CAPITALISE')).toBe('CAPITALISE-inator 10000');
});
