const timeSum = times =>
  times.reduce(
    (result, time) => {
      const timeNums = time.split(':').map(Number);
      const total = result.map((num, i) => num + timeNums[i]);

      total[1] += Math.floor(total[2] / 60);
      total[0] += Math.floor(total[1] / 60);

      total[1] %= 60;
      total[2] %= 60;

      return total;
    },
    [0, 0, 0],
  );

export default timeSum;
