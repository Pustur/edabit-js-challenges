const isLeap = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const numLeapYears = str => {
  const [start, end] = str.split('-').map(Number);
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => start + i).filter(isLeap).length;
};

export default numLeapYears;
