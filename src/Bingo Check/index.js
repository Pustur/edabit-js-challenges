const getDiagonals = arr =>
  arr.reduce(
    ([diag1, diag2], row, y) => [
      diag1.concat(row[y]),
      diag2.concat(row[arr.length - 1 - y]),
    ],
    [[], []],
  );

const bingoCheck = rows => {
  const cols = rows[0].map((_, y) => rows.map(row => row[y]));
  const diagonals = getDiagonals(rows);

  return [...rows, ...cols, ...diagonals].some(arr =>
    arr.every(char => char === 'x'),
  );
};

export default bingoCheck;
