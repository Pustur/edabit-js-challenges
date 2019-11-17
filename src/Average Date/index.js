const sum = arr => arr.reduce((total, num) => total + num, 0);

const mean = arr => sum(arr) / arr.length;

const averageDate = arr =>
  arr.length
    ? new Date(mean(arr.map(date => new Date(date).getTime()))).toISOString()
    : null;

export default averageDate;
