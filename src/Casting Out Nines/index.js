const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const digitalRoot = num => (num <= 9 ? num : digitalRoot(sum(getDigits(num))));

const castOutNines = (num1, num2, result) => {
  const a = digitalRoot(num1);
  const b = digitalRoot(num2);
  const c = digitalRoot(result);
  const d = digitalRoot(a * b);
  const isCorrect = num1 * num2 === result;
  const sameLastDigits = c === d;
  const messages = ['Wrong', 'False positive', 'Correct'];

  return `${[a, b, c, d]} = ${messages[isCorrect + sameLastDigits]}!`;
};

export default castOutNines;
