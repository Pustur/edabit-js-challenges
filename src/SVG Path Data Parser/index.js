const paramParser = str => (str.match(/-?(?:\d*\.\d+|\d+)/g) || []).map(Number);

const pathDataParser = str =>
  (str.match(/[a-z](?:[^a-z]+)?/gi) || []).map(match => ({
    command: match[0],
    parameters: paramParser(match.slice(1)),
  }));

export default pathDataParser;
