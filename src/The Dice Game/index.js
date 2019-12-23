const diceGame = (arr, players = [1, 2, 3, 4]) => {
  if (players.length === 1) return `p${players[0]}`;

  const currentThrows = arr.slice(0, players.length);
  const nextThrows = arr.slice(players.length);
  const scores = currentThrows.map(([first, second]) => first + second);
  const minScore = Math.min(...scores);
  const lowestThrows = currentThrows.filter((_, i) => scores[i] === minScore);

  if (lowestThrows.length === 1) players.splice(scores.indexOf(minScore), 1);
  else {
    const firstThrows = lowestThrows.map(([first]) => first);
    const minFirstScore = Math.min(...firstThrows);
    const lowestFirstThrows = firstThrows.filter(
      score => score === minFirstScore,
    );

    if (lowestFirstThrows.length === 1) {
      const index = currentThrows.findIndex(
        ([firstThrow]) => firstThrow === minFirstScore,
      );

      players.splice(index, 1);
    }
  }

  return diceGame(nextThrows, players);
};

export default diceGame;
