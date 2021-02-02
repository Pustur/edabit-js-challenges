const DAYS_IN_WEEK = 7;
const TUESDAY_OFFSET = 3;

const firstTuesdayOfTheMonth = (year, month) => {
  const firstOfMonth = new Date(year, month - 1, 1).getDay();
  const firstTuesday =
    ((DAYS_IN_WEEK - (firstOfMonth + 1) + TUESDAY_OFFSET) % DAYS_IN_WEEK) + 1;

  return new Date(year, month - 1, firstTuesday).toISOString().slice(0, 10);
};

export default firstTuesdayOfTheMonth;
