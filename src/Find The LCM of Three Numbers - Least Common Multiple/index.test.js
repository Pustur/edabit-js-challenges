import lcmThree from './index';

test('lcmThree', () => {
  expect(lcmThree([3, 4, 12])).toBe(12);
  expect(lcmThree([5, 7, 13])).toBe(455);
  expect(lcmThree([6, 16, 348])).toBe(1392);
  expect(lcmThree([19, 47, 43])).toBe(38399);
  expect(lcmThree([97, 103, 301])).toBe(3007291);
  expect(lcmThree([104, 105, 107])).toBe(1168440);
  expect(lcmThree([97, 997, 301])).toBe(29109409);
});
