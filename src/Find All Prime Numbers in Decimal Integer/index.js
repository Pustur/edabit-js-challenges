const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const extractPrimes = num => {
  const primes = [];
  const str = String(num);

  for (let digits = 1; digits <= str.length; digits += 1) {
    for (let i = 0; i < str.length - (digits - 1); i += 1) {
      const slice = str.slice(i, i + digits);

      if (!slice.startsWith(0)) {
        const n = Number(slice);
        if (isPrime(n)) primes.push(n);
      }
    }
  }

  return primes.sort((a, b) => a - b);
};

export default extractPrimes;
