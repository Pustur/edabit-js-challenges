const censorString = (str, censoredWords, char) =>
  str.replace(new RegExp(censoredWords.join('|'), 'g'), match =>
    char.repeat(match.length),
  );

export default censorString;
