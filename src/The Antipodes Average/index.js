const antipodesAverage = arr => {
  const half = arr.length / 2;
  const first = arr.slice(0, half);
  const second = arr.slice(Math.ceil(half)).reverse();

  return first.map((num, i) => (num + second[i]) / 2);
};

export default antipodesAverage;
