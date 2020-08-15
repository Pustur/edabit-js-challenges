const sum = arr => arr.reduce((total, num) => total + num, 0);

const mean = arr => sum(arr) / arr.length;

const getWordScore = word => sum(Array.from(word, char => char.charCodeAt(0)));

const averageASCII = str => {
  const words = str.split(' ');
  const wordScores = words.map(getWordScore);
  const avgScore = mean(wordScores);

  return words
    .map((word, i) => (wordScores[i] > avgScore ? word.toUpperCase() : word))
    .join(' ');
};

export default averageASCII;
