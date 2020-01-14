const desc = (a, b) => b - a;

const risiko = (attacker, defender) => {
  attacker.sort(desc);
  defender.sort(desc);

  return defender.filter((def, i) => def < attacker[i]).length;
};

export default risiko;
