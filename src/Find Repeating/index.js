const findRepeating = str => {
  const matches = str.match(/(.)\1*/g) || [];
  return matches.map((match, i) => {
    const index = matches.slice(0, i).join('').length;
    return [match[0], index, index + match.length - 1, match.length];
  });
};

export default findRepeating;
