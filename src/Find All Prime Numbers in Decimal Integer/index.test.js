import extractPrimes from './index';

test('Find All Prime Numbers in Decimal Integer', () => {
  expect(extractPrimes(1)).toEqual([]);
  expect(extractPrimes(2)).toEqual([2]);
  expect(extractPrimes(3)).toEqual([3]);
  expect(extractPrimes(13)).toEqual([3, 13]);
  expect(extractPrimes(101)).toEqual([101]);
  expect(extractPrimes(313)).toEqual([3, 3, 13, 31, 313]);
  expect(extractPrimes(10234)).toEqual([2, 3, 23]);
});
