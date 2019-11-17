const alternatingCaps = str => {
  let counter = 0;

  return Array.from(str, char => {
    if (/\s/.test(char)) return char;
    counter += 1;
    return counter % 2 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
};

export default alternatingCaps;
