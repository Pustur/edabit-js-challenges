const mapping = letters =>
  Object.fromEntries(letters.map(letter => [letter, letter.toUpperCase()]));

export default mapping;
