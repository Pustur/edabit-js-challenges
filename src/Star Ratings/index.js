const sum = arr => arr.reduce((total, num) => total + num, 0);

const starRating = arr => {
  const total = sum(arr);
  const avg = sum(arr.map((num, i) => num * (i + 1))) / total;

  return `[${avg.toFixed(2)}] ${'*'.repeat(Math.round(avg))}`;
};

export default starRating;
