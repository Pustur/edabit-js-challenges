const MS_IN_A_DAY = 86400000;

const currentStreak = (today, arr) => {
  if (!arr.length || arr[arr.length - 1].date !== today) return 0;

  let streak = 1;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const curr = arr[i].date;
    const prev = arr[i - 1].date;
    const diff = Math.abs(new Date(curr) - new Date(prev));

    if (diff === MS_IN_A_DAY) streak += 1;
    else break;
  }

  return streak;
};

export default currentStreak;
