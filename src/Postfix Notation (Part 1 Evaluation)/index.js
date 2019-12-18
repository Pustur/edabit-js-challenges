const postfix = str => {
  const regex = /(-?\d+) (-?\d+) ([-+*/])(?!\d)/;
  if (!regex.test(str)) return Number(str);
  return postfix(
    str.replace(regex, (_, num1, num2, operator) =>
      // eslint-disable-next-line no-eval
      eval(`${num1}${operator}${num2}`),
    ),
  );
};

export default postfix;
