const sum = arr => arr.reduce((total, num) => total + num, 0);

const getFactors = num => {
  const factors = [1];

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      factors.push(i);
      if (num / i !== i) factors.push(num / i);
    }
  }

  return factors;
};

const isUntouchable = num => {
  if (num < 2) return 'Invalid Input';

  const arr = [];

  for (let i = 2; i <= num ** 2; i += 1) {
    if (sum(getFactors(i)) === num) arr.push(i);
  }

  return arr.length ? arr : true;
};

export default isUntouchable;
