const sum = arr => arr.reduce((total, num) => total + num, 0);

const getColumn = (arr, x) => arr.map(row => row[x]);

const isMagicSquare = arr => {
  const rowSums = arr.map(sum);
  const colSums = arr.map((_, y) => sum(getColumn(arr, y)));
  const diagSums = arr.reduce(
    ([diag1, diag2], row, y) => [
      diag1 + row[y],
      diag2 + row[arr.length - 1 - y],
    ],
    [0, 0],
  );
  const allSums = rowSums.concat(colSums).concat(diagSums);

  return new Set(allSums).size === 1;
};

export default isMagicSquare;
