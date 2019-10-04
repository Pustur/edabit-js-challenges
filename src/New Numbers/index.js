const isNew = num => {
  const smallestPermutation = Array.from(String(num))
    .sort()
    .join('')
    .replace(/(0+)(\d)/, '$2$1');

  return num <= Number(smallestPermutation);
};

export default isNew;
