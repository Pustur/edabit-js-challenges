const blahBlah = (str, num) =>
  `${str
    .split(' ')
    .map((word, i, arr) => (num > arr.length - i - 1 ? 'blah' : word))
    .join(' ')}...`;

export default blahBlah;
