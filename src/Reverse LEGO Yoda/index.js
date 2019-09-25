const capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1);

const uncapitalize = str => str.slice(0, 1).toLowerCase() + str.slice(1);

const reverseLegoYoda = str =>
  `${str
    .split(/\.\s*/)
    .filter(Boolean)
    .map(subStr => {
      const [first, second] = subStr.split(/,\s*/);
      return `${capitalize(second)} ${uncapitalize(first)}`;
    })
    .join('. ')}.`;

export default reverseLegoYoda;
