const farey = num => {
  const sequence = [];
  const values = new Set();

  for (let denominator = 2; denominator <= num; denominator += 1) {
    for (let nominator = 1; nominator < denominator; nominator += 1) {
      const value = nominator / denominator;

      if (!values.has(value)) {
        sequence.push(`${nominator}/${denominator}`);
        values.add(value);
      }
    }
  }

  // eslint-disable-next-line no-eval
  return ['0/1', ...sequence.sort((a, b) => eval(a) - eval(b)), '1/1'];
};

export default farey;
