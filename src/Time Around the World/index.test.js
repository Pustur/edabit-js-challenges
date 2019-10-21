import timeDifference from './index';

test('timeDifference', () => {
  expect(timeDifference('London', 'July 31, 1983 23:01', 'Rome')).toBe(
    '1983-8-1 00:01',
  );
  expect(timeDifference('Tehran', 'June 3, 1977 11:18', 'Moscow')).toBe(
    '1977-6-3 10:48',
  );
  expect(timeDifference('Canberra', 'March 1, 2009 18:32', 'Caracas')).toBe(
    '2009-3-1 04:02',
  );
  expect(timeDifference('New York', 'February 21, 2016 17:56', 'Rome')).toBe(
    '2016-2-21 23:56',
  );
  expect(timeDifference('Caracas', 'January 21, 1990 12:44', 'London')).toBe(
    '1990-1-21 17:14',
  );
  expect(timeDifference('Rome', 'December 21, 1987 15:11', 'New Delhi')).toBe(
    '1987-12-21 19:41',
  );
  expect(timeDifference('New York', 'December 31, 1970 13:40', 'Beijing')).toBe(
    '1971-1-1 02:40',
  );
  expect(timeDifference('Los Angeles', 'April 1, 2011 23:23', 'Canberra')).toBe(
    '2011-4-2 17:23',
  );
  expect(timeDifference('Moscow', 'September 14, 1953 19:54', 'New York')).toBe(
    '1953-9-14 11:54',
  );
  expect(
    timeDifference('London', 'August 20, 1985 12:23', 'Buenos Aires'),
  ).toBe('1985-8-20 09:23');
  expect(
    timeDifference('Beijing', 'November 18, 1999 02:03', 'New Delhi'),
  ).toBe('1999-11-17 23:33');
});
