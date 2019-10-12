import strongPassword from './index';

test('strongPassword', () => {
  expect(strongPassword('d')).toBe(5);
  expect(strongPassword('[?')).toBe(4);
  expect(strongPassword('bd')).toBe(4);
  expect(strongPassword('sth!')).toBe(2);
  expect(strongPassword('1sth!')).toBe(1);
  expect(strongPassword('#Edabit')).toBe(1);
  expect(strongPassword('willthispass')).toBe(3);
  expect(strongPassword('w1llth!spass?')).toBe(1);
  expect(strongPassword('W1llth!spass?')).toBe(0);
  expect(strongPassword('Cr3ateAStr0ng1')).toBe(1);
  expect(strongPassword('CreateAStrongOne')).toBe(2);
});
