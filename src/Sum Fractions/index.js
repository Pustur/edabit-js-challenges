const sumFractions = arr =>
  Math.round(
    arr.reduce(
      (total, [numerator, denominator]) => total + numerator / denominator,
      0,
    ),
  );

export default sumFractions;
