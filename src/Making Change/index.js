const makeChange = money =>
  Object.entries({ q: 25, d: 10, n: 5, p: 1 }).reduce(
    ([obj, remainder], [key, coinValue]) => {
      const coinsAmount = Math.floor(remainder / coinValue);

      obj[key] += coinsAmount;

      return [obj, remainder - coinsAmount * coinValue];
    },
    [{ q: 0, d: 0, n: 0, p: 0 }, money],
  )[0];

export default makeChange;
