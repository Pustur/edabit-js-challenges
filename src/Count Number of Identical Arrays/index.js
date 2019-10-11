const frequencyMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

const countIdenticalArrays = (...arr) => {
  const freqMap = frequencyMap(arr.map(String));
  const mostFrequent = Math.max(...freqMap.values());

  return mostFrequent === 1 ? 0 : mostFrequent;
};

export default countIdenticalArrays;
