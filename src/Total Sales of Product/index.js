const sum = arr => arr.reduce((total, num) => total + num, 0);

const totalSales = (table, product) => {
  const [products, ...sales] = table;
  const index = products.indexOf(product);

  if (index === -1) return 'Product not found';
  return sum(sales.map(row => row[index]));
};

export default totalSales;
