const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const filterPrimes = arr => arr.filter(isPrime);

export default filterPrimes;
