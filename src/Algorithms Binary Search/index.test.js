import isPrime from './index';

const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

test('isPrime', () => {
  expect(isPrime(primes, 3)).toBe('yes');
  expect(isPrime(primes, 4)).toBe('no');
  expect(isPrime(primes, 36)).toBe('no');
  expect(isPrime(primes, 67)).toBe('yes');
});
