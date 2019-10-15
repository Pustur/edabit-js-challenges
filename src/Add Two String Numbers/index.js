const sum = arr => arr.reduce((total, num) => total + num, BigInt(0));

const addStrNums = (...strings) => {
  if (strings.some(str => /\D/.test(str))) return '-1';
  return String(sum(strings.map(BigInt)));
};

export default addStrNums;
