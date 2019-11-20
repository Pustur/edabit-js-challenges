const isRelationshipValid = (a, operator, b) =>
  ({
    '=': a === b,
    '<': a < b,
    '>': a > b,
    '>=': a >= b,
    '<=': a <= b,
  }[operator]);

const validateTheRelationships = str => {
  const arr = str.split(/([<>]=?|=)/);

  for (let i = 0; i < arr.length - 2; i += 2) {
    const left = Number(arr[i]);
    const operator = arr[i + 1];
    const right = Number(arr[i + 2]);

    if (!isRelationshipValid(left, operator, right)) return false;
  }

  return true;
};

export default validateTheRelationships;
