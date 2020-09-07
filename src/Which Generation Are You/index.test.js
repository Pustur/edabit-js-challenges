import generation from './index';

test('generation', () => {
  expect(generation(-3, 'f')).toBe('great grandmother');
  expect(generation(-3, 'm')).toBe('great grandfather');
  expect(generation(-2, 'f')).toBe('grandmother');
  expect(generation(-2, 'm')).toBe('grandfather');
  expect(generation(-1, 'f')).toBe('mother');
  expect(generation(-1, 'm')).toBe('father');
  expect(generation(0, 'f')).toBe('me!');
  expect(generation(0, 'm')).toBe('me!');
  expect(generation(1, 'f')).toBe('daughter');
  expect(generation(1, 'm')).toBe('son');
  expect(generation(2, 'f')).toBe('granddaughter');
  expect(generation(2, 'm')).toBe('grandson');
  expect(generation(3, 'f')).toBe('great granddaughter');
  expect(generation(3, 'm')).toBe('great grandson');
});
