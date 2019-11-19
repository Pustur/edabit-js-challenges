const pyramidalString = ([...str], direction) => {
  const length = (Math.sqrt(8 * str.length + 1) - 1) / 2;

  if (!Number.isInteger(length)) return 'Error!';

  return Array.from({ length }, (_, i) => {
    const index = direction === 'REG' ? i + 1 : length - i;
    return str.splice(0, index).join(' ');
  });
};

export default pyramidalString;
