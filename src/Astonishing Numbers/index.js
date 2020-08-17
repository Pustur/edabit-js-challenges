const sumRange = arr => {
  const [min, max] = arr.sort((a, b) => a - b);
  return (max * (max + 1) - (min - 1) * min) / 2;
};

const isAstonishing = num => {
  const str = String(num);

  for (let i = 1; i < str.length; i += 1) {
    const a = Number(str.slice(0, i));
    const b = Number(str.slice(i));

    if (sumRange([a, b]) === num) return `${a < b ? 'AB' : 'BA'}-Astonishing`;
  }

  return false;
};

export default isAstonishing;
