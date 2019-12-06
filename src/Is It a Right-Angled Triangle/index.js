const sum = arr => arr.reduce((total, num) => total + num, 0);

const isRightAngle = (arr, type) => {
  if (type === 'angle') {
    const totalAngle = sum(arr);
    const includes90 = arr.includes(90);

    switch (arr.length) {
      case 1:
        return totalAngle <= 90;
      case 2:
        return (includes90 && totalAngle < 180) || totalAngle === 90;
      case 3:
        return includes90 && totalAngle === 180;
      default:
        return !arr.length;
    }
  }

  const [side1, side2, hypot] = arr.sort((a, b) => a - b);
  return Math.hypot(side1, side2) === hypot || arr.length < 3;
};

export default isRightAngle;
