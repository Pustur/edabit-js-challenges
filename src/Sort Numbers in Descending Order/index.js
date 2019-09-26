const sortDecending = num =>
  Number(
    String(num)
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  );

export default sortDecending;
