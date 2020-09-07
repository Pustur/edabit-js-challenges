const generation = (num, sex) => {
  if (!num) return 'me!';

  const abs = Math.abs(num);
  const great = abs >= 3 ? 'great ' : '';
  const grand = abs >= 2 ? 'grand' : '';
  const relative = [
    ['son', 'father'],
    ['daughter', 'mother'],
  ][Number(sex === 'f')][Number(num < 0)];

  return great + grand + relative;
};

export default generation;
