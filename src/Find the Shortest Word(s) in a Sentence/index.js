const findShortestWords = str => {
  const words =
    str
      .toLowerCase()
      .replace(/[^\s\w]+/g, '')
      .match(/[a-z]+/g) || [];
  const minLength = Math.min(...words.map(({ length }) => length));

  return words.filter(({ length }) => length === minLength).sort();
};

export default findShortestWords;
