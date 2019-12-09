const getDigits = num => Array.from(String(num), Number);

const straightDigital = num => {
  if (num < 100) return 'Not Straight';

  const digits = getDigits(num);
  const diffs = digits.slice(1).map((digit, i) => digit - digits[i]);

  if (diffs.every(diff => diff === 0)) return 'Trivial Straight';
  return new Set(diffs).size === 1 ? diffs[0] : 'Not Straight';
};

export default straightDigital;
