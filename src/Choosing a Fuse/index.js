const chooseFuse = (fuses, current) => {
  const num = parseFloat(current);
  const possibleFuses = fuses.map(parseFloat).filter(fuse => fuse >= num);

  return `${Math.min(...possibleFuses)}V`;
};

export default chooseFuse;
