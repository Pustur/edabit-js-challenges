const incrementString = str =>
  str.replace(/\d*$/, match =>
    String(Number(match) + 1).padStart(match.length, '0'),
  );

export default incrementString;
