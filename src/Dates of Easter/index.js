const mod = (a, b) => ((a % b) + b) % b;
const { floor } = Math;

const easterDate = y => {
  const g = mod(y, 19) + 1;
  const s = floor((y - 1600) / 100) - floor((y - 1600) / 400);
  const l = floor((floor((y - 1400) / 100) * 8) / 25);
  const p1 = mod(3 - 11 * g + s - l, 30);
  const p = p1 === 29 || (p1 === 28 && g > 11) ? p1 - 1 : p1;
  const d = mod(y + floor(y / 4) - floor(y / 100) + floor(y / 400), 7);
  const e = p + 1 + mod(4 - d - p, 7);

  return e < 11 ? `March ${e + 21}` : `April ${e - 10}`;
};

export default easterDate;
