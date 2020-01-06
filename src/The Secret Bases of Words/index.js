const CHARS = '0123456789abcdefghijklmnopqrstuvwxyz';

const wordToDecimal = str => {
  const highestChar = Array.from(str.toLowerCase()).sort()[str.length - 1];
  const base = CHARS.indexOf(highestChar) + 1;

  return parseInt(str, base);
};

export default wordToDecimal;
