const countOnes = arr =>
  arr.reduce(
    (total, row) =>
      total + row.reduce((subTotal, cell) => subTotal + Number(cell === 1), 0),
    0,
  );

export default countOnes;
