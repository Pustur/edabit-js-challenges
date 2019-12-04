const relationships = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

const rps = (player1, player2) => {
  if (player1 === player2) return 'TIE';
  return `Player ${relationships[player1] === player2 ? 1 : 2} wins`;
};

export default rps;
