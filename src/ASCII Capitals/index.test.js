import averageASCII from './index';

test('averageASCII', () => {
  expect(averageASCII('Boom')).toBe('Boom');
  expect(averageASCII('What you egg')).toBe('WHAT you egg');
  expect(averageASCII('To be or not to be')).toBe('To be or NOT to be');
  expect(averageASCII('Made by Harith Shah')).toBe('Made by HARITH Shah');
  expect(averageASCII('The most addictive way to learn')).toBe(
    'The most ADDICTIVE way to LEARN',
  );
  expect(averageASCII('Edabit helps you learn in bitesize chunks')).toBe(
    'EDABIT HELPS you learn in BITESIZE CHUNKS',
  );
});
