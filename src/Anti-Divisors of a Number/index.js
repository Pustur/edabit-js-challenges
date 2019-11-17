const isAntiDivisor = (i, num) => {
  const isDivisor = num % i === 0;
  const isEven = i % 2 === 0;
  const oddCheck = [num * 2 - 1, num * 2 + 1].some(n => n % i === 0);
  const evenCheck = (num * 2) % i === 0;

  return !isDivisor && ((!isEven && oddCheck) || (isEven && evenCheck));
};

const antiDivisors = num => {
  const result = [];

  for (let i = 2; i < num; i += 1) {
    if (isAntiDivisor(i, num)) result.push(i);
  }

  return result;
};

export default antiDivisors;
