const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const junctionOrSelf = num => {
  const results = [];

  for (let i = num - 1; i > 0; i -= 1) {
    if (i + sum(getDigits(i)) === num) results.push(i);
  }

  return results.length ? results : 'Self';
};

export default junctionOrSelf;
