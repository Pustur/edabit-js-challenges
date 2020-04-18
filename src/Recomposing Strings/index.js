const reverse = str => Array.from(str).reverse().join('');

const recompose = str =>
  str
    .match(/[aeiou]+|[^aeiou]+/gi)
    .map(reverse)
    .join('')
    .replace(/(?<=[a-z])(?=[A-Z])/g, ' ');

export default recompose;
