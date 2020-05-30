const xPronounce = str =>
  str.replace(/\bx\b/g, 'ecks').replace(/\bx/g, 'z').replace(/x/g, 'cks');

export default xPronounce;
