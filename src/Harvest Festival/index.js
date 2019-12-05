const MIN_TEMP = 20;
const MAX_TEMP = 30;

const plant = (seed, water, fertilizer, temp) => {
  const flower = ('-'.repeat(water) + seed.repeat(fertilizer)).repeat(water);

  if (temp >= MIN_TEMP && temp <= MAX_TEMP) return flower;
  return flower.replace(/[^-]/g, '') + seed;
};

export default plant;
