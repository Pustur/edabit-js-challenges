const isEven = num => num % 2 === 0;

const availableSpots = (arr, num) => {
  const toInsert = isEven(num);
  const evenOdds = arr.map(isEven);

  return evenOdds.slice(1).reduce((total, right, i) => {
    const left = evenOdds[i];
    const isGoodSpot = toInsert ? left || right : !(left && right);

    return total + Number(isGoodSpot);
  }, 0);
};

export default availableSpots;
