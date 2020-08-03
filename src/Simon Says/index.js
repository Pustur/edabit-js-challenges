const OPERATORS = { add: '+', subtract: '-', multiply: '*' };

const simonSays = arr =>
  arr.reduce((total, str) => {
    if (!str.startsWith('Simon says')) return total;
    const [, operation, num] = str.match(/(\w+)(?: by)? (\d+)/);
    // eslint-disable-next-line no-eval
    return eval(`${total}${OPERATORS[operation]}${num}`);
  }, 0);

export default simonSays;
