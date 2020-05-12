const flavorSweetness = {
  Plain: 0,
  Vanilla: 5,
  ChocolateChip: 5,
  Strawberry: 10,
  Chocolate: 10,
};

const sweetestIcecream = arr =>
  Math.max(
    ...arr.map(
      ({ flavor, numSprinkles }) => numSprinkles + flavorSweetness[flavor],
    ),
  );

export default sweetestIcecream;
