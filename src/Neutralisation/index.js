const neutralise = (str1, str2) =>
  str1.replace(/./g, (char, i) => (char === str2[i] ? char : 0));

export default neutralise;
