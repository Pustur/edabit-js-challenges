const mayanNumbers = {
  0: '@',
  1: 'o',
  2: 'oo',
  3: 'ooo',
  4: 'oooo',
  5: '—',
  6: 'o—',
  7: 'oo—',
  8: 'ooo—',
  9: 'oooo—',
  a: '——',
  b: 'o——',
  c: 'oo——',
  d: 'ooo——',
  e: 'oooo——',
  f: '———',
  g: 'o———',
  h: 'oo———',
  i: 'ooo———',
  j: 'oooo———',
};

const mayaNumber = num =>
  Array.from(num.toString(20), char => mayanNumbers[char]);

export default mayaNumber;
