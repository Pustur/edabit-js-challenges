const sum = arr => arr.reduce((total, num) => total + num, 0);

const strangerStrings = str => [
  sum((str.match(/\d/g) || []).map(Number)),
  (str.match(/[^\d\s]/gu) || []).sort((a, b) => b.localeCompare(a)).join(''),
];

export default strangerStrings;
