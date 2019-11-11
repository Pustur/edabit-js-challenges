const everySome = (test, type, ...values) =>
  // eslint-disable-next-line no-eval
  values[type.slice(0, -4)](value => eval(value + test));

export default everySome;
