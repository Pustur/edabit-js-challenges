const missing = arr => {
  const first = arr[0];
  const last = arr[arr.length - 1];
  const delta = last - first;
  const step = delta / arr.length;

  return arr.find((num, i) => num + step !== arr[i + 1]) + step;
};

export default missing;
