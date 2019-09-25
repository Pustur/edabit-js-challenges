const getDifferentChar = str => {
  const chars = Array.from(new Set(str));
  return chars.find(char => str.match(new RegExp(char, 'g')).length === 1);
};

const whereIsWaldo = arr => {
  const allChars = arr.map(row => row.join('')).join('');
  const differentChar = getDifferentChar(allChars);
  const rowIndex = arr.findIndex(row => row.includes(differentChar));

  return [rowIndex + 1, arr[rowIndex].indexOf(differentChar) + 1];
};

export default whereIsWaldo;
