const binarySearch = (arr, target, min = 0, max = arr.length - 1) => {
  const index = Math.floor((min + max) / 2);
  const guess = arr[index];

  if (guess === target) return true;
  if (min === max) return false;
  if (guess > target) return binarySearch(arr, target, min, index - 1);
  return binarySearch(arr, target, index + 1, max);
};

const isPrime = (primes, target) =>
  binarySearch(primes, target) ? 'yes' : 'no';

export default isPrime;
