const sumEveryNth = (arr, nth) =>
  arr.reduce((total, num, i) => ((i + 1) % nth ? total : total + num), 0);

export default sumEveryNth;
