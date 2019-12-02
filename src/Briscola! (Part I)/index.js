const MAX_SCORE = 120;
const CARD_SCORES = {
  A: 11,
  3: 10,
  K: 4,
  Q: 3,
  J: 2,
};

const briscolaScore = (...turns) => {
  const score = turns
    .flat()
    .reduce((total, card) => total + (CARD_SCORES[card[0]] || 0), 0);

  if (score === MAX_SCORE) return 'Draw!';
  return score > MAX_SCORE ? 'You Win!' : 'You Lose!';
};

export default briscolaScore;
