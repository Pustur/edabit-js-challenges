const truncate = (str, length) => {
  if (length >= str.length) return str;
  return str
    .slice(0, length + 1)
    .split(' ')
    .slice(0, -1)
    .join(' ');
};

const bucketize = (str, length, result = []) => {
  const truncated = truncate(str, length);
  const rest = str.slice(truncated.length).trim();

  if (truncated) result.push(truncated);

  return !truncated || !rest ? result : bucketize(rest, length, result);
};

export default bucketize;
