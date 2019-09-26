const rotateString = (str, steps, dir) => {
  const rotations = (dir ? -1 : 1) * (steps % str.length);
  return str.slice(rotations) + str.slice(0, rotations);
};

const bitRotate = (num, steps, dir) =>
  parseInt(rotateString(num.toString(2), steps, dir), 2);

export default bitRotate;
