const sum = arr => arr.reduce((total, num) => total + num, 0);

const safeAccess = (board, x, y) => (board[y] && board[y][x]) || 0;

const getNeighbours = (board, x, y) => [
  safeAccess(board, x, y - 1),
  safeAccess(board, x + 1, y - 1),
  safeAccess(board, x + 1, y),
  safeAccess(board, x + 1, y + 1),
  safeAccess(board, x, y + 1),
  safeAccess(board, x - 1, y + 1),
  safeAccess(board, x - 1, y),
  safeAccess(board, x - 1, y - 1),
];

const minesweeperNumbers = board =>
  board.map((row, y) =>
    row.map((cell, x) => (cell ? 9 : sum(getNeighbours(board, x, y)))),
  );

export default minesweeperNumbers;
