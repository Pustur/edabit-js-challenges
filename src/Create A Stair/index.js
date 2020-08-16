const stair = steps => {
  if (!steps) return '___';
  return Array.from(
    { length: steps + 1 },
    (_, i) => `${' '.repeat((steps - i) * 2)}_${i ? '|' : ''}`,
  ).join('\n');
};

export default stair;
