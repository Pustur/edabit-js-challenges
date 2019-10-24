const depth = arr =>
  arr.reduce((max, item) => {
    const currDepth = Array.isArray(item) ? depth(item) + 1 : 1;
    return Math.max(currDepth, max);
  }, 1);

export default depth;
