const PAIRS = { 6: 9, 9: 6 };

const reverse = str => Array.from(str).reverse().join('');

const sameUpsidedown = str =>
  str === reverse(str.replace(/[69]/g, num => PAIRS[num]));

export default sameUpsidedown;
