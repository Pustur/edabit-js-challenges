const padMatrix = matrix => {
  const topBottom = Array.from({ length: matrix[0].length + 2 }).fill(0);
  return [topBottom, ...matrix.map(row => [0, ...row, 0]), topBottom];
};

export default padMatrix;
