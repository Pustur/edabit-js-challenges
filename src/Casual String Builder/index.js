const stringBuilder = str => {
  const regex = /(\d+)\[(\w+)\]/gi;
  const replaced = str.replace(regex, (_, g1, g2) => g2.repeat(g1));

  return regex.test(replaced) ? stringBuilder(replaced) : replaced;
};

export default stringBuilder;
