const keys = [
  ['m', 'c'],
  ['u', 'e'],
  ['b', 'g'],
  ['a', 'k'],
  ['s', 'v'],
  ['h', 'x'],
  ['i', 'z'],
  ['r', 'y'],
  ['p', 'w'],
  ['l', 'n'],
  ['o', 'j'],
  ['t', 'f'],
  ['q', 'd'],
];

const mubashirCipher = str => {
  const reversedKeys = keys.map(pair => Array.from(pair).reverse());
  const pairs = Object.fromEntries(keys.concat(reversedKeys));

  return str.replace(/[a-z]/g, match => pairs[match] || match);
};

export default mubashirCipher;
