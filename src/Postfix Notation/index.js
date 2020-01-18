const postfix = str => {
  const regex = /(\d+) (\d+) ([+*/-])/g;

  if (!regex.test(str)) return Number(str);
  return postfix(
    // eslint-disable-next-line no-eval
    str.replace(regex, (_, num1, num2, op) => eval(`${num1}${op}${num2}`)),
  );
};

export default postfix;
