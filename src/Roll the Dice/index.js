const SIDES = 6;

const diceRoll = (dice, outcome) => {
  if (dice === 1) return Number(outcome >= 1 && outcome <= SIDES);

  return Array.from({ length: SIDES }).reduce(
    (total, _, i) => total + diceRoll(dice - 1, outcome - (i + 1)),
    0,
  );
};

export default diceRoll;
