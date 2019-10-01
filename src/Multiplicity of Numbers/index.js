const frequencyMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

const multiplicity = arr => Array.from(frequencyMap(arr));

export default multiplicity;
