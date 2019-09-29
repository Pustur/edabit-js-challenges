import isbn13 from './index';

test('isbn13', () => {
  expect(isbn13('031606652X')).toBe('Invalid');
  expect(isbn13('0345453747')).toBe('Invalid');
  expect(isbn13('9783876155237')).toBe('Invalid');
  expect(isbn13('9780316066525')).toBe('Valid');
  expect(isbn13('9783866155237')).toBe('Valid');
  expect(isbn13('9780345453747')).toBe('Valid');
  expect(isbn13('0316066524')).toBe('9780316066525');
  expect(isbn13('3866155239')).toBe('9783866155237');
  expect(isbn13('817450494X')).toBe('9788174504944');
});
