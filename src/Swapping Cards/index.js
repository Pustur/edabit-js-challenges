const getDigits = num => Array.from(String(num), Number);

const swapCards = (num1, num2) => {
  const digits1 = getDigits(num1);
  const index1 = digits1.indexOf(Math.min(...digits1));
  const digits2 = getDigits(num2);
  const index2 = 0;

  [digits1[index1], digits2[index2]] = [digits2[index2], digits1[index1]];

  return Number(digits1.join('')) > Number(digits2.join(''));
};

export default swapCards;
