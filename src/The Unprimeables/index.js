const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const generateCombos = str =>
  Array.from({ length: str.length }).flatMap((_, i) =>
    Array.from({ length: 10 }, (_, digit) => {
      const digits = Array.from(str);
      digits[i] = digit;
      return Number(digits.join(''));
    }),
  );

const isUnprimeable = num => {
  if (isPrime(num)) return 'Prime Input';

  const primes = generateCombos(String(num)).filter(isPrime);

  return primes.length ? primes.sort((a, b) => a - b) : 'Unprimeable';
};

export default isUnprimeable;
