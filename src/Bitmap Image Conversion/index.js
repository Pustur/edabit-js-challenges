const ZERO = ['111', '101', '101', '101', '111'];
const ONE = ['010', '110', '010', '010', '111'];
const TWO = ['111', '001', '111', '100', '111'];
const THREE = ['111', '001', '111', '001', '111'];
const FOUR = ['101', '101', '111', '001', '001'];
const FIVE = ['111', '100', '111', '001', '111'];
const SIX = ['100', '100', '111', '101', '111'];
const SEVEN = ['111', '001', '001', '001', '001'];
const EIGHT = ['111', '101', '111', '101', '111'];
const NINE = ['111', '101', '111', '001', '001'];
const COLON = ['0', '1', '0', '1', '0'];

const nums = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

const transposeMatrix = arr => arr[0].map((_, y) => arr.map(row => row[y]));

const toBitString = time =>
  transposeMatrix(
    Array.from(time, (num, i) => {
      const arr = nums[num] || COLON;
      return i < 4 ? arr.map(str => `${str}0`) : arr;
    }),
  )
    .flat()
    .join('');

export default toBitString;
