import memeSum from './index';

test('memeSum', () => {
  expect(memeSum(0, 0)).toBe(0);
  expect(memeSum(0, 1)).toBe(1);
  expect(memeSum(2, 11)).toBe(13);
  expect(memeSum(16, 18)).toBe(214);
  expect(memeSum(26, 39)).toBe(515);
  expect(memeSum(122, 81)).toBe(1103);
  expect(memeSum(1222, 30277)).toBe(31499);
  expect(memeSum(38810, 1383)).toBe(391193);
  expect(memeSum(1236, 30977)).toBe(31111013);
  expect(memeSum(49999, 49999)).toBe(818181818);
});
