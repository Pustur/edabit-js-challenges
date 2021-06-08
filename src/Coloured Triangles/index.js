const getColor = (a, b) =>
  a === b ? a : 'RGB'.replace(new RegExp(`[${a + b}]`, 'g'), '');

const nextRow = row => {
  if (row.length === 2) return getColor(...row);

  const next = row.slice(1).map((_, i) => getColor(row[i], row[i + 1]));

  return nextRow(next);
};

const colouredTriangle = row =>
  new Set(row).size === 1 ? row[0] : nextRow(Array.from(row));

export default colouredTriangle;
