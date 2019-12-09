const sum = arr => arr.reduce((total, num) => total + num, 0);

const product = arr => arr.reduce((total, num) => total * num, 1);

const getDigits = num => Array.from(String(num), Number);

const digitalDivision = num => {
  const digits = getDigits(num);
  const conditions = [
    digits.filter(digit => digit !== 0).every(digit => num % digit === 0),
    num % sum(digits) === 0,
    num % product(digits) === 0,
  ];
  const validConditions = sum(conditions);

  if (validConditions === 0) return 'Indivisible';
  if (validConditions === 3) return 'Perfect';
  return validConditions;
};

export default digitalDivision;
