const getDigits = num => Array.from(String(num), Number);

const sum = arr => arr.reduce((total, num) => total + num, 0);

const isDisarium = num =>
  num === sum(getDigits(num).map((digit, i) => digit ** (i + 1)));

export default isDisarium;
