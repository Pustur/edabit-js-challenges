const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const isNarcissistic = num =>
  num === sum(getDigits(num).map((digit, _, arr) => digit ** arr.length));

export default isNarcissistic;
