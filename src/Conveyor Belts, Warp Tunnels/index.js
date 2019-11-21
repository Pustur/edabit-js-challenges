const chunk = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

const rotateArray = (arr, steps, dir) => {
  const rotations = (dir ? -1 : 1) * (steps % arr.length);
  return arr.slice(rotations).concat(arr.slice(0, rotations));
};

const warpTunnel = (matrix, num) => {
  const y = matrix.length;
  const x = matrix[0].length;
  const matrixArea = x * y;

  return chunk(rotateArray(matrix.flat(), num % matrixArea, true), x);
};

export default warpTunnel;
