const MAYAN_CALENDAR_START = new Date(-3113, 7, 11);
const MAYAN_PERIODS = [144000, 7200, 360, 20, 1];
const MS_IN_A_DAY = 86400000;

const getMayanDate = date => {
  const diff = new Date(date) - MAYAN_CALENDAR_START;
  let totalDays = diff / MS_IN_A_DAY;

  return MAYAN_PERIODS.map(period => {
    const result = Math.floor(totalDays / period);
    totalDays %= period;
    return result;
  }).join('.');
};

export default getMayanDate;
