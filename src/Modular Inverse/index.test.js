import modInv from './index';

test('modInv', () => {
  expect(modInv(8, 21)).toBe(8);
  expect(modInv(101, 678)).toBe(47);
  expect(modInv(21, 36)).toBe(false);
  expect(modInv(2791, 9497)).toBe(1749);
  expect(modInv(234, 807652131)).toBe(false);
  expect(modInv(71, 134676521)).toBe(41730753);
});
