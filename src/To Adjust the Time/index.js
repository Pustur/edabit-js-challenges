const timeAdjust = (now, ...offset) => {
  const total = now.split(':').map((num, i) => Number(num) + offset[i]);
  const date = new Date();

  date.setHours(...total);

  return date.toISOString().slice(11, 19);
};

export default timeAdjust;
