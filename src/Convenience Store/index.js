const conversionValues = [0.25, 0.1, 0.05, 0.01];

const sum = arr => arr.reduce((total, num) => total + num, 0);

const changeEnough = (change, price) =>
  sum(change.map((amount, i) => conversionValues[i] * amount)) >= price;

export default changeEnough;
