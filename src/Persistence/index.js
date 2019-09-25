const getDigits = num => Array.from(String(num), Number);

const product = arr => arr.reduce((total, num) => total * num, 1);

const persistence = (num, steps = 0) =>
  num <= 9 ? steps : persistence(product(getDigits(num)), steps + 1);

export default persistence;
