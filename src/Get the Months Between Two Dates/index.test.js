import monthsInterval from './index';

test('monthsInterval', () => {
  expect(monthsInterval(new Date(2017, 0, 1), new Date(2017, 0, 1))).toEqual([
    'January',
  ]);
  expect(monthsInterval(new Date(2017, 11, 1), new Date(2018, 0, 1))).toEqual([
    'January',
    'December',
  ]);
  expect(monthsInterval(new Date(2018, 0, 1), new Date(2017, 11, 1))).toEqual([
    'January',
    'December',
  ]);
  expect(monthsInterval(new Date(2017, 3, 1), new Date(2017, 7, 1))).toEqual([
    'April',
    'May',
    'June',
    'July',
    'August',
  ]);
  expect(monthsInterval(new Date(2017, 7, 1), new Date(2017, 3, 1))).toEqual([
    'April',
    'May',
    'June',
    'July',
    'August',
  ]);
  expect(monthsInterval(new Date(2016, 0, 1), new Date(2017, 0, 1))).toEqual([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
  expect(monthsInterval(new Date(2017, 0, 1), new Date(2016, 0, 1))).toEqual([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
  expect(monthsInterval(new Date(2017, 3, 1), new Date(2019, 3, 1))).toEqual([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
  expect(monthsInterval(new Date(2019, 3, 1), new Date(2017, 3, 1))).toEqual([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
  expect(monthsInterval(new Date(2017, 3, 1), new Date(2043, 9, 1))).toEqual([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
  expect(monthsInterval(new Date(2043, 9, 1), new Date(2017, 3, 1))).toEqual([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]);
});
