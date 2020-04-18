const leftSlide = row => {
  const regex = /(?!0)(\d+),(?:0,)*\1/g;
  const replaced = row.join().replace(regex, (_, g1) => g1 * 2);
  const arr = replaced.split(',').map(Number).filter(Boolean);

  return arr.concat(Array.from({ length: row.length - arr.length }).fill(0));
};

export default leftSlide;
