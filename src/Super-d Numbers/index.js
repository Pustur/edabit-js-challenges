const isSuperD = num => {
  for (let d = 2; d <= 9; d += 1) {
    const regex = new RegExp(`${d}{${d}}`);
    const result = BigInt(d) * BigInt(num) ** BigInt(d);

    if (regex.test(result)) return `Super-${d} Number`;
  }

  return 'Normal Number';
};

export default isSuperD;
