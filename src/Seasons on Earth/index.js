const THRESHOLD_1 = new Date('March, 1');
const THRESHOLD_2 = new Date('June, 1');
const THRESHOLD_3 = new Date('September, 1');
const THRESHOLD_4 = new Date('December, 1');
const SEASONS = {
  N: ['Spring', 'Summer', 'Autumn', 'Winter'],
  S: ['Autumn', 'Winter', 'Spring', 'Summer'],
};

const emisphereSeason = (emisphere, dateStr) => {
  const date = new Date(dateStr);
  let index = 3;

  if (date >= THRESHOLD_1 && date < THRESHOLD_2) index = 0;
  else if (date >= THRESHOLD_2 && date < THRESHOLD_3) index = 1;
  else if (date >= THRESHOLD_3 && date < THRESHOLD_4) index = 2;

  return SEASONS[emisphere][index];
};

export default emisphereSeason;
