const holes = [1, 0, 0, 0, 1, 0, 1, 0, 2, 1];

const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const sumOfHoles = num =>
  Array.from({ length: num - 3 }, (_, i) => i + 4).reduce(
    (total, n) => total + sum(getDigits(n).map(digit => holes[digit])),
    0,
  );

export default sumOfHoles;
