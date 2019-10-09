const sum = arr => arr.reduce((total, num) => total + num, 0);

const product = arr => arr.reduce((total, num) => total * num, 1);

const mean = arr => sum(arr) / arr.length;

const withPrecision = (num, prec) =>
  typeof prec === 'number' ? Number(num.toFixed(prec)) : num;

Math.avg = (arr, prec) => withPrecision(mean(arr), prec);

Math.qAvg = (arr, prec) =>
  withPrecision(Math.sqrt(mean(arr.map(num => num ** 2))), prec);

Math.hAvg = (arr, prec) =>
  withPrecision(1 / mean(arr.map(num => 1 / num)), prec);

Math.gAvg = (arr, prec) =>
  withPrecision(Math.nthRt(product(arr), arr.length), prec);

Math.nthRt = (num, root, prec) =>
  withPrecision(Math.exp((1 / root) * Math.log(num)), prec);

export default Math;
