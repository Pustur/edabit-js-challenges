const rotateString = (str, steps, dir) => {
  const rotations = (dir ? -1 : 1) * (steps % str.length);
  return str.slice(rotations) + str.slice(0, rotations);
};

const shiftLetters = (str, num) => {
  const letters = str.replace(/[^a-z]/gi, '');
  const rotated = Array.from(rotateString(letters, num, true));

  return str.replace(/[a-z]/gi, () => rotated.shift());
};

export default shiftLetters;
