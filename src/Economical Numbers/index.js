const frequencyMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

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

const isEconomical = num => {
  const numLength = String(num).length;
  const freqMap = frequencyMap(getPrimeFactors(num));
  const primeFactorizationDigits = Array.from(freqMap)
    .flat()
    .filter(n => n !== 1)
    .join('').length;

  if (primeFactorizationDigits < numLength) return 'Frugal';
  return primeFactorizationDigits === numLength ? 'Equidigital' : 'Wasteful';
};

export default isEconomical;
