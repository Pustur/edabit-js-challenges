const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const simplifyFrac = fraction => {
  const [numerator, denominator] = fraction.split('/');
  const greatestCommonDivisor = gcd(numerator, denominator);
  const newNumerator = numerator / greatestCommonDivisor;
  const newDenominator = denominator / greatestCommonDivisor;

  return `${newNumerator}/${newDenominator}`;
};

export default simplifyFrac;
