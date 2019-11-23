const monthsData = [
  { threshold: 19, symbols: '♑♒' },
  { threshold: 18, symbols: '♒♓' },
  { threshold: 20, symbols: '♓♈' },
  { threshold: 19, symbols: '♈♉' },
  { threshold: 20, symbols: '♉♊' },
  { threshold: 20, symbols: '♊♋' },
  { threshold: 22, symbols: '♋♌' },
  { threshold: 22, symbols: '♌♍' },
  { threshold: 22, symbols: '♍♎' },
  { threshold: 22, symbols: '♎♏' },
  { threshold: 21, symbols: '♏♐' },
  { threshold: 21, symbols: '♐♑' },
];

const zodiacSymbol = str => {
  const date = new Date(str);
  const { symbols, threshold } = monthsData[date.getMonth()];

  return symbols[Number(date.getDate() > threshold)];
};

export default zodiacSymbol;
