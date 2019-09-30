import countSmileys from './index';

test('countSmileys', () => {
  expect(countSmileys([])).toBe(0);
  expect(countSmileys([':o)', ':--D', ';-~)'])).toBe(0);
  expect(countSmileys([';(', ':>', ':}', ':]'])).toBe(0);
  expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
  expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
  expect(countSmileys([':-)', ';~D', ':-D', ':_D'])).toBe(3);
  expect(countSmileys([';~)', ':)', ':-)', ':--)'])).toBe(3);
  expect(countSmileys([':---)', '))', ';~~D', ';D'])).toBe(1);
  expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2);
  expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  expect(
    countSmileys([
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
      ':)',
    ]),
  ).toBe(13);
});
