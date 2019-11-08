const getLuckyNumber = (size, nth) => {
  let arr = Array.from({ length: size + 1 }, (_, i) => i + 1);
  let filter = 2;
  const filterNumbers = (_, i) => (i + 1) % filter !== 0;
  const nextFilter = num => num > filter;

  while (arr.length > filter) {
    arr = arr.filter(filterNumbers);
    filter = arr.find(nextFilter);
  }

  return arr[nth - 1];
};

export default getLuckyNumber;
