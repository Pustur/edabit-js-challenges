const stockPicker = arr =>
  Math.max(...arr.map((num, i) => Math.max(...arr.slice(i + 1)) - num), -1);

export default stockPicker;
