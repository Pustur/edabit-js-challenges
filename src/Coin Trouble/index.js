const sum = arr => arr.reduce((total, num) => total + num, 0);

const coinsDiv = (coins, divided = [0, 0, 0]) => {
  if (!coins.length) return new Set(divided).size === 1;
  if (Math.max(...divided) * 3 > sum(coins.concat(divided))) return false;

  const [coin, ...rest] = coins;
  const [a, b, c] = divided;

  return (
    coinsDiv(rest, [a + coin, b, c]) ||
    coinsDiv(rest, [a, b + coin, c]) ||
    coinsDiv(rest, [a, b, c + coin])
  );
};

export default coinsDiv;
