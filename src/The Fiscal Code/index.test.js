import fiscalCode from './index';

test('fiscalCode', () => {
  expect(
    fiscalCode({ name: 'Helen', surname: 'Yu', gender: 'F', dob: '1/12/1950' }),
  ).toBe('YUXHLN50T41');
  expect(
    fiscalCode({
      name: 'Brendan',
      surname: 'Eich',
      gender: 'M',
      dob: '1/12/1961',
    }),
  ).toBe('CHEBND61T01');
  expect(
    fiscalCode({
      name: 'Al',
      surname: 'Capone',
      gender: 'M',
      dob: '17/1/1899',
    }),
  ).toBe('CPNLAX99A17');
  expect(
    fiscalCode({
      name: 'Mickey',
      surname: 'Mouse',
      gender: 'M',
      dob: '16/1/1928',
    }),
  ).toBe('MSOMKY28A16');
  expect(
    fiscalCode({
      name: 'Marie',
      surname: 'Curie',
      gender: 'F',
      dob: '7/11/1867',
    }),
  ).toBe('CRUMRA67S47');
});
