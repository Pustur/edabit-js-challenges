const leaderboards = arr =>
  arr.sort((a, b) => b.score + 2 * b.reputation - (a.score + 2 * a.reputation));

export default leaderboards;
