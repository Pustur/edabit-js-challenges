const sum = arr => arr.reduce((total, num) => total + num, 0);

const safeAccess = (board, y, x) => (board[y] && board[y][x]) || 0;

const getNeighbours = (board, y, x) => [
  safeAccess(board, y, x - 1),
  safeAccess(board, y + 1, x - 1),
  safeAccess(board, y + 1, x),
  safeAccess(board, y + 1, x + 1),
  safeAccess(board, y, x + 1),
  safeAccess(board, y - 1, x + 1),
  safeAccess(board, y - 1, x),
  safeAccess(board, y - 1, x - 1),
];

const gameOfLife = board =>
  board
    .map((row, y) =>
      row
        .map((cell, x) => {
          const neighbours = sum(getNeighbours(board, y, x));

          if (!cell) return neighbours === 3 ? '█' : '░';
          return neighbours > 1 && neighbours < 4 ? '█' : '░';
        })
        .join(''),
    )
    .join('\n');

export default gameOfLife;
