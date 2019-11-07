const gcd = (a, b) => (!b ? a : gcd(b, a % b));

const phi = num => {
  let result = 1;

  for (let i = 2; i < num; i += 1) {
    if (gcd(i, num) === 1) result += 1;
  }

  return result;
};

export default phi;
