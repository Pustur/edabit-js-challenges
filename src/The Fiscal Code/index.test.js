import test from 'ava';
import fiscalCode from './index';

test('The Fiscal Code', t => {
  t.is(
    fiscalCode({ name: 'Helen', surname: 'Yu', gender: 'F', dob: '1/12/1950' }),
    'YUXHLN50T41',
  );
  t.is(
    fiscalCode({
      name: 'Brendan',
      surname: 'Eich',
      gender: 'M',
      dob: '1/12/1961',
    }),
    'CHEBND61T01',
  );
  t.is(
    fiscalCode({
      name: 'Al',
      surname: 'Capone',
      gender: 'M',
      dob: '17/1/1899',
    }),
    'CPNLAX99A17',
  );
  t.is(
    fiscalCode({
      name: 'Mickey',
      surname: 'Mouse',
      gender: 'M',
      dob: '16/1/1928',
    }),
    'MSOMKY28A16',
  );
  t.is(
    fiscalCode({
      name: 'Marie',
      surname: 'Curie',
      gender: 'F',
      dob: '7/11/1867',
    }),
    'CRUMRA67S47',
  );
});
