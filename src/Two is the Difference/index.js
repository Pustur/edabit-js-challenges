const differenceTwo = arr => {
  const result = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] - arr[i] === 2) result.push([arr[i], arr[j]]);
    }
  }

  return result;
};

export default differenceTwo;
