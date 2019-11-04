const quadSequence = arr => {
  const [x, y, z] = arr.slice(-3);
  const secondDiff = z - 2 * y + x;
  let lastDiff = z - y;
  let lastNum = z;

  return arr.map(() => {
    lastDiff += secondDiff;
    lastNum += lastDiff;
    return lastNum;
  });
};

export default quadSequence;
