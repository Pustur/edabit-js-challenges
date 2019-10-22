const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const sexyTriplets = (low, high) => {
  const range = Array.from({ length: high - low + 1 }, (_, i) => i + low);
  const basePrimes = range
    .filter(isPrime)
    .filter(
      (num, _, arr) =>
        arr.includes(num + 6) && arr.includes(num + 12) && !isPrime(num + 18),
    );

  return basePrimes.map(num => [num, num + 6, num + 12]);
};

export default sexyTriplets;
