const nearestElement = (target, arr) => {
  const diffs = arr.map(num => Math.abs(target - num));
  const min = Math.min(...diffs);
  const result = Math.max(...arr.filter((_, i) => diffs[i] === min));

  return arr.indexOf(result);
};

export default nearestElement;
