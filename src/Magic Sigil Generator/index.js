const sigilize = str =>
  Array.from(new Set(Array.from(str.toUpperCase()).reverse()))
    .reverse()
    .join('')
    .replace(/[aeiou\W]+/gi, '');

export default sigilize;
