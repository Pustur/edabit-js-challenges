import blahBlah from './index';

test('blahBlah', () => {
  expect(blahBlah('one two three four five', 2)).toBe(
    'one two three blah blah...',
  );
  expect(blahBlah('Sphinx of black quartz judge my vow', 10)).toBe(
    'blah blah blah blah blah blah blah...',
  );
  expect(
    blahBlah(
      'A function is a block of code which only runs when it is called',
      5,
    ),
  ).toBe(
    'A function is a block of code which only blah blah blah blah blah...',
  );
  expect(
    blahBlah(
      'The quadratic formula is negative b plus or minus the square root of b squared subtract four ac all over two a',
      5,
    ),
  ).toBe(
    'The quadratic formula is negative b plus or minus the square root of b squared subtract four blah blah blah blah blah...',
  );
});
