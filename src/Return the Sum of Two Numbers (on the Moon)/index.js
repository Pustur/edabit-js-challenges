const lunarSum = (...nums) => {
  const [short, long] = nums.map(String).sort((a, b) => a.length - b.length);
  return Number(
    Array.from(short.padStart(long.length, '0'), (digit, i) =>
      Math.max(digit, long[i]),
    ).join(''),
  );
};

export default lunarSum;
