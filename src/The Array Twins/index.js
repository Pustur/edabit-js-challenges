const sum = arr => arr.reduce((total, num) => total + num, 0);

const twins = arr =>
  arr.findIndex((_, i) => sum(arr.slice(0, i)) === sum(arr.slice(i)));

export default twins;
