const deepCount = arr =>
  arr.reduce(
    (total, inner) => total + 1 + (Array.isArray(inner) ? deepCount(inner) : 0),
    0,
  );

export default deepCount;
