const pascalsTriangle = row =>
  Array.from({ length: row })
    .reduce(
      (result, _, col) =>
        result.concat((result[col] * (row - col)) / (col + 1)),
      [1],
    )
    .join(' ');

export default pascalsTriangle;
