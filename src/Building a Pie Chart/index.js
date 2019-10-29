const DEGREES_IN_CIRCLE = 360;

const sum = arr => arr.reduce((total, num) => total + num, 0);

const pieChart = data => {
  const total = sum(Object.values(data));
  return Object.entries(data).reduce(
    (obj, [key, value]) => ({
      ...obj,
      [key]: Number(((value / total) * DEGREES_IN_CIRCLE).toFixed(1)),
    }),
    {},
  );
};

export default pieChart;
