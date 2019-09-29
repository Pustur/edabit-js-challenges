import sumDigProd from './index';

test('sumDigProd', () => {
  expect(sumDigProd(9)).toBe(9);
  expect(sumDigProd(0)).toBe(0);
  expect(sumDigProd(9, 8)).toBe(7);
  expect(sumDigProd(16, 28)).toBe(6);
  expect(sumDigProd(8618, -2)).toBe(6);
  expect(sumDigProd(999, 999)).toBe(8);
  expect(sumDigProd(123, -99)).toBe(8);
  expect(sumDigProd(111111111)).toBe(1);
  expect(sumDigProd(999, 2222)).toBe(2);
  expect(sumDigProd(8, 16, 89, 3)).toBe(6);
  expect(sumDigProd(17737, 98723, 2)).toBe(6);
  expect(sumDigProd(26, 497, 62, 841)).toBe(6);
  expect(sumDigProd(1, 2, 3, 4, 5, 6)).toBe(2);
  expect(sumDigProd(167, 167, 167, 167, 167, 3)).toBe(8);
  expect(sumDigProd(98526, 54, 863, 156489, 45, 6156)).toBe(2);
});
