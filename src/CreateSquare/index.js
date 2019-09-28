const createSquare = num => {
  const size = Math.max(num, 0);
  const topBottom = '#'.repeat(size);

  if (size < 2) return topBottom;

  const str = `#${' '.repeat(size - 2)}#`;
  const middle = Array.from({ length: size - 2 }, () => str);

  return [topBottom, ...middle, topBottom].join('\n');
};

export default createSquare;
