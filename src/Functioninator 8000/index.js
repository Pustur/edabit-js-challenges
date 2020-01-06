const inatorInator = str => {
  const hypen = /[aeiou]/i.test(str.slice(-1)) ? '-' : '';
  return `${str}${hypen}inator ${str.length}000`;
};

export default inatorInator;
