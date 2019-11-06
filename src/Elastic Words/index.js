const elasticize = str => {
  if (str.length < 3) return str;

  const leftMidIndex = Math.floor(str.length / 2);
  const rightMidIndex = Math.ceil(str.length / 2);
  const left = str.slice(0, leftMidIndex);
  const center = str.slice(leftMidIndex, rightMidIndex);
  const right = str.slice(rightMidIndex);

  return (
    left.replace(/./g, (match, i) => match.repeat(i + 1)) +
    center.repeat(rightMidIndex) +
    right.replace(/./g, (match, i) => match.repeat(leftMidIndex - i))
  );
};

export default elasticize;
