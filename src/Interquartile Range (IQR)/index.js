const sum = arr => arr.reduce((total, num) => total + num, 0);

const mean = arr => sum(arr) / arr.length;

const median = arr =>
  mean([
    arr[Math.ceil((arr.length - 1) / 2)],
    arr[Math.floor((arr.length - 1) / 2)],
  ]);

const iqr = arr => {
  arr.sort((a, b) => a - b);

  const lower = arr.slice(0, arr.length / 2);
  const upper = arr.slice(Math.ceil(arr.length / 2));

  return median(upper) - median(lower);
};

export default iqr;
