import oddOneOut from './index';

test('oddOneOut', () => {
  expect(oddOneOut(['the', 'them', 'theme'])).toBe(false);
  expect(oddOneOut(['very', 'to', 'an', 'some'])).toBe(false);
  expect(oddOneOut(['swanky', 'rhino', 'moment'])).toBe(true);
  expect(oddOneOut(['silly', 'mom', 'let', 'the'])).toBe(true);
  expect(oddOneOut(['very', 'to', 'then', 'some'])).toBe(true);
});
