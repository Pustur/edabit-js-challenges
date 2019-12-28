const sumOfMissingNums = arr => {
  const nums = arr
    .map(Number)
    .filter(Boolean)
    .sort((a, b) => a - b);

  return nums
    .slice(1)
    .reduce((total, curr, i) => total + (curr - nums[i] - 1), 0);
};

export default sumOfMissingNums;
