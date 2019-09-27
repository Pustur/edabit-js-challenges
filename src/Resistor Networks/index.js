const sum = arr => arr.reduce((total, num) => total + num, 0);

const series = resistors => sum(resistors);

const parallel = resistors => 1 / sum(resistors.map(num => 1 / num));

const resist = str => {
  const regex = /([([])([^([]*?)[)\]]/g;

  if (!regex.test(str)) return Number(Number(str).toFixed(1));
  return resist(
    str.replace(regex, (_, parenthesis, nums) => {
      const resistors = nums.split(/,\s*/).map(Number);
      return parenthesis === '(' ? series(resistors) : parallel(resistors);
    }),
  );
};

export default resist;
