const completelyFilled = arr =>
  arr.slice(1, -1).every(row => /^\*+$/.test(row.slice(1, -1)));

export default completelyFilled;
