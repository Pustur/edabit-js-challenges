const sum = arr => arr.reduce((total, num) => total + num, 0);

const mean = arr => sum(arr) / arr.length;

const getBestStudent = students => {
  const avgs = Object.values(students).map(mean);
  const maxAvg = Math.max(...avgs);
  const index = avgs.indexOf(maxAvg);

  return Object.keys(students)[index];
};

export default getBestStudent;
