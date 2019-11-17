const calculateChange = money => {
  const possibleChange = [500, 200, 100, 50, 20, 10, 5];

  for (const change of possibleChange) {
    if (change <= money) return [change, ...calculateChange(money - change)];
  }

  return [];
};

const vendingMachine = (products, money, productNumber) => {
  const product = products.find(({ number }) => number === productNumber);

  if (!product) return 'Enter a valid product number';
  if (product.price > money) return 'Not enough money for this product';

  return {
    product: product.name,
    change: calculateChange(money - product.price),
  };
};

export default vendingMachine;
