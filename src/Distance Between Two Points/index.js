const getDistance = (p1, p2) => {
  const deltaX = Math.abs(p1.x - p2.x);
  const deltaY = Math.abs(p1.y - p2.y);

  return Number(Math.hypot(deltaX, deltaY).toFixed(3));
};

export default getDistance;
