const sum = arr => arr.reduce((total, num) => total + num, 0);

const validateISBN10 = str => {
  const arr = Array.from(
    str,
    (digit, i) => (digit === 'X' ? 10 : digit) * (10 - i),
  );
  return sum(arr) % 11 === 0;
};

const validateISBN13 = str => {
  const arr = Array.from(str, (digit, i) => digit * (i % 2 === 0 ? 1 : 3));
  return sum(arr) % 10 === 0;
};

const convertToISBN13 = str => {
  for (let lastNum = 0; lastNum <= 9; lastNum += 1) {
    const finalNum = `978${str.slice(0, -1)}${lastNum}`;

    if (validateISBN13(finalNum)) return finalNum;
  }

  return false;
};

const isbn13 = str => {
  if (str.length === 13) return validateISBN13(str) ? 'Valid' : 'Invalid';
  return validateISBN10(str) ? convertToISBN13(str) : 'Invalid';
};

export default isbn13;
