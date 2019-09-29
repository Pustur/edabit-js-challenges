import extractPrimes from './index';

test('Find All Prime Numbers in Decimal Integer', t => {
  t.deepEqual(extractPrimes(1), []);
  t.deepEqual(extractPrimes(2), [2]);
  t.deepEqual(extractPrimes(3), [3]);
  t.deepEqual(extractPrimes(13), [3, 13]);
  t.deepEqual(extractPrimes(101), [101]);
  t.deepEqual(extractPrimes(313), [3, 3, 13, 31, 313]);
  t.deepEqual(extractPrimes(10234), [2, 3, 23]);
});
