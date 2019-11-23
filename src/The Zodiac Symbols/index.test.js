import zodiacSymbol from './index';

test('zodiacSymbol', () => {
  expect(zodiacSymbol('January 19, 1985')).toBe('♑');
  expect(zodiacSymbol('February 3, 1943')).toBe('♒');
  expect(zodiacSymbol('March 20, 1970')).toBe('♓');
  expect(zodiacSymbol('April 18, 1929')).toBe('♈');
  expect(zodiacSymbol('May 9, 1951')).toBe('♉');
  expect(zodiacSymbol('May 29, 1988')).toBe('♊');
  expect(zodiacSymbol('June 30, 1998')).toBe('♋');
  expect(zodiacSymbol('July 23, 1983')).toBe('♌');
  expect(zodiacSymbol('August 28, 1990')).toBe('♍');
  expect(zodiacSymbol('September 24, 1985')).toBe('♎');
  expect(zodiacSymbol('October 31, 1977')).toBe('♏');
  expect(zodiacSymbol('November 26, 2000')).toBe('♐');
});
