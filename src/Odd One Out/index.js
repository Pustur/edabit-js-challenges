const oddOneOut = arr =>
  arr
    .map(({ length }) => length)
    .filter(
      (num, _, lengths) => lengths.indexOf(num) === lengths.lastIndexOf(num),
    ).length === 1;

export default oddOneOut;
