import firstTuesdayOfTheMonth from './index';

test('firstTuesdayOfTheMonth', () => {
  expect(firstTuesdayOfTheMonth(1997, 1)).toBe('1997-01-07');
  expect(firstTuesdayOfTheMonth(2021, 2)).toBe('2021-02-02');
  expect(firstTuesdayOfTheMonth(2020, 3)).toBe('2020-03-03');
  expect(firstTuesdayOfTheMonth(1998, 4)).toBe('1998-04-07');
  expect(firstTuesdayOfTheMonth(1992, 5)).toBe('1992-05-05');
  expect(firstTuesdayOfTheMonth(2009, 6)).toBe('2009-06-02');
  expect(firstTuesdayOfTheMonth(1987, 7)).toBe('1987-07-07');
  expect(firstTuesdayOfTheMonth(2026, 8)).toBe('2026-08-04');
  expect(firstTuesdayOfTheMonth(2020, 9)).toBe('2020-09-01');
  expect(firstTuesdayOfTheMonth(2009, 10)).toBe('2009-10-06');
  expect(firstTuesdayOfTheMonth(1998, 11)).toBe('1998-11-03');
  expect(firstTuesdayOfTheMonth(1981, 12)).toBe('1981-12-01');
});
