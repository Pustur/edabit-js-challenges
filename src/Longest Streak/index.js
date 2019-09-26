const MS_IN_A_DAY = 86400000;

const longestStreak = arr => {
  if (!arr.length) return 0;
  return (
    arr.slice(1).reduce(
      ([maxStreak, currStreak], { date }, i) => {
        const diff = Math.abs(new Date(date) - new Date(arr[i].date));
        return diff !== MS_IN_A_DAY
          ? [maxStreak, 0]
          : [Math.max(maxStreak, currStreak + 1), currStreak + 1];
      },
      [0, 0],
    )[0] + 1
  );
};

export default longestStreak;
