const sum = arr => arr.reduce((total, num) => total + num, 0);

const getFactors = num =>
  Array.from({ length: num - 1 }, (_, i) => i + 1).filter(i => num % i === 0);

const admirable = num => {
  const factors = getFactors(num);
  const factorsSum = sum(factors);

  return num === factorsSum
    ? 'Perfect'
    : factors.find(factor => num === factorsSum - factor * 2) || 'Neither';
};

export default admirable;
