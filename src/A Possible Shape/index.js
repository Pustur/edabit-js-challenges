const sum = arr => arr.reduce((total, num) => total + num, 0);

const isShapePossible = (n, angles) => {
  if (n < 3) return false;
  if (angles.some(angle => angle < 0 || angle >= 180)) return false;
  return sum(angles) === (n - 2) * 180;
};

export default isShapePossible;
