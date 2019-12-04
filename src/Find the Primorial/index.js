const product = arr => arr.reduce((total, num) => total * num, 1);

const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const primorial = num => {
  const primes = [];

  for (let i = 2; primes.length < num; i += 1) {
    if (isPrime(i)) primes.push(i);
  }

  return product(primes);
};

export default primorial;
