const sum = arr => arr.reduce((total, num) => total + num, 0);

const product = arr => arr.reduce((total, num) => total * num, 1);

const getDigits = num => Array.from(String(num), Number);

const reduceToSingleDigit = num =>
  num <= 9 ? num : reduceToSingleDigit(product(getDigits(num)));

const sumDigProd = (...nums) => reduceToSingleDigit(sum(nums));

export default sumDigProd;
