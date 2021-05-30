const memeSum = (...nums) => {
  const [min, max] = nums.sort((a, b) => a - b);
  const maxStr = String(max);
  const minStr = String(min).padStart(maxStr.length, 0);

  return Number(
    Array.from(minStr)
      .map((digit, i) => Number(digit) + Number(maxStr[i]))
      .join(''),
  );
};

export default memeSum;
