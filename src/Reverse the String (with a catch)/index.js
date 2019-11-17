const specialReverseString = str => {
  const noWhitespace = Array.from(str.replace(/\s+/g, ''));

  return Array.from(str, char => {
    if (/\s/.test(char)) return char;

    return char === char.toLowerCase()
      ? noWhitespace.pop().toLowerCase()
      : noWhitespace.pop().toUpperCase();
  }).join('');
};

export default specialReverseString;
