const edabitInString = str =>
  new RegExp('edabit'.split('').join('.*?')).test(str) ? 'YES' : 'NO';

export default edabitInString;
