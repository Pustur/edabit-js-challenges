const missingAngle = (angle1, angle2) => {
  const angle3 = 180 - angle1 - angle2;

  if (angle3 < 90) return 'acute';
  if (angle3 > 90) return 'obtuse';
  return 'right';
};

export default missingAngle;
