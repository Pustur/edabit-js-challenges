const isCurzon = num =>
  (BigInt(1) + BigInt(2 ** num)) % BigInt(1 + 2 * num) === BigInt(0);

export default isCurzon;
