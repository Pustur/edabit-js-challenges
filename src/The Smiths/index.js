const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const digitalRoot = num => (num <= 9 ? num : digitalRoot(sum(getDigits(num))));

const isPrime = num => {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const getPrimeFactors = num => {
  const factors = [];
  let remainder = num;

  for (let i = 2; i <= remainder; i += 1) {
    while (remainder % i === 0) {
      factors.push(i);
      remainder /= i;
    }
  }

  return factors;
};

const isSmith = num => {
  const root1 = digitalRoot(num);
  const root2 = digitalRoot(sum(getPrimeFactors(num)));

  return !isPrime(num) && root1 === root2;
};

const smithType = num => {
  if (isPrime(num)) return 'Trivial Smith';

  const isNumSmith = isSmith(num);

  if (isNumSmith && isSmith(num + 1)) return 'Youngest Smith';
  if (isNumSmith && isSmith(num - 1)) return 'Oldest Smith';
  if (isNumSmith) return 'Single Smith';
  return 'Not a Smith';
};

export default smithType;
