const dropWhile = (arr, predicate) => {
  const index = arr.findIndex((...args) => !predicate(...args));
  if (index === -1) return [];
  return arr.slice(index);
};

export default dropWhile;
