const ALPHA_1 = 6.635;
const ALPHA_5 = 3.841;

const sum = arr => arr.reduce((total, num) => total + num, 0);

const chiSquaredTest = ({ E, T }) => {
  const sumRows = [sum(E), sum(T)];
  const sumCols = [E[0] + T[0], E[1] + T[1]];
  const total = sum(sumRows);

  const arr1 = E.concat(T);
  const arr2 = arr1.map(
    (_, i) => (sumRows[Math.floor(i / 2)] * sumCols[i % 2]) / total,
  );
  const arr3 = arr2.map((val, i) => (arr1[i] - val) ** 2 / val);

  const chiValue = Number(sum(arr3).toFixed(1));

  if (chiValue > ALPHA_1) return [chiValue, 'Edabitin effectiveness = 99%'];
  if (chiValue < ALPHA_5) return [chiValue, 'Edabitin is ininfluent'];
  return [chiValue, 'Edabitin effectiveness = 95%'];
};

export default chiSquaredTest;
