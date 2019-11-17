const truncate = (str, length) => {
  if (length >= str.length) return str;
  return str
    .slice(0, length + 1)
    .split(' ')
    .slice(0, -1)
    .join(' ');
};

export default truncate;
