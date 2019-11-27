import kixCode from './index';

test('kixCode', () => {
  expect(kixCode('De Jong, Havendijk 13 hs, 1231 FZ POSTDAM')).toBe(
    '1231FZ13XHS',
  );
  expect(kixCode('B. Bartelds, Boerheem 46, 9421 MC Bovensmilde')).toBe(
    '9421MC46',
  );
  expect(kixCode('PostNL, Postbus 30250, 2500 GG ’s Gravenhage')).toBe(
    '2500GG30250',
  );
  expect(kixCode('Dijk, Antwoordnummer 80430, 2130 VA Hoofddorp')).toBe(
    '2130VA80430',
  );
  expect(kixCode('Liesanne B Wilkens, Kogge 11-1, 1657 KA Abbekerk')).toBe(
    '1657KA11X1',
  );
  expect(kixCode('B.C. Dieker, Korhoenlaan 130b, 3847 LN Harderwijk')).toBe(
    '3847LN130B',
  );
  expect(kixCode('Huisman, Koninginneweg 182 B, 3331 CH Zwijndrecht')).toBe(
    '3331CH182XB',
  );
  expect(kixCode('Jet de Wit, Wielingenstraat 129/7, 3522 PG Utrecht')).toBe(
    '3522PG129X7',
  );
  expect(
    kixCode('Mahir F Schipperen, IJsselmeerlaan 31, 8304 DE Emmeloord'),
  ).toBe('8304DE31');
  expect(
    kixCode('Van Eert, Dirk van Heinsbergstraat 200-A, 5575 BM Luyksgestel'),
  ).toBe('5575BM200XA');
});
