const cleave = (str, words) => {
  const separator = '_';
  const indicesStr = words
    .sort((a, b) => b.length - a.length)
    .reduce(
      (result, word, i) =>
        result.replace(new RegExp(word, 'g'), `${i}${separator}`),
      str,
    );

  return /[a-z]/i.test(indicesStr)
    ? 'Cleaving stalled: Word not found'
    : indicesStr
        .slice(0, -1)
        .split(separator)
        .map(i => words[i])
        .join(' ');
};

export default cleave;
