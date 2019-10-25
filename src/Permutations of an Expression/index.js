const greaterPermutation = (expression, [a, b, c]) => {
  const permutations = [
    [a, b, c],
    [a, c, b],
    [b, a, c],
    [b, c, a],
    [c, a, b],
    [c, b, a],
  ];
  const results = permutations.map(permutation => {
    const replacedExpression = expression.replace(
      /[a-c]/g,
      match => permutation['abc'.indexOf(match)],
    );
    // eslint-disable-next-line no-eval
    const result = Number(eval(replacedExpression).toFixed(2));

    return [replacedExpression, result];
  });

  return results.sort(([, resA], [, resB]) => resB - resA)[0].join(' = ');
};

export default greaterPermutation;
