const boomIntensity = num => {
  if (num < 2) return 'boom';

  const divisibleBy2 = num % 2 === 0;
  const divisibleBy5 = num % 5 === 0;
  const output = `B${'o'.repeat(num)}m${divisibleBy2 ? '!' : ''}`;

  return divisibleBy5 ? output.toUpperCase() : output;
};

export default boomIntensity;
