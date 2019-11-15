const arrayOfMultiples = (num, length) =>
  Array.from({ length }, (_, i) => num * (i + 1));

export default arrayOfMultiples;
