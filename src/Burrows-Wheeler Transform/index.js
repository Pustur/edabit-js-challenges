const rotateString = (str, steps, dir) => {
  const rotations = (dir ? -1 : 1) * (steps % str.length);
  return str.slice(rotations) + str.slice(0, rotations);
};

const bwTransform = str =>
  Array.from({ length: str.length }, (_, i) => rotateString(str, i))
    .sort()
    .map(s => s.slice(-1))
    .join('');

export default bwTransform;
