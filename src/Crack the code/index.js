const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const decode = str =>
  Array.from(str, char => sum(getDigits(char.charCodeAt())));

export default decode;
