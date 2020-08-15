const getDiagonals = arr =>
  arr.reduce(
    ([diag1, diag2], row, y) => [
      diag1.concat(row[y]),
      diag2.concat(row[arr.length - 1 - y]),
    ],
    [[], []],
  );

const ticTacToe = arr => {
  const rows = arr.map(row => row.join(''));
  const cols = arr[0].map((_, y) => arr.map(row => row[y]).join(''));
  const diagonals = getDiagonals(arr);
  const winner = [...rows, ...cols, ...diagonals].find(
    str => new Set(str).size === 1,
  );

  return (winner || ['Draw'])[0];
};

export default ticTacToe;
