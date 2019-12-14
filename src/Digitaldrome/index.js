const asc = (a, b) => a - b;

const desc = (a, b) => b - a;

const digitaldrome = num => {
  const str = String(num);
  const setSize = new Set(str).size;

  if (setSize === 1) return 'Repdrome';

  const digits = Array.from(str);
  const isAscending = digits.sort(asc).join('') === str;
  const isDescending = digits.sort(desc).join('') === str;
  const hasDuplicates = str.length !== setSize;

  if (isAscending) return hasDuplicates ? 'Plaindrome' : 'Metadrome';
  if (isDescending) return hasDuplicates ? 'Nialpdrome' : 'Katadrome';
  return 'Nondrome';
};

export default digitaldrome;
