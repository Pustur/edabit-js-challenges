const alternatePosNeg = arr => {
  if (arr.includes(0)) return false;
  const signs = arr.map(Math.sign);
  return signs.slice(1).every((sign, i) => sign !== signs[i]);
};

export default alternatePosNeg;
