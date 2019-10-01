const stemPlot = arr =>
  Array.from(
    arr.reduce((map, num) => {
      const str = String(num).padStart(2, '0');
      const [stem, leaf] = [str.slice(0, -1), str.slice(-1)].map(Number);

      return map.set(stem, (map.get(stem) || []).concat(leaf));
    }, new Map()),
  )
    .sort(([a], [b]) => a - b)
    .map(([stems, leaves]) => `${stems} | ${leaves.sort().join(' ')}`);

export default stemPlot;
