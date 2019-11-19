const scores = {
  2: 12,
  3: 13,
  4: 14,
  5: 15,
  6: 18,
  7: 21,
  J: 10,
  Q: 10,
  K: 10,
  A: 16,
};

const sum = arr => arr.reduce((total, num) => total + num, 0);

const getPrimieraScore = deck => {
  const deckScores = deck.reduce(
    (maxScores, card) => {
      const [value, seed] = card;
      const index = 'dhcs'.indexOf(seed);

      maxScores[index] = Math.max(maxScores[index], scores[value]);

      return maxScores;
    },
    [0, 0, 0, 0],
  );

  return deckScores.some(score => score === 0) ? 0 : sum(deckScores);
};

export default getPrimieraScore;
