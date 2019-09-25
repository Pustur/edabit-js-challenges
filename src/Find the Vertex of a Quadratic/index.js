const findVertex = (a, b, c) => {
  const x = -b / (2 * a);
  const y = a * x ** 2 + b * x + c;

  return [x, y];
};

export default findVertex;
