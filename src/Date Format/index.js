const formatDate = str =>
  str
    .split('/')
    .reverse()
    .join('');

export default formatDate;
