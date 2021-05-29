import toDisplay from './index';

test('toDisplay', () => {
  expect(toDisplay(0x0)).toBe(0x3f); // 0
  expect(toDisplay(0x1)).toBe(0x06); // 1
  expect(toDisplay(0x2)).toBe(0x5b); // 2
  expect(toDisplay(0x3)).toBe(0x4f); // 3
  expect(toDisplay(0x4)).toBe(0x66); // 4
  expect(toDisplay(0x5)).toBe(0x6d); // 5
  expect(toDisplay(0x6)).toBe(0x7d); // 6
  expect(toDisplay(0x7)).toBe(0x07); // 7
  expect(toDisplay(0x8)).toBe(0x7f); // 8
  expect(toDisplay(0x9)).toBe(0x6f); // 9
  expect(toDisplay(0xa)).toBe(0x77); // A
  expect(toDisplay(0xb)).toBe(0x7c); // b
  expect(toDisplay(0xc)).toBe(0x39); // C
  expect(toDisplay(0xd)).toBe(0x5e); // d
  expect(toDisplay(0xe)).toBe(0x79); // E
  expect(toDisplay(0xf)).toBe(0x71); // F
});
