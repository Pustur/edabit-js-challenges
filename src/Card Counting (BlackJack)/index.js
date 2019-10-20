const cardValues = {
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 0,
  8: 0,
  9: 0,
  10: -1,
  J: -1,
  Q: -1,
  K: -1,
  A: -1,
};

const count = cards =>
  cards.reduce((total, card) => total + cardValues[card], 0);

export default count;
