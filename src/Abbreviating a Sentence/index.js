const abbreviate = (sentence, n = 4) =>
  sentence
    .split(/\s+/)
    .filter(word => word.length >= n)
    .map(([firstChar]) => firstChar)
    .join('')
    .toUpperCase();

export default abbreviate;
