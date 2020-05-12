const expMap = {
  'Very Easy': 5,
  'Easy': 10,
  'Medium': 20,
  'Hard': 40,
  'Very Hard': 80,
};

const getXP = challenges =>
  `${Object.entries(challenges).reduce(
    (total, [difficulty, quantity]) => total + quantity * expMap[difficulty],
    0,
  )}XP`;

export default getXP;
