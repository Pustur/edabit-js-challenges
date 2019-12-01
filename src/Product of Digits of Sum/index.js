const sum = arr => arr.reduce((total, num) => total + num, 0);

const product = arr => arr.reduce((total, num) => total * num, 1);

const getDigits = num => Array.from(String(num), Number);

const multiplicativeDigitalRoot = num =>
  num <= 9 ? num : multiplicativeDigitalRoot(product(getDigits(num)));

const sumDigProd = (...nums) => multiplicativeDigitalRoot(sum(nums));

export default sumDigProd;
