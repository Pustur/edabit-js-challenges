const countOnes = arr =>
  arr.reduce((total, row) => total + row.filter(cell => cell === 1).length, 0);

export default countOnes;
