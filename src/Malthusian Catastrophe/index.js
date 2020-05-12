const BASE_POPULATION = 100;
const BASE_FOOD = 100;

const malthusian = (foodGrowth, popMult) => {
  for (let year = 1; ; year += 1) {
    const food = foodGrowth * year + BASE_FOOD;
    const population = BASE_POPULATION * popMult ** year;

    if (food < population) return year;
  }
};

export default malthusian;
