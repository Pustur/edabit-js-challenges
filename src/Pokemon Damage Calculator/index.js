const getEffectiveness = (yourType, opponentType) => {
  const elementMatchups = {
    fire: { grass: 2, water: 0.5 },
    grass: { water: 2, fire: 0.5 },
    water: { fire: 2, grass: 0.5, electric: 0.5 },
    electric: { water: 2 },
  };
  return elementMatchups[yourType][opponentType] || 1;
};

const calculateDamage = (yourType, opponentType, attack, defense) =>
  50 * (attack / defense) * getEffectiveness(yourType, opponentType);

export default calculateDamage;
