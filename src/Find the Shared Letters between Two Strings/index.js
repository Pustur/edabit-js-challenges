const sharedLetters = (...strings) => {
  const [short, long] = strings
    .sort((a, b) => a.length - b.length)
    .map(str => str.toLowerCase());

  return Array.from(new Set(short))
    .filter(char => long.includes(char))
    .sort()
    .join('');
};

export default sharedLetters;
