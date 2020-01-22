const transposeMatrix = arr =>
  Array.from(arr[0], (_, y) => arr.map(row => row[y]));

const binaryClock = time => {
  const bits = [2, 4, 3, 4, 3, 4];
  const maxBit = Math.max(...bits);
  const digits = time.match(/\d/g);
  const binaryStrings = digits.map((digit, i) => {
    const bin = Number(digit).toString(2);
    return bin.padStart(bits[i], '0').padStart(maxBit, ' ');
  });

  return transposeMatrix(binaryStrings).map(arr => arr.join(''));
};

export default binaryClock;
