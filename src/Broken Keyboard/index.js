const findBrokenKeys = (expected, actual) => [
  ...new Set(expected.split('').filter((char, i) => char !== actual[i])),
];

export default findBrokenKeys;
