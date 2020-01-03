const getDigits = num => Array.from(String(num), Number);

const rearrangedDifference = num => {
  const sortedDigits = getDigits(num).sort((a, b) => a - b);
  const min = sortedDigits.join('');
  const max = sortedDigits.reverse().join('');

  return max - min;
};

export default rearrangedDifference;
