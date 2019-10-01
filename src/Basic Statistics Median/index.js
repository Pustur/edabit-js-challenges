const sum = arr => arr.reduce((total, num) => total + num, 0);

const mean = arr => sum(arr) / arr.length;

const median = arr =>
  mean([
    arr[Math.ceil((arr.length - 1) / 2)],
    arr[Math.floor((arr.length - 1) / 2)],
  ]);

export default median;
