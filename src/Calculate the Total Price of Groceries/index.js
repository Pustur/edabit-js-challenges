const sum = arr => arr.reduce((total, num) => total + num, 0);

const getTotalPrice = arr =>
  Number(sum(arr.map(({ quantity, price }) => quantity * price)).toFixed(1));

export default getTotalPrice;
