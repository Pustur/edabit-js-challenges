const transposeMatrix = arr => arr[0].map((_, y) => arr.map(row => row[y]));

const encryption = str => {
  const noWhitespaceStr = str.replace(/\s+/g, '');
  const cols = Math.ceil(Math.sqrt(noWhitespaceStr.length));
  const matrix = noWhitespaceStr
    .match(new RegExp(`.{1,${cols}}`, 'g'))
    .map(row => row.split(''));

  return transposeMatrix(matrix)
    .map(row => row.join(''))
    .join(' ');
};

export default encryption;
