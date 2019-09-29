import sumDigProd from './index';

test('Product of Digits of Sum', t => {
  t.is(sumDigProd(8, 16, 89, 3), 6);
  t.is(sumDigProd(16, 28), 6);
  t.is(sumDigProd(9), 9);
  t.is(sumDigProd(26, 497, 62, 841), 6);
  t.is(sumDigProd(0), 0);
  t.is(sumDigProd(17737, 98723, 2), 6);
  t.is(sumDigProd(123, -99), 8);
  t.is(sumDigProd(9, 8), 7);
  t.is(sumDigProd(167, 167, 167, 167, 167, 3), 8);
  t.is(sumDigProd(111111111), 1);
  t.is(sumDigProd(98526, 54, 863, 156489, 45, 6156), 2);
  t.is(sumDigProd(999, 999), 8);
  t.is(sumDigProd(1, 2, 3, 4, 5, 6), 2);
  t.is(sumDigProd(999, 2222), 2);
  t.is(sumDigProd(8618, -2), 6);
});
