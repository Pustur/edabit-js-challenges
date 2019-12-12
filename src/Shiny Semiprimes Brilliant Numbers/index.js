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

const isBrilliant = num => {
  const factors = getPrimeFactors(num);
  return (
    factors.length === 2 &&
    String(factors[0]).length === String(factors[1]).length
  );
};

export default isBrilliant;
