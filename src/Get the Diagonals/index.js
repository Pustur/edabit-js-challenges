const getDiagonals = arr =>
  arr.reduce(
    ([diag1, diag2], row, y) => [
      diag1.concat(row[y]),
      diag2.concat(row[arr.length - 1 - y]),
    ],
    [[], []],
  );

export default getDiagonals;
