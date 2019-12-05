const KAPREKAR_CONSTANT = 6174;

const getDigits = num => Array.from(String(num), Number);

const kaprekar = (num, steps = 0) => {
  if (num === KAPREKAR_CONSTANT) return steps;

  const digits = getDigits(num);
  const small = Number(digits.sort((a, b) => a - b).join(''));
  const big = Number(
    digits
      .sort((a, b) => b - a)
      .join('')
      .padEnd(4, '0'),
  );

  return kaprekar(big - small, steps + 1);
};

export default kaprekar;
