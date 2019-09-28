const frequencyMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

const mostFrequentChar = arr => {
  const freqMap = frequencyMap(arr.join('').split(''));
  const keys = Array.from(freqMap.keys());
  const values = Array.from(freqMap.values());
  const max = Math.max(...values);

  return keys.filter((_, i) => values[i] === max).sort();
};

export default mostFrequentChar;
