/* eslint-disable no-bitwise */
const A = 0b0000001;
const B = 0b0000010;
const C = 0b0000100;
const D = 0b0001000;
const E = 0b0010000;
const F = 0b0100000;
const G = 0b1000000;

const map = new Map([
  [0x0, A | B | C | D | E | F],
  [0x1, B | C],
  [0x2, A | B | D | E | G],
  [0x3, A | B | C | D | G],
  [0x4, B | C | F | G],
  [0x5, A | C | D | F | G],
  [0x6, A | C | D | E | F | G],
  [0x7, A | B | C],
  [0x8, A | B | C | D | E | F | G],
  [0x9, A | B | C | D | F | G],
  [0xa, A | B | C | E | F | G],
  [0xb, C | D | E | F | G],
  [0xc, A | D | E | F],
  [0xd, B | C | D | E | G],
  [0xe, A | D | E | F | G],
  [0xf, A | E | F | G],
]);

const toDisplay = hexIn => map.get(hexIn);

export default toDisplay;
