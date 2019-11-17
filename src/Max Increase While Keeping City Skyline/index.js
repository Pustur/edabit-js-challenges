const transposeMatrix = arr => arr[0].map((_, y) => arr.map(row => row[y]));

const keepSkyline = grid => {
  const maxInColumns = transposeMatrix(grid).map(col => Math.max(...col));

  return grid.map(row => {
    const maxInRow = Math.max(...row);
    return row.map((height, x) =>
      height === 0 ? 0 : Math.min(maxInRow, maxInColumns[x]),
    );
  });
};

export default keepSkyline;
