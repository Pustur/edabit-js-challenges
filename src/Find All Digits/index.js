const getDigits = num => Array.from(String(num), Number);

const findAllDigits = arr => {
  const digitsFound = new Set();
  const numFound = arr.find(num => {
    getDigits(num).forEach(digit => digitsFound.add(digit));
    return digitsFound.size === 10;
  });

  return numFound || 'Missing digits!';
};

export default findAllDigits;
