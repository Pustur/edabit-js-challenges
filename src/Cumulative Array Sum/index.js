const cumulativeSum = arr => {
  let sum = 0;
  return arr.map(num => {
    sum += num;
    return sum;
  });
};

export default cumulativeSum;
