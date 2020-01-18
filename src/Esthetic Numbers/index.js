const esthetic = num => {
  const bases = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const estheticBases = bases.filter(base => {
    const digits = Array.from(num.toString(base));

    return digits
      .slice(1)
      .every((digit, i) => Math.abs(digit - digits[i]) === 1);
  });

  return estheticBases.length ? estheticBases : 'Anti-Esthetic';
};

export default esthetic;
