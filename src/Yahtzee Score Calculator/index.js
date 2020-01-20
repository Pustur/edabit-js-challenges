const BONUS_POINTS = 35;
const BONUS_POINTS_TRESHOLD = 63;

const sum = arr => arr.reduce((total, num) => total + num, 0);

const frequencyMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

const turnScore = (dice, turn) => {
  if (turn <= 6) return dice.filter(num => num === turn).length * turn;

  const freqMap = Array.from(frequencyMap(dice));

  if (turn <= 8) {
    return sum(freqMap.find(([, freq]) => freq >= turn - 4) ? dice : []);
  }
  if (turn <= 9) {
    return freqMap.length === 2 && freqMap.some(([, freq]) => freq === 3) * 25;
  }

  const uniqueSorted = Array.from(new Set(dice))
    .sort()
    .join('');

  if (turn <= 10) return /1234|2345|3456/.test(uniqueSorted) * 30;
  if (turn <= 11) return /12345|23456/.test(uniqueSorted) * 40;
  if (turn <= 12) return (freqMap.length === 1) * 50;
  return sum(dice);
};

const yahtzeeScoreCalc = arr =>
  arr.reduce(
    (score, dice, i) =>
      score +
      turnScore(dice, i + 1) +
      (i === 6 && score >= BONUS_POINTS_TRESHOLD) * BONUS_POINTS,
    0,
  );

export default yahtzeeScoreCalc;
