const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => Array.from(String(num), Number);

const reduceToSingleDigit = num =>
  num <= 9 ? num : reduceToSingleDigit(sum(getDigits(num)));

const castOutNines = (num1, num2, result) => {
  const a = reduceToSingleDigit(num1);
  const b = reduceToSingleDigit(num2);
  const c = reduceToSingleDigit(result);
  const d = reduceToSingleDigit(a * b);
  const isCorrect = num1 * num2 === result;
  const sameLastDigits = c === d;
  const messages = ['Wrong', 'False positive', 'Correct'];

  return `${[a, b, c, d]} = ${messages[isCorrect + sameLastDigits]}!`;
};

export default castOutNines;
