const OFFSETS = {
  u: { y: -1, x: 0 },
  r: { y: 0, x: 1 },
  d: { y: 1, x: 0 },
  l: { y: 0, x: -1 },
};

const routeTracer = (grid, moves) => {
  const startY = grid.findIndex(row => row.includes('@'));
  const startX = grid[startY].indexOf('@');
  const [route, items] = Array.from(moves).reduce(
    ([arr, itemsStr, lastY, lastX], move) => {
      const y = lastY + OFFSETS[move].y;
      const x = lastX + OFFSETS[move].x;
      const cell = arr[y][x];
      const item = /[&#$]/.test(cell) ? cell : '';

      arr[y][x] = 'x';

      return [arr, itemsStr + item, y, x];
    },
    [grid, '', startY, startX],
  );

  return { route, items };
};

export default routeTracer;
