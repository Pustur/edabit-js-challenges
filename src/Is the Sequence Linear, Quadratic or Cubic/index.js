const seqLevel = arr => {
  const diffs1 = arr.slice(1).map((num, i) => arr[i] - num);

  if (new Set(diffs1).size === 1) return 'Linear';

  const diffs2 = diffs1.slice(1).map((num, i) => diffs1[i] - num);

  return new Set(diffs2).size === 1 ? 'Quadratic' : 'Cubic';
};

export default seqLevel;
