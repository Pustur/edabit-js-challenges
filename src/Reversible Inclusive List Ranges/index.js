const reversibleInclusiveList = (start, end) => {
  const diff = end - start;
  const dir = Math.sign(diff);

  return Array.from({ length: Math.abs(diff) + 1 }, (_, i) => start + i * dir);
};

export default reversibleInclusiveList;
