const isRepeated = str => {
  for (let i = 1; i <= str.length / 2; i += 1) {
    const repeats = str.length / i;
    if (str.slice(0, i).repeat(repeats) === str) return repeats;
  }

  return false;
};

export default isRepeated;
