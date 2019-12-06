const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const periodic = numStr => {
  const sequence = [];
  let num = numStr;

  do {
    const total = sum(getDigits(num));

    sequence.push(num);
    num = (num + total).slice(-numStr.length);
  } while (!sequence.includes(num));

  return sequence.length;
};

export default periodic;
