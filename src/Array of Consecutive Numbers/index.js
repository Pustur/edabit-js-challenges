const getSequence = (low, high) =>
  Array.from({ length: high - low + 1 }, (_, i) => low + i);

export default getSequence;
