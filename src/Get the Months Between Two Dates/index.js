const MONTHS_IN_YEAR = 12;

const asc = (a, b) => a - b;

const monthsBetween = (dateStart, dateEnd) => {
  const yearsDiff = dateEnd.getFullYear() - dateStart.getFullYear();
  const monthsDiff = dateEnd.getMonth() - dateStart.getMonth();

  return yearsDiff * MONTHS_IN_YEAR + monthsDiff;
};

const monthsInterval = (...dates) => {
  const [dateStart, dateEnd] = dates.sort(asc);
  const numberOfMonthsBetween = Math.min(
    monthsBetween(dateStart, dateEnd),
    MONTHS_IN_YEAR - 1,
  );

  return Array.from(
    { length: numberOfMonthsBetween + 1 },
    (_, i) => (dateStart.getMonth() + i) % MONTHS_IN_YEAR,
  )
    .sort(asc)
    .map(num => new Date(1970, num).toLocaleString('en', { month: 'long' }));
};

export default monthsInterval;
