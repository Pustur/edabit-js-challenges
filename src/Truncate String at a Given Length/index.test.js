import truncate from './index';

test('truncate', () => {
  expect(truncate('', 30)).toBe('');
  expect(truncate('Lorem ipsum', 4)).toBe('');
  expect(truncate('Lorem ipsum', 0)).toBe('');
  expect(truncate('Lorem ipsum dolor sit amet.', 11)).toBe('Lorem ipsum');
  expect(truncate('Lorem ipsum', 20)).toBe(
    'Lorem ipsum',
    'If length is greater than the strings length.',
  );
  expect(truncate('Lorem ipsum dolor sit amet.', 16)).toBe(
    'Lorem ipsum',
    'You have to discard the last word.',
  );
});
