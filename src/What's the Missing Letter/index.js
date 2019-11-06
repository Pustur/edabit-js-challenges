const missingLetter = str => {
  for (let i = 0; i < str.length - 1; i += 1) {
    const curr = str[i].charCodeAt();
    const next = str[i + 1].charCodeAt();
    const diff = Math.abs(curr - next);

    if (diff !== 1) return String.fromCharCode(curr + 1);
  }

  return 'No Missing Letter';
};

export default missingLetter;
