const upwardTrend = arr => {
  if (arr.some(val => typeof val === 'string')) return 'Strings not permitted!';
  return arr.slice(1).every((num, i) => Math.sign(num - arr[i]) === 1);
};

export default upwardTrend;
