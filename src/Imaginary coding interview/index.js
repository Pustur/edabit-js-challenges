const MAX_TIME_LIMITS = [5, 10, 15, 20];

const interview = (questions, totalTime) =>
  totalTime <= 120 &&
  questions.length === 8 &&
  questions.every((time, i) => time <= MAX_TIME_LIMITS[Math.floor(i / 2)])
    ? 'qualified'
    : 'disqualified';

export default interview;
