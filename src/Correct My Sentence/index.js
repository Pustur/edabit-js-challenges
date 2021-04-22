const correctSentences = str =>
  str
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/ [A-Z]/g, '.$&')
    .replace(/^./, match => match.toUpperCase())
    .replace(/\.?$/, '.');

export default correctSentences;
