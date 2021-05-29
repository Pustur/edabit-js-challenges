const sub = (matrixA, matrixB) =>
  matrixA.map((row, y) => row.map((num, x) => num - matrixB[y][x]));

export default sub;
