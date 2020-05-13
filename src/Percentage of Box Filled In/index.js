const percentFilled = arr => {
  const contents = arr
    .slice(1, -1)
    .map(row => row.slice(1, -1))
    .join('');
  const filled = contents.match(/o/g) || [];

  return `${Math.round((filled.length / contents.length) * 100)}%`;
};

export default percentFilled;
