const last = (arr, num) =>
  num > arr.length ? 'invalid' : arr.slice(-num || arr.length);

export default last;
