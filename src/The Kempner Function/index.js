const factorial = num => (num < 2 ? 1 : num * factorial(num - 1));

const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const kempner = (num, i = 1) => {
  if (isPrime(num)) return num;
  return factorial(i) % num ? kempner(num, i + 1) : i;
};

export default kempner;
