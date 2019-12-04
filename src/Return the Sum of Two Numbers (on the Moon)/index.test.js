import lunarSum from './index';

test('lunarSum', () => {
  expect(lunarSum(1, 1)).toBe(1);
  expect(lunarSum(9, 11)).toBe(19);
  expect(lunarSum(11, 22)).toBe(22);
  expect(lunarSum(123, 8)).toBe(128);
  expect(lunarSum(134, 54)).toBe(154);
  expect(lunarSum(20, 140)).toBe(140);
  expect(lunarSum(198, 44)).toBe(198);
  expect(lunarSum(246, 317)).toBe(347);
  expect(lunarSum(91, 8823)).toBe(8893);
  expect(lunarSum(36602, 696)).toBe(36696);
  expect(lunarSum(2289, 98211285)).toBe(98212289);
});
